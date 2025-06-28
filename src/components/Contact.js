import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can replace this with emailjs or backend call
    alert(`Thank you, ${formData.name}! Your message has been sent.`);

    // Clear form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="max-w-3xl mx-auto bg-gradient-to-b from-[#1a1c2c] to-[#2e2e40] p-8 rounded-2xl shadow-xl">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">📬 Contact Me</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm text-gray-300 mb-1">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm text-gray-300 mb-1">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm text-gray-300 mb-1">Message</label>
          <textarea
            name="message"
            id="message"
            required
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200"
          >
            Send Message
          </button>
        </div>
      </form>

      {/* Optional: Direct email fallback */}
      <p className="text-center mt-6 text-sm text-gray-400">
        Or email me directly at <a href="mailto:pawan@example.com" className="text-indigo-400 underline">pawan@example.com</a>
      </p>
    </div>
  );
};

export default Contact;
