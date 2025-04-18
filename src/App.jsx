import React from "react";

export default function App() {
  return (
    <div className="bg-white min-h-screen text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="bg-blue-50 px-6 py-20 text-center">
        <h1 className="text-4xl font-bold text-[#b61717] mb-4">
          Streamline Your Lesson Planning with AI
        </h1>
        <p className="text-lg text-gray-700 mb-6 max-w-xl mx-auto">
          Instantly generate customized lesson plans aligned with your district’s standards.
        </p>
        <button className="bg-[#b61717] text-white px-6 py-3 rounded-lg text-lg hover:bg-[#951212] transition">
          Generate Your Lesson Plan
        </button>
      </section>

      {/* How It Works */}
      <section className="px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-10">How LessonSphere Helps You Teach Smarter</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            { step: "Sign In", desc: "Log in with your email or district account" },
            { step: "Choose a Standard", desc: "Pick from preloaded state or national standards" },
            { step: "Click Generate", desc: "Download a full lesson plan instantly" },
            { step: "Repeat Weekly", desc: "Plans are saved. Customize or regenerate as needed" },
          ].map(({ step, desc }) => (
            <div key={step} className="p-6 bg-gray-100 rounded shadow">
              <h3 className="text-xl font-bold mb-2">✅ {step}</h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gray-100 px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold mb-10">Save Time. Teach Better. Stay Compliant.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { title: "🕒 Save Hours Weekly", desc: "Full lesson plans in seconds" },
            { title: "🎯 Standards Aligned", desc: "Always up-to-date requirements" },
            { title: "✨ Customizable", desc: "Your tone, your style, your way" },
          ].map(({ title, desc }) => (
            <div key={title} className="p-6 bg-white rounded shadow">
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold mb-10">What Teachers Are Saying</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {[
            { quote: "I used to spend Sundays building lessons. Now I’m done in 3 minutes.", name: "Mr. Simmons, 8th Grade Science" },
            { quote: "This is my favorite teaching tool of the year.", name: "Ms. Lee, K-12 Business Ed" },
            { quote: "It keeps me consistent. And my principal loves the format.", name: "Anonymous Teacher" },
          ].map(({ quote, name }) => (
            <blockquote key={name} className="italic text-lg">
              “{quote}”<br />
              <span className="block text-[#b61717] font-semibold mt-2">— {name}</span>
            </blockquote>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-blue-50 px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold mb-10">Try LessonSphere Free. Upgrade as You Grow.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { title: "Free", price: "$0", desc: "5 plans/month, 1 user" },
            { title: "Pro", price: "$9/mo", desc: "Unlimited plans, history, support" },
            { title: "Campus", price: "Custom", desc: "Admin dashboard, integrations" },
          ].map(({ title, price, desc }) => (
            <div key={title} className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-bold text-[#b61717] mb-2">{title}</h3>
              <p className="text-2xl font-semibold mb-2">{price}</p>
              <p className="text-gray-600 mb-4">{desc}</p>
              <button className="bg-[#b61717] text-white px-4 py-2 rounded hover:bg-[#951212]">Start Free</button>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold mb-6">Ready to Plan Smarter?</h2>
        <p className="text-gray-700 mb-6">Join thousands of educators already simplifying their teaching life.</p>
        <button className="bg-[#b61717] text-white px-6 py-3 rounded-lg text-lg hover:bg-[#951212] transition">
          Start for Free
        </button>
      </section>
    </div>
  );
}
