
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  // Animation effect for elements
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-eee-purple to-eee-dark-purple py-16 md:py-24 lg:py-32 text-white">
        <div className="container flex flex-col items-center text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight mb-6">
            Educate Empower Elevate Foundation
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            Educate. Empower. Elevate. Transforming young lives for a healthier, stronger Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="default" className="bg-white text-eee-purple hover:bg-gray-100" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <Link to="/get-involved">Donate Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Snapshot */}
      <section className="section container">
        <div className="max-w-3xl mx-auto text-center animate-on-scroll">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700">
            At EEE Foundation, we're dedicated to raising awareness about health and wellness among youth, 
            providing sustainable tools for healthier lifestyles, and empowering the next generation to 
            become active participants in Africa's economic growth.
          </p>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="animate-on-scroll">
              <CardHeader>
                <CardTitle>Adopt a School</CardTitle>
                <CardDescription>Bringing health education directly to classrooms</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gray-100 mb-4 rounded-md overflow-hidden">
                  <img 
                    src="/images/277981ef-28cb-47cf-8f01-f5ab3c475325.png"
                    alt="Students in a classroom"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p>Partnering with local schools to implement comprehensive health education programs.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild>
                  <Link to="/programs">Explore Program</Link>
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="animate-on-scroll">
              <CardHeader>
                <CardTitle>Mind Over Miles</CardTitle>
                <CardDescription>Connecting mental wellbeing with physical activity</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gray-100 mb-4 rounded-md overflow-hidden">
                  <img 
                    src="https://eee-foundation-media.s3.eu-west-1.amazonaws.com/home-banner-image.jpg" 
                    alt="Green mountains landscape"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p>A unique initiative combining mental health awareness with physical fitness challenges.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild>
                  <Link to="/programs">Explore Program</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="section container">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Impact</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border text-center animate-on-scroll">
            <div className="text-4xl font-bold text-eee-purple mb-2">10,000+</div>
            <p className="text-gray-600">Youth reached since 2015</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm border text-center animate-on-scroll">
            <div className="text-4xl font-bold text-eee-purple mb-2">24</div>
            <p className="text-gray-600">Hospitals networked</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm border text-center animate-on-scroll">
            <div className="text-4xl font-bold text-eee-purple mb-2">1,500+</div>
            <p className="text-gray-600">Event attendees</p>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="section bg-eee-purple text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Get Involved</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join our mission to empower youth across Africa. Whether you volunteer, partner with us, or make a donation,
            your support makes a significant impact.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-eee-purple hover:bg-gray-100" asChild>
              <Link to="/get-involved">Volunteer</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white hover:bg-white/10" asChild>
              <Link to="/get-involved">Partner With Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
