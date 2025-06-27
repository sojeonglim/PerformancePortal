import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Ticket, Play, ChevronDown } from "lucide-react";
import { images } from "@/data/images";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: `url('${images.hero}')`
        }}
      />
      <div className="absolute inset-0 gradient-overlay" />
      
      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-playfair font-bold mb-6 text-shadow">
          The One Where<br />
          <span className="font-dancing text-friends-tan">They're Live!</span>
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-shadow max-w-3xl mx-auto">
          Relive the laughter and love with a live stage adaptation of the iconic TV series Friends. 
          Join us for an unforgettable evening of nostalgia and fun!
        </p>
        
        {/* Event Details */}
        <div className="bg-white bg-opacity-90 rounded-xl p-6 mb-8 text-friends-dark max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <Calendar className="text-2xl text-friends-brown mb-2 mx-auto" />
              <p className="font-semibold">July 20, 2024</p>
              <p className="text-sm text-gray-600">Saturday</p>
            </div>
            <div>
              <Clock className="text-2xl text-friends-brown mb-2 mx-auto" />
              <p className="font-semibold">8:00 PM</p>
              <p className="text-sm text-gray-600">Doors open at 7:30 PM</p>
            </div>
            <div>
              <MapPin className="text-2xl text-friends-brown mb-2 mx-auto" />
              <p className="font-semibold">The Grand Theater</p>
              <p className="text-sm text-gray-600">New York City</p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-friends-brown text-white hover:bg-friends-peru transform hover:scale-105 transition-all duration-300 shadow-lg px-8 py-4"
          >
            <Ticket className="mr-2 h-5 w-5" />
            Get Tickets Now
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-white text-white hover:bg-white hover:text-friends-brown px-8 py-4"
          >
            <Play className="mr-2 h-5 w-5" />
            Watch Trailer
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown size={32} />
      </div>
    </section>
  );
}
