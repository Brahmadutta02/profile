import { useEffect } from "react";
import { useTheme } from '../context/ThemeContext';

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const { isDarkTheme } = useTheme();
  
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
         style={{ backgroundColor: 'var(--nav-bg)', backdropFilter: 'blur(8px)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold" style={{ color: 'var(--heading-color)' }}>
              Chinmay<span style={{ color: 'var(--primary-color)' }}>.Das</span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" 
                className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                style={{ color: 'var(--text-color)', ':hover': { color: 'var(--primary-color)' } }}
              >
                Home
              </a>
              <a href="#about" 
                className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                style={{ color: 'var(--text-color)', ':hover': { color: 'var(--primary-color)' } }}
              >
                About
              </a>
              <a href="#projects" 
                className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                style={{ color: 'var(--text-color)', ':hover': { color: 'var(--primary-color)' } }}
              >
                Projects
              </a>
              <a href="#contact" 
                className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                style={{ color: 'var(--text-color)', ':hover': { color: 'var(--primary-color)' } }}
              >
                Contact
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md transition-colors duration-200"
              style={{ color: 'var(--text-color)' }}
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
