import { useEffect } from "react";
import { useTheme } from '../context/ThemeContext';

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const { isDarkTheme } = useTheme();

  return (
    <div
      className={`fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out ${
        menuOpen ? "translate-x-0" : "translate-x-full"
      }`}
      style={{ backgroundColor: 'var(--background-color)' }}
    >
      <div className="flex flex-col h-full pt-24 px-6">
        <nav className="space-y-8">
          <a
            href="#home"
            className="block text-2xl font-medium transition-colors duration-200"
            style={{ color: 'var(--text-color)', ':hover': { color: 'var(--primary-color)' } }}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="block text-2xl font-medium transition-colors duration-200"
            style={{ color: 'var(--text-color)', ':hover': { color: 'var(--primary-color)' } }}
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#projects"
            className="block text-2xl font-medium transition-colors duration-200"
            style={{ color: 'var(--text-color)', ':hover': { color: 'var(--primary-color)' } }}
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block text-2xl font-medium transition-colors duration-200"
            style={{ color: 'var(--text-color)', ':hover': { color: 'var(--primary-color)' } }}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
};
