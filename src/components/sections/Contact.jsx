import { useState, useEffect } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { useTheme } from '../../context/ThemeContext';
import { useMouseFollow } from "../../hooks/useMouseFollow";

export const Contact = () => {
  const { isDarkTheme } = useTheme();
  const formBoxRef = useMouseFollow();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return value.length < 2 ? "Name must be at least 2 characters" : "";
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "Please enter a valid email" : "";
      case 'message':
        return value.length < 10 ? "Message must be at least 10 characters" : "";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      message: validateField('message', formData.message),
    };
    setErrors(newErrors);

    // Check if there are any errors
    if (Object.values(newErrors).some(error => error !== "")) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      );
      setSubmitStatus('success');
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const inputStyles = {
    backgroundColor: isDarkTheme ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
    borderColor: 'var(--border-color)',
    color: 'var(--text-color)',
  };

  const getInputClasses = (fieldName) => `
    w-full rounded px-4 py-3 transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-primary-500
    ${errors[fieldName] ? 'border-red-500 focus:ring-red-500' : 'border-transparent'}
    ${formData[fieldName] && !errors[fieldName] ? 'border-green-500 focus:ring-green-500' : ''}
  `;

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
      style={{ color: 'var(--text-color)' }}
    >
      <RevealOnScroll>
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: 'var(--heading-color)' }}>
            Get In Touch
          </h2>
          <h3 className="text-center text-gray-400 mb-8">
            Please contact me at <a href="mailto:chinmaykumardas@gmail.com" className="text-blue-500">chinmaykumardas@gmail.com</a>
          </h3>
          <div className="animated-border-box mouse-follow" ref={formBoxRef}>
            <div className="p-6 rounded-xl transition-all">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    className={getInputClasses('name')}
                    style={inputStyles}
                    placeholder="Name..."
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    className={getInputClasses('email')}
                    style={inputStyles}
                    placeholder="example@gmail.com"
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    className={getInputClasses('message')}
                    style={inputStyles}
                    placeholder="Your Message..."
                    onChange={handleChange}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || Object.values(errors).some(error => error !== "")}
                  className={`
                    w-full py-3 px-6 rounded font-medium transition-all duration-300 
                    relative overflow-hidden hover:-translate-y-0.5
                    ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-100'}
                  `}
                  style={{
                    backgroundColor: 'var(--primary-color)',
                    color: isDarkTheme ? '#ffffff' : '#ffffff',
                    boxShadow: '0 0 15px var(--primary-color)',
                    opacity: isSubmitting ? 0.7 : 0.9,
                  }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : 'Send Message'}
                </button>

                {submitStatus && (
                  <div className={`
                    mt-4 p-3 rounded-lg text-center text-sm font-medium
                    ${submitStatus === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}
                  `}>
                    {submitStatus === 'success' 
                      ? 'Message sent successfully!' 
                      : 'Failed to send message. Please try again.'}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
