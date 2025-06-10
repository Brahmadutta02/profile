import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import "./index.css";
import { Contact } from "./components/sections/Contact";
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import SocialLinks from './components/SocialLinks';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="relative min-h-screen w-full transition-all duration-300" style={{ backgroundColor: 'var(--background-color)' }}>
        <ThemeToggle />
        <SocialLinks />
        {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
        <div
          className={`min-h-screen w-full transition-opacity duration-700 px-4 sm:px-6 lg:px-8 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{ color: 'var(--text-color)' }}
        >
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <main className="max-w-7xl mx-auto">
            <Home />
            <About />
            <Projects />
            <Contact />
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
