
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Footer = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Newsletter subscription received",
      description: "Thank you for subscribing to our newsletter!",
    });
    setEmail("");
  };
  
  return (
    <footer className="bg-gray-100 border-t">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">EEE Foundation</h3>
            <p className="text-sm text-muted-foreground">
              Educate. Empower. Elevate. Transforming young lives for a healthier, stronger Africa.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" aria-label="Facebook" className="text-gray-500 hover:text-eee-purple">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="text-gray-500 hover:text-eee-purple">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm hover:text-eee-purple">About Us</Link></li>
              <li><Link to="/programs" className="text-sm hover:text-eee-purple">Our Programs</Link></li>
              <li><Link to="/events" className="text-sm hover:text-eee-purple">Events</Link></li>
              <li><Link to="/get-involved" className="text-sm hover:text-eee-purple">Get Involved</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact Us</h3>
            <address className="not-italic text-sm text-muted-foreground">
              <p>info@eeefoundation.co.za</p>
              <p>+27 81 617 1449</p>
            </address>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Subscribe</h3>
            <p className="text-sm text-muted-foreground">Stay updated on our next event</p>
            <form onSubmit={handleSubmit} className="space-y-2">
              <div className="flex w-full max-w-sm items-center space-x-2">
                <Input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="max-w-[220px]"
                />
                <Button type="submit" className="bg-eee-purple hover:bg-eee-dark-purple">
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} EEE Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
