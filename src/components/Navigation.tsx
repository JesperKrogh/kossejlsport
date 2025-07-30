import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Anchor } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Forside" },
    { path: "/aktiviteter", label: "Aktiviteter" },
    { path: "/joller", label: "Vores Joller" },
    { path: "/kalender", label: "Kalender" },
    { path: "/medlem", label: "Bliv Medlem" },
    { path: "/om", label: "Om Klubben" },
    { path: "/kontakt", label: "Kontakt" },
  ];

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Anchor className="h-8 w-8 text-primary animate-sail" />
            <span className="text-xl font-bold text-foreground">KØS Sejlsport</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-foreground/80"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button variant="ocean" size="sm">
              Tilmeld Dig
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === item.path
                      ? "text-primary bg-secondary/50"
                      : "text-foreground/80"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-3 pt-2">
                <Button variant="ocean" size="sm" className="w-full">
                  Tilmeld Dig
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;