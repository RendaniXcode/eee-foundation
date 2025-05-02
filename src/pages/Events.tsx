
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Events = () => {
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

  // Sample upcoming events
  const upcomingEvents = [
    {
      id: 1,
      title: "Mind Over Miles 2025",
      date: "14 June 2025",
      location: "Kings Park Stadium, Durban",
      description: "Annual running event promoting mental health awareness and physical wellness.",
      image: "https://eee-foundation-media.s3.eu-west-1.amazonaws.com/fc56440f-4a94-47bb-8684-c53881e4973e.png",
      featured: true,
      slug: "mind-over-miles"
    },
    {
      id: 2,
      title: "Youth Health Summit",
      date: "23 July 2025",
      location: "Johannesburg Conference Centre",
      description: "Bringing together youth leaders to discuss pressing health challenges and solutions.",
      image: "/images/277981ef-28cb-47cf-8f01-f5ab3c475325.png",
      featured: false,
      slug: "youth-health-summit"
    },
    {
      id: 3,
      title: "School Health Fair",
      date: "5 September 2025",
      location: "Various Schools in Cape Town",
      description: "Interactive health education day with screenings, activities, and resources.",
      image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23",
      featured: false,
      slug: "school-health-fair"
    }
  ];

  // Sample past events
  const pastEvents = [
    {
      id: 4,
      title: "Mind Over Miles 2024",
      date: "16 June 2024",
      location: "Kings Park Stadium, Durban",
      description: "Over 1,200 participants joined our annual run for mental health awareness.",
      image: "/images/088bdabc-99b4-4c8c-b933-aaaf6ef40189.png",
      slug: "mind-over-miles-2024"
    },
    {
      id: 5,
      title: "Youth Health Workshop Series",
      date: "March-May 2024",
      location: "Multiple Locations",
      description: "Six-week workshop series covering nutrition, physical activity, and mental wellbeing.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      slug: "youth-health-workshop-series-2024"
    }
  ];

  // Featured event details
  const featuredEvent = upcomingEvents.find(event => event.featured);

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-eee-purple text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Events</h1>
          <p className="text-lg max-w-3xl">
            Join us at our upcoming events or explore highlights from our past gatherings.
          </p>
        </div>
      </section>

      {/* Featured Event */}
      {featuredEvent && (
        <section className="section container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="animate-on-scroll">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src={featuredEvent.image} 
                  alt={featuredEvent.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold mb-2">{featuredEvent.title}</h2>
              <div className="flex flex-wrap gap-4 mb-4">
                <span className="bg-eee-purple/10 text-eee-purple px-3 py-1 rounded-full text-sm font-medium">
                  {featuredEvent.date}
                </span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                  {featuredEvent.location}
                </span>
              </div>
              <p className="text-lg mb-6">{featuredEvent.description}</p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Event Details</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="font-medium w-24">Date:</span> 
                      <span>{featuredEvent.date}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium w-24">Time:</span> 
                      <span>7:00 AM - 1:00 PM</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium w-24">Location:</span> 
                      <span>{featuredEvent.location}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium w-24">Cost:</span> 
                      <span>R150 per person (includes t-shirt, refreshments, and medal)</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">About Mind Over Miles</h3>
                  <p>
                    Our flagship annual event combines a 5K/10K run with mental health awareness activities. 
                    The event includes inspirational speakers, resources from mental health professionals, 
                    and a community celebration promoting the connection between physical activity and 
                    mental wellbeing.
                  </p>
                </div>
                
                <Button className="bg-eee-purple hover:bg-eee-dark-purple" size="lg" asChild>
                  <Link to={`/events/${featuredEvent.slug}`}>Register Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Event Tabs */}
      <section className="section bg-gray-50">
        <div className="container">
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
              <TabsTrigger value="past">Past Events</TabsTrigger>
            </TabsList>
            
            <TabsContent value="upcoming" className="animate-on-scroll">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingEvents.map(event => (
                  <Card key={event.id}>
                    <div className="aspect-[3/2] overflow-hidden">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{event.title}</CardTitle>
                      <CardDescription>
                        <div className="flex flex-col gap-1">
                          <span>{event.date}</span>
                          <span>{event.location}</span>
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{event.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" asChild>
                        <Link to={`/events/${event.slug}`}>View Details</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="past" className="animate-on-scroll">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pastEvents.map(event => (
                  <Card key={event.id}>
                    <div className="aspect-[3/2] overflow-hidden">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-full object-cover opacity-80"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{event.title}</CardTitle>
                      <CardDescription>
                        <div className="flex flex-col gap-1">
                          <span>{event.date}</span>
                          <span>{event.location}</span>
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{event.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" asChild>
                        <Link to={`/events/${event.slug}`}>View Highlights</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Events;
