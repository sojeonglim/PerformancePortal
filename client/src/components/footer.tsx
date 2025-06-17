import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 64;
      const targetPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-friends-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-playfair font-bold mb-4">Friends Live</h3>
            <p className="text-gray-300 leading-relaxed">
              Experience the beloved TV series Friends brought to life on stage by Yoon's English Acting Club. A theatrical experience you'll never forget.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-friends-tan transition-colors duration-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-friends-tan transition-colors duration-300"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('cast')}
                  className="text-gray-300 hover:text-friends-tan transition-colors duration-300"
                >
                  Cast
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('show')}
                  className="text-gray-300 hover:text-friends-tan transition-colors duration-300"
                >
                  Show Details
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-friends-tan transition-colors duration-300"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-300 mb-4">Get the latest news about Friends Live</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-friends-tan transition-colors duration-300">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-friends-tan transition-colors duration-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-friends-tan transition-colors duration-300">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Friends Live. All rights reserved. | A production by Yoon's English Acting Club</p>
        </div>
      </div>
    </footer>
  );
}
