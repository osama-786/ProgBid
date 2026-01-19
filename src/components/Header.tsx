import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ExampleWithModalButton } from "./UniversalModal"; 
import { NavLink, useLocation } from "react-router-dom";

const navItems = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "User Acquisition", to: "/user-acquisition" },
  { name: "Retargeting", to: "/retargeting" },
  { name: "Branding", to: "/branding" },
  { name: "Contact", to: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  // Define our custom colors for cleaner usage in inline styles
  const black = '#000000'; //text/accent color


  return (
   <header className="fixed top-0 w-full z-50 transition-all duration-300 bg-white shadow-lg">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <NavLink to="/" className="flex items-center gap-3 group">
            <div className="w-full h-10 pt-8 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <img className="pb-8 h-24 w-auto lg:w-28" src="/ProgbidLogo.png" alt="Progbid Logo"/>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={handleNavClick}
                className={({ isActive }) =>
                  `
                    px-5 py-2 rounded-full text-base font-bold transition-all duration-300
                    ${isActive 
                      ? "text-white shadow-md transform scale-105" 
                      : "hover:bg-[rgba(60,40,30,0.08)]" // Lite brown hover tint
                    }
                  `
                }
                style={({ isActive }) => ({
                  // 2. TEXT & ACTIVE STATES
                  color: isActive ? '#ffffff' : black,
                  backgroundColor: isActive ? black : 'transparent',
                })}
                end={item.to === "/"}
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <ExampleWithModalButton />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            aria-label="Toggle Menu"
            className="md:hidden p-2 rounded-md hover:bg-[rgba(60,40,30,0.1)] focus:outline-none transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" style={{ color: black }} />
            ) : (
              <Menu className="w-6 h-6" style={{ color: black }} />
            )}
          </button>
        </div>

        {/* Mobile Navigation Panel */}
        {isMenuOpen && (
          <nav 
            className="md:hidden py-6 animate-fade-in-up border-t border-[rgba(60,40,30,0.1)] shadow-xl"
            style={{
              backgroundColor: 'rgba(235, 225, 215, 0.98)', // Slightly more opaque for mobile
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
            }}
          >
            <ul className="flex flex-col gap-2 px-4 text-center">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    onClick={handleNavClick}
                    className={({ isActive }) =>
                      `block py-3 px-4 rounded-xl text-lg font-semibold transition-all duration-200`
                    }
                    style={({ isActive }) => ({
                      color: isActive ? '#ffffff' : black,
                      backgroundColor: isActive ? black : 'transparent',
                    })}
                    end={item.to === "/"}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}

              <li className="pt-6 mt-2 border-t border-[rgba(60,40,30,0.1)] flex justify-center">
                <ExampleWithModalButton />
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;