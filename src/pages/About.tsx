
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

  // Updated team members data with detailed info for all team members
  const teamMembers = [
    { 
      name: "Sinethemba Maphumulo", 
      role: "Chairperson", 
      image: "/lovable-uploads/bdce63bd-ff4e-4224-a494-25dda56203f6.png", 
      bio: "BCom (Majors in Managerial Accounting & Finance and Economics)",
      details: "Social entrepreneur who is passionate about skills development and youth empowerment. Previously worked in different Finance departments. Managing Director of group company focused in manufacturing, export market expansion with special interest in events, tourism and property investment.",
      quote: "Making an impact in disadvantaged population groups especially the youth is my calling."
    },
    { 
      name: "Zanele Qomoyi", 
      role: "Director - Treasurer", 
      image: "/lovable-uploads/5d0899c0-fdc6-4ca6-8485-b4e7a98314ae.png", 
      bio: "BCom Hons (Business Management), Certificate Fashion Design",
      details: "Result driven and compassionate leader with experience in banking, administration and stakeholder engagement. Proven performance history of effective team leadership and relationship management. Dedicated to empowering communities with a passion for fashion, women empowering.",
      quote: "I aim to continue growing and developing as a leader and change-maker."
    },
    { 
      name: "Lebogang Nzimande", 
      role: "Director - Secretary", 
      image: "/lovable-uploads/1c78400f-8c64-4bea-8b10-401518739816.png", 
      bio: "Diploma in Business Management",
      details: "12 years in Operations and Project Management. Proven track record of driving company growth and profitability. Skilled in developing and maintaining relationships with key stakeholders for successful project execution. Experienced in establishing company-wide policies and procedures to ensure compliance with regulatory and legal requirements.",
      quote: "I thrive to be a driving force for our youth and communities"
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
                <div className={`w-40 h-40 rounded-full overflow-hidden mb-4 border-4 ${index === 0 ? 'border-eee-purple' : 'border-yellow-400'}`}>
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-green-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
                
                {member.details && (
                  <div className="mt-3 text-sm text-gray-700">
                    <p>{member.details}</p>
                    {member.quote && (
                      <p className="mt-3 italic font-medium text-eee-purple">"{member.quote}"</p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
