import { Phone, Instagram, Twitter } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-friends-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-friends-dark mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Connect with us for the latest updates and show information!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h3 className="text-2xl font-semibold text-friends-dark mb-8 text-center">
              Contact Information
            </h3>
            
            <div className="space-y-8">
              <div className="flex items-center justify-center">
                <Phone className="h-8 w-8 text-friends-brown mr-6" />
                <div className="text-center">
                  <p className="font-medium text-friends-dark text-lg">Phone</p>
                  <p className="text-gray-600 text-xl">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-8">
                <p className="text-center text-friends-dark font-medium text-lg mb-6">
                  Follow Us on Social Media
                </p>
                <div className="flex justify-center space-x-8">
                  <a 
                    href="https://instagram.com/friendslive" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex flex-col items-center text-friends-brown hover:text-friends-brown/80 transition-colors duration-300"
                  >
                    <Instagram className="h-10 w-10 mb-2" />
                    <span className="text-sm font-medium">Instagram</span>
                  </a>
                  
                  <a 
                    href="https://twitter.com/friendslive" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex flex-col items-center text-friends-brown hover:text-friends-brown/80 transition-colors duration-300"
                  >
                    <Twitter className="h-10 w-10 mb-2" />
                    <span className="text-sm font-medium">Twitter</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}