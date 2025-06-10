import { useTheme } from '../context/ThemeContext';
import { useState } from 'react';

const ThemeToggle = () => {
  const { isDarkTheme, toggleTheme } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    toggleTheme();
    setTimeout(() => setIsAnimating(false), 600);
  };

  return (
    <button
      onClick={handleClick}
      className="theme-toggle fixed top-4 right-16 sm:top-6 sm:right-6 p-2 rounded-full z-[60] overflow-hidden"
      style={{
        backgroundColor: isDarkTheme ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        color: isDarkTheme ? '#fff' : '#000',
        boxShadow: `0 0 ${isAnimating ? '25px' : '10px'} ${
          isDarkTheme 
            ? 'rgba(255, 255, 255, 0.3)' 
            : 'rgba(0, 0, 0, 0.2)'
        }`,
        width: '40px',
        height: '40px',
        backdropFilter: 'blur(8px)',
        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: `scale(${isAnimating ? '1.15' : '1'})`,
      }}
      aria-label={isDarkTheme ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      <div 
        className="relative w-6 h-6"
        style={{
          transform: `rotate(${isAnimating ? '360deg' : '0deg'}) scale(${isAnimating ? '0.8' : '1'})`,
          transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div
          className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
          style={{ opacity: isDarkTheme ? 1 : 0 }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-full h-full"
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            style={{
              transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: `rotate(${isAnimating ? '180deg' : '0deg'}) scale(${isAnimating ? '1.2' : '1'})`,
            }}
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </div>
        <div
          className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
          style={{ opacity: isDarkTheme ? 0 : 1 }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-full h-full"
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            style={{
              transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: `rotate(${isAnimating ? '-180deg' : '0deg'}) scale(${isAnimating ? '0.8' : '1'})`,
            }}
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </div>
      </div>
      {isAnimating && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at center, ${
              isDarkTheme ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)'
            } 0%, transparent 70%)`,
            animation: 'ripple 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />
      )}
    </button>
  );
};

export default ThemeToggle; 