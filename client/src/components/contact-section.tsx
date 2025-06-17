import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema } from "@shared/schema";
import type { InsertContactMessage } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Send, Instagram, Facebook, Twitter, Mail, Phone, MapPin, ExternalLink } from "lucide-react";

export default function ContactSection() {
  const { toast } = useToast();
  
  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. We'll get back to you soon.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactMessage) => {
    contactMutation.mutate(data);
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
                    disabled={contactMutation.isPending}
                    className="w-full bg-friends-brown text-white hover:bg-friends-peru"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
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
