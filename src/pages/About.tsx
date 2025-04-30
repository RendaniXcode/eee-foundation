
import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from "react";

const About = () => {
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

  // Updated team members data based on the provided image
  const teamMembers = [
    { 
      name: "Sinethemba Maphumulo", 
      role: "Chairperson", 
      image: "/lovable-uploads/a1289fd6-3f2f-40c6-93a0-0d1e408f269a.png", 
      bio: "Leading the vision and strategic direction of the EEE Foundation." 
    },
    { 
      name: "Zanele Qomoyi", 
      role: "Director - Treasurer", 
      image: "/lovable-uploads/a1289fd6-3f2f-40c6-93a0-0d1e408f269a.png", 
      bio: "Managing the foundation's finances and ensuring sustainable funding." 
    },
    { 
      name: "Lebogang Nzimande", 
      role: "Director - Secretary", 
      image: "/lovable-uploads/a1289fd6-3f2f-40c6-93a0-0d1e408f269a.png", 
      bio: "Handling administrative duties and maintaining official records." 
    },
    { 
      name: "Project Administrator", 
      role: "Project Administrator", 
      image: "/lovable-uploads/a1289fd6-3f2f-40c6-93a0-0d1e408f269a.png", 
      bio: "Coordinating the foundation's initiatives and day-to-day operations." 
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-eee-purple text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg max-w-3xl">
            Learn about our journey, mission, and the team driving positive change in youth health across Africa.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section container">
        <div className="max-w-3xl animate-on-scroll">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <div className="space-y-4">
            <p className="text-lg">
              EEE Foundation began in 2015 with a simple but powerful vision: to create a generation of
              empowered youth with the knowledge and tools to lead healthier lives.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>2015: Founded with a focus on health education programs in local communities</li>
              <li>2018: Launched the "Adopt a School" program, expanding our reach to educational institutions</li>
              <li>2022: Introduced "Mind Over Miles" to address the connection between mental and physical health</li>
              <li>2024: Re-registered with expanded mission to encompass sustainable health solutions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg">
                Competent, healthy and empowered youth partaking in Africa's economic growth.
              </p>
            </div>
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg">
                To provide accurate information, sustainable tools, and innovative programs that 
                promote healthier lifestyles among youth, enabling them to become active contributors 
                to their communities and the broader African economy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section container">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <Card className="animate-on-scroll">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2 text-eee-purple">Integrity</h3>
              <p>We conduct our work with honesty, transparency, and ethical standards in all our interactions.</p>
            </CardContent>
          </Card>
          <Card className="animate-on-scroll">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2 text-eee-purple">Sustainability</h3>
              <p>We develop programs and solutions that create lasting impact and can be maintained by local communities.</p>
            </CardContent>
          </Card>
          <Card className="animate-on-scroll">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2 text-eee-purple">Innovation</h3>
              <p>We embrace creative approaches to address health challenges facing African youth.</p>
            </CardContent>
          </Card>
          <Card className="animate-on-scroll">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2 text-eee-purple">Community</h3>
              <p>We believe in the power of collective action and fostering a sense of belonging and mutual support.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Leadership Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center text-center animate-on-scroll">
                <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-4 border-yellow-400">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-green-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
