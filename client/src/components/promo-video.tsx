import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PromoVideo() {
  return (
    <section className="py-20 bg-friends-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-friends-brown mb-6">Promo Video</h2>
          <p className="text-lg text-friends-dark max-w-3xl mx-auto">
            Get a sneak peek of our Friends Live performance and see what makes this adaptation so special.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-friends-brown rounded-xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=675" 
              alt="Friends Live Performance Preview" 
              className="w-full h-auto" 
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <Button 
                size="lg"
                className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-6 transform hover:scale-110 transition-all duration-300 shadow-lg"
              >
                <Play className="h-8 w-8 text-friends-brown" />
              </Button>
            </div>
          </div>
          <p className="text-center text-friends-dark mt-4 text-sm">
            Click to watch our exclusive behind-the-scenes footage and cast interviews
          </p>
        </div>
      </div>
    </section>
  );
}
