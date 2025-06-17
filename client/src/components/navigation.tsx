import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Ticket } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 64; // Height of fixed nav
      const targetPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-xl font-playfair font-bold friends-brown">Friends Live</h1>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="friends-dark hover:friends-peru transition-colors duration-300"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="friends-dark hover:friends-peru transition-colors duration-300"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('cast')}
              className="friends-dark hover:friends-peru transition-colors duration-300"
            >
              Cast
            </button>
            <button 
              onClick={() => scrollToSection('show')}
              className="friends-dark hover:friends-peru transition-colors duration-300"
            >
              Show Details
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="friends-dark hover:friends-peru transition-colors duration-300"
            >
              Contact
            </button>
            <Button className="bg-friends-brown text-white hover:bg-friends-peru">
              <Ticket className="mr-2 h-4 w-4" />
              Get Tickets
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="friends-dark hover:friends-peru focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button 
              onClick={() => scrollToSection('home')}
              className="block px-3 py-2 friends-dark hover:bg-friends-beige rounded-md transition-colors duration-300 w-full text-left"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block px-3 py-2 friends-dark hover:bg-friends-beige rounded-md transition-colors duration-300 w-full text-left"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('cast')}
              className="block px-3 py-2 friends-dark hover:bg-friends-beige rounded-md transition-colors duration-300 w-full text-left"
            >
              Cast
            </button>
            <button 
              onClick={() => scrollToSection('show')}
              className="block px-3 py-2 friends-dark hover:bg-friends-beige rounded-md transition-colors duration-300 w-full text-left"
            >
              Show Details
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block px-3 py-2 friends-dark hover:bg-friends-beige rounded-md transition-colors duration-300 w-full text-left"
            >
              Contact
            </button>
            <Button className="w-full mt-2 bg-friends-brown text-white hover:bg-friends-peru">
              <Ticket className="mr-2 h-4 w-4" />
              Get Tickets
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
