
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

  // Team members data
  const teamMembers = [
    { name: "Jane Smith", role: "Executive Director", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&h=500&fit=crop", bio: "Health policy expert with over 15 years of experience in public health initiatives." },
    { name: "Michael Johnson", role: "Programs Director", image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&h=500&fit=crop", bio: "Former educator passionate about integrating health education into school curricula." },
    { name: "Sarah Nkosi", role: "Community Outreach", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop", bio: "Dedicated to building strong partnerships between communities and health institutions." },
    { name: "David Okafor", role: "Finance Director", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&h=500&fit=crop", bio: "Financial expert committed to ensuring sustainable funding for youth health programs." },
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
                <div className="w-40 h-40 rounded-full overflow-hidden mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-eee-purple mb-2">{member.role}</p>
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
