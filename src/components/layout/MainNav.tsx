
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const MainNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Events", path: "/events" },
    { name: "Get Involved", path: "/get-involved" },
    { name: "News & Media", path: "/news" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="border-b sticky top-0 z-50 bg-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-eee-green font-bold text-2xl tracking-tight">EEE Foundation</span>
          </Link>
          
          <nav className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-eee-green",
                  location.pathname === item.path ? "text-eee-green" : "text-foreground/80"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" size="sm" asChild>
            <Link to="/get-involved">Volunteer</Link>
          </Button>
          <Button className="bg-eee-green hover:bg-eee-green/90" size="sm" asChild>
            <Link to="/get-involved">Donate</Link>
          </Button>
        </div>
        
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu"
          >
            {!isMenuOpen ? (
              <>
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="18" x2="6" y1="6" y2="18" />
                <line x1="6" x2="18" y1="6" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden py-4 px-6 bg-white border-t">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-base font-medium transition-colors hover:text-eee-green",
                  location.pathname === item.path ? "text-eee-green" : "text-foreground/80"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 pt-2">
              <Button variant="outline" className="w-full" asChild>
                <Link to="/get-involved" onClick={() => setIsMenuOpen(false)}>Volunteer</Link>
              </Button>
              <Button className="w-full bg-eee-green hover:bg-eee-green/90" asChild>
                <Link to="/get-involved" onClick={() => setIsMenuOpen(false)}>Donate</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default MainNav;
