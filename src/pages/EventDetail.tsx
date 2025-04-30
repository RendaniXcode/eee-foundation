
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const EventDetail = () => {
  const { eventSlug } = useParams();

  // Mind Over Miles specific content - in production this would come from an API
  const eventData = {
    title: "Mind Over Miles 2025",
    date: "14 June 2025",
    time: "7:00 AM - 1:00 PM",
    location: "Kings Park Stadium, Durban",
    cost: "R150 per person",
    description: "Annual running event promoting mental health awareness and physical wellness.",
    registration: {
      opens: "15 January 2025",
      closes: "7 June 2025"
    },
    heroImage: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    details: `
      Mind Over Miles combines a 5K/10K run with mental health awareness activities. 
      The event brings together runners of all experience levels to promote the connection 
      between physical activity and mental wellbeing.
      
      Your registration includes an event t-shirt, refreshments, and a finisher's medal.
      All proceeds go towards supporting mental health programs for youth across South Africa.
    `,
    schedule: [
      { time: "6:00 AM", activity: "Registration & Check-in Opens" },
      { time: "6:45 AM", activity: "Warm-up Session" },
      { time: "7:00 AM", activity: "10K Race Start" },
      { time: "7:15 AM", activity: "5K Race Start" },
      { time: "8:30 AM", activity: "First Finishers Expected" },
      { time: "9:30 AM", activity: "Award Ceremony" },
      { time: "10:00 AM - 1:00 PM", activity: "Mental Health Fair & Community Activities" }
    ],
    highlights: [
      "Professional chip timing for accurate race results",
      "Beautiful coastal route with ocean views",
      "Water stations every 2km along the route",
      "Mental health resources and professionals on-site",
      "Family-friendly activities and entertainment",
      "Post-race refreshments and recovery zone"
    ]
  };

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
      <section 
        className="relative bg-cover bg-center h-[50vh]" 
        style={{ backgroundImage: `url(${eventData.heroImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="container text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{eventData.title}</h1>
            <div className="flex justify-center gap-4 flex-wrap">
              <span className="bg-eee-purple/80 px-4 py-2 rounded-full text-sm md:text-base flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {eventData.date}
              </span>
              <span className="bg-eee-purple/80 px-4 py-2 rounded-full text-sm md:text-base flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {eventData.location}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Event Overview */}
      <section className="section container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 animate-on-scroll">
            <h2 className="text-3xl font-bold mb-6">Event Overview</h2>
            <p className="text-lg mb-6">{eventData.details}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Calendar className="text-eee-purple" />
                  Event Details
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="font-medium w-24">Date:</span> 
                    <span>{eventData.date}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium w-24">Time:</span> 
                    <span>{eventData.time}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium w-24">Location:</span> 
                    <span>{eventData.location}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium w-24">Cost:</span> 
                    <span>{eventData.cost}</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Users className="text-eee-purple" />
                  Registration
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="font-medium w-24">Opens:</span> 
                    <span>{eventData.registration.opens}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium w-24">Closes:</span> 
                    <span>{eventData.registration.closes}</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Button className="w-full bg-eee-purple hover:bg-eee-dark-purple" size="lg">
                    Register Now
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Event Highlights */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">Event Highlights</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {eventData.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-eee-purple font-bold">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Schedule Sidebar */}
          <div className="animate-on-scroll">
            <div className="bg-eee-purple/10 p-6 rounded-lg sticky top-24">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Clock className="text-eee-purple" />
                Event Schedule
              </h3>
              <ul className="space-y-4">
                {eventData.schedule.map((item, index) => (
                  <li key={index} className="border-b border-gray-200 pb-3 last:border-0">
                    <span className="font-semibold text-eee-purple block">{item.time}</span>
                    <span>{item.activity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Join Us for Mind Over Miles 2025</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Be part of a community event that promotes both physical and mental wellness. 
            Register today and take the first step towards making a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-eee-purple hover:bg-eee-dark-purple" size="lg">
              Register Now
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/events">View All Events</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventDetail;
