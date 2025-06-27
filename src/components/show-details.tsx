import { Calendar, Clock, Hourglass, Languages, MapPin, Building, Car, Accessibility } from "lucide-react";
import { images } from "@/data/images";

export default function ShowDetails() {
  return (
    <section id="show" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-friends-brown mb-6">Show Details</h2>
          <p className="text-lg text-friends-dark max-w-3xl mx-auto">
            Everything you need to know about our Friends Live performance, from ticket information to venue details.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src={images.venue} 
              alt="The Grand Theater Interior" 
              className="rounded-xl shadow-lg w-full h-auto" 
            />
          </div>
          <div className="space-y-8">
            <div className="bg-friends-beige p-6 rounded-xl">
              <h3 className="text-2xl font-playfair font-bold text-friends-brown mb-4">Performance Details</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Calendar className="text-friends-brown mr-3 h-5 w-5" />
                  <span><strong>Date:</strong> Saturday, July 20, 2024</span>
                </div>
                <div className="flex items-center">
                  <Clock className="text-friends-brown mr-3 h-5 w-5" />
                  <span><strong>Time:</strong> 8:00 PM (Doors open at 7:30 PM)</span>
                </div>
                <div className="flex items-center">
                  <Hourglass className="text-friends-brown mr-3 h-5 w-5" />
                  <span><strong>Duration:</strong> Approximately 2 hours (including intermission)</span>
                </div>
                <div className="flex items-center">
                  <Languages className="text-friends-brown mr-3 h-5 w-5" />
                  <span><strong>Language:</strong> English</span>
                </div>
              </div>
            </div>
            
            <div className="bg-friends-beige p-6 rounded-xl">
              <h3 className="text-2xl font-playfair font-bold text-friends-brown mb-4">Venue Information</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <MapPin className="text-friends-brown mr-3 h-5 w-5" />
                  <span><strong>The Grand Theater</strong></span>
                </div>
                <div className="flex items-center">
                  <Building className="text-friends-brown mr-3 h-5 w-5" />
                  <span>123 Broadway, New York City, NY 10001</span>
                </div>
                <div className="flex items-center">
                  <Car className="text-friends-brown mr-3 h-5 w-5" />
                  <span>Parking available nearby</span>
                </div>
                <div className="flex items-center">
                  <Accessibility className="text-friends-brown mr-3 h-5 w-5" />
                  <span>Accessibility accessible</span>
                </div>
              </div>
            </div>
            
            <div className="bg-friends-beige p-6 rounded-xl">
              <h3 className="text-2xl font-playfair font-bold text-friends-brown mb-4">Ticket Information</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span><strong>General Admission:</strong></span>
                  <span className="text-friends-brown font-bold">$25</span>
                </div>
                <div className="flex items-center justify-between">
                  <span><strong>Student Discount:</strong></span>
                  <span className="text-friends-brown font-bold">$15</span>
                </div>
                <div className="flex items-center justify-between">
                  <span><strong>Group Rate (5+):</strong></span>
                  <span className="text-friends-brown font-bold">$20 each</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
