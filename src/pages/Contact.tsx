
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const { toast } = useToast();
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description: "Thank you for contacting us. We'll get back to you soon!",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };
  
  const faqItems = [
    {
      question: "How can I adopt a school?",
      answer: "To adopt a school, please fill out our contact form and select 'Partner & Sponsor' as the subject. One of our team members will reach out with details about the program and how your organization can get involved."
    },
    {
      question: "How can I volunteer with EEE Foundation?",
      answer: "We welcome volunteers with a range of skills and backgrounds. Visit our 'Get Involved' page and complete the volunteer form. We'll match you with opportunities that fit your interests and availability."
    },
    {
      question: "Do you offer internships?",
      answer: "Yes, we offer internships for students and recent graduates interested in public health, education, and non-profit management. These opportunities are posted on our 'Get Involved' page when available."
    },
    {
      question: "How is the EEE Foundation funded?",
      answer: "We receive funding through a combination of corporate sponsorships, individual donations, grants, and fundraising events. All financial information is available in our annual reports."
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-eee-purple text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg max-w-3xl">
            Have questions or want to get involved? Reach out to us and we'll get back to you soon.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a topic" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="volunteer">Volunteer Opportunities</SelectItem>
                    <SelectItem value="sponsor">Partner & Sponsor</SelectItem>
                    <SelectItem value="press">Press & Media</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button type="submit" className="bg-eee-purple hover:bg-eee-dark-purple w-full sm:w-auto">
                Send Message
              </Button>
            </form>
          </div>
          
          <div>
            <Card>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
                  <div className="space-y-3">
                    <p className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                      <a href="mailto:info@eeefoundation.co.za" className="hover:text-eee-purple">
                        info@eeefoundation.co.za
                      </a>
                    </p>
                    <p className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                      <span>+27 81 617 1449</span>
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="https://facebook.com" aria-label="Facebook" className="text-gray-500 hover:text-eee-purple">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                    </a>
                    <a href="https://instagram.com" aria-label="Instagram" className="text-gray-500 hover:text-eee-purple">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                    </a>
                  </div>
                </div>
                
                <div className="pt-4">
                  <h3 className="text-lg font-semibold mb-2">Office Hours</h3>
                  <p>Monday - Friday: 8:30 AM - 5:00 PM</p>
                  <p>Saturday - Sunday: Closed</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Location</h2>
          <div className="h-96 rounded-lg overflow-hidden border">
            {/* Placeholder for map - would be replaced with actual Google Maps embed */}
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">Google Maps Embed Would Appear Here</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section container">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-medium">{item.question}</AccordionTrigger>
                <AccordionContent>
                  <p>{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default Contact;
