import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, Instagram, Facebook, Twitter, Mail, Phone, MapPin, ExternalLink } from "lucide-react";

// Contact form schema for static site
const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Using Formspree for form handling - replace with your Formspree endpoint
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for your message. We'll get back to you soon.",
        });
        form.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact us directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-friends-brown mb-6">Get in Touch</h2>
          <p className="text-lg text-friends-dark max-w-3xl mx-auto">
            Have questions about the show? Want to leave us a message? We'd love to hear from you!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-friends-beige">
            <CardContent className="p-8">
              <h3 className="text-2xl font-playfair font-bold text-friends-brown mb-6">Send Us a Message</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-friends-dark font-medium">Your Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter your name" 
                            className="border-friends-tan focus:ring-2 focus:ring-friends-brown"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-friends-dark font-medium">Email Address</FormLabel>
                        <FormControl>
                          <Input 
                            type="email"
                            placeholder="Enter your email" 
                            className="border-friends-tan focus:ring-2 focus:ring-friends-brown"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-friends-dark font-medium">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us what you think about Friends Live!" 
                            className="border-friends-tan focus:ring-2 focus:ring-friends-brown min-h-[120px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-friends-brown text-white hover:bg-friends-peru"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-friends-beige">
              <CardContent className="p-8">
                <h3 className="text-2xl font-playfair font-bold text-friends-brown mb-6">Follow Us</h3>
                <div className="space-y-4">
                  <a href="#" className="flex items-center text-friends-dark hover:text-friends-brown transition-colors duration-300">
                    <Instagram className="text-2xl mr-4 h-6 w-6" />
                    <span>@friends_live_performance</span>
                    <ExternalLink className="ml-auto h-4 w-4" />
                  </a>
                  <a href="#" className="flex items-center text-friends-dark hover:text-friends-brown transition-colors duration-300">
                    <Facebook className="text-2xl mr-4 h-6 w-6" />
                    <span>Friends Live Official</span>
                    <ExternalLink className="ml-auto h-4 w-4" />
                  </a>
                  <a href="#" className="flex items-center text-friends-dark hover:text-friends-brown transition-colors duration-300">
                    <Twitter className="text-2xl mr-4 h-6 w-6" />
                    <span>@FriendsLiveShow</span>
                    <ExternalLink className="ml-auto h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-friends-beige">
              <CardContent className="p-8">
                <h3 className="text-2xl font-playfair font-bold text-friends-brown mb-6">Contact Info</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="text-friends-brown mr-4 h-5 w-5" />
                    <span>info@friendslive.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="text-friends-brown mr-4 h-5 w-5" />
                    <span>(555) 123-FRIENDS</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="text-friends-brown mr-4 h-5 w-5" />
                    <div>
                      <div>Yoon's English Acting Club</div>
                      <div>New York City</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
