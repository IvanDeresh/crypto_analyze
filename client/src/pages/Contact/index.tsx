import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmissionStatus(
        "Thank you for contacting us! We will get back to you soon."
      );
    } catch (error) {
      setSubmissionStatus(
        "Sorry, something went wrong. Please try again later."
      );
    }

    setIsSubmitting(false);
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-gray-900 p-6 rounded-lg shadow-lg"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-white font-semibold mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-3 rounded bg-gray-700 text-white"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-white font-semibold mb-2"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-3 rounded bg-gray-700 text-white"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-white font-semibold mb-2"
          >
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full p-3 rounded bg-gray-700 text-white"
            rows={4}
            required
          />
        </div>

        <button
          type="submit"
          className={`w-full p-3 rounded bg-blue-600 text-white font-semibold ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>

      {submissionStatus && (
        <div className="mt-4 text-center text-white">
          <p>{submissionStatus}</p>
        </div>
      )}

      <div className="mt-12 max-w-lg mx-auto text-center text-white">
        <h2 className="text-2xl font-semibold mb-4">Other Ways to Reach Us</h2>
        <p>
          Email:{" "}
          <a href="mailto:contact@yourwebsite.com" className="text-blue-400">
            contact@yourwebsite.com
          </a>
        </p>
        <p className="mt-2">
          Phone:{" "}
          <a href="tel:+123456789" className="text-blue-400">
            +1 (234) 567-89
          </a>
        </p>
        <p className="mt-2">Address: 1234 Street, City, Country</p>
      </div>
    </div>
  );
};

export default Contact;
