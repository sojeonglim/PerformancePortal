import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission for static site
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your interest. We'll get back to you soon!",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-friends-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-friends-dark mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Have questions about the show? Want to book tickets for your group? 
            We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-friends-dark mb-6">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-friends-brown mr-4" />
                <div>
                  <p className="font-medium text-friends-dark">Email</p>
                  <p className="text-gray-600">info@friendslive.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-friends-brown mr-4" />
                <div>
                  <p className="font-medium text-friends-dark">Phone</p>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-friends-brown mr-4" />
                <div>
                  <p className="font-medium text-friends-dark">Venue</p>
                  <p className="text-gray-600">
                    Central Perk Theater<br />
                    123 Broadway Street<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold text-friends-dark mb-3">
                Show Times
              </h4>
              <div className="space-y-2 text-gray-600">
                <p><strong>Friday:</strong> 7:30 PM</p>
                <p><strong>Saturday:</strong> 2:00 PM & 7:30 PM</p>
                <p><strong>Sunday:</strong> 2:00 PM</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold text-friends-dark mb-6">
              Send Us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full"
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-friends-brown hover:bg-friends-brown/90 text-white py-3"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>

            <p className="mt-4 text-sm text-gray-600 text-center">
              We typically respond within 24 hours during business days.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}