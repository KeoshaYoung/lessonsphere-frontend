import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import SignIn from "./SignIn";
import { signOut } from "firebase/auth";

function App() {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("Ms. Johnson");
  const [standard, setStandard] = useState("SS.BUSINESS.4.1");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
        setName(firebaseUser.displayName || "Ms. Johnson");
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGenerate = async () => {
    setLoading(true);
    const response = await fetch("https://lessonsphere-backend.onrender.com/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: { name },
        standard,
      }),
    });

    if (response.ok) {
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "lesson_plan.docx";
      a.click();
    }
    setLoading(false);
  };

  if (!user) return <SignIn onLogin={() => {}} />;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-blue-600">
          LessonSphere
        </h1>
        <label className="block mb-2 font-medium">Your Name</label>
        <input
          className="w-full border px-3 py-2 rounded mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label className="block mb-2 font-medium">Standard</label>
        <select
          className="w-full border px-3 py-2 rounded mb-6"
          value={standard}
          onChange={(e) => setStandard(e.target.value)}
        >
          <option value="SS.BUSINESS.4.1">SS.BUSINESS.4.1</option>
          <option value="SS.MATH.2.5">SS.MATH.2.5</option>
          <option value="SCI.LIFE.3.4">SCI.LIFE.3.4</option>
        </select>
        <button
          className="text-sm text-red-500 underline mb-4 float-right"
          onClick={() => signOut(auth)}
        >
          Log Out
        </button>
        <button
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:bg-blue-300"
          onClick={handleGenerate}
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate Lesson Plan"}
        </button>
      </div>
    </div>
  );
}

export default App;
