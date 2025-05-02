
import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { useState } from "react";
import { ImageGallery, GalleryImage } from "@/components/ui/image-gallery";

const About = () => {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);
  
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

  // Gallery Images
  const galleryImages: GalleryImage[] = [
    { 
      src: "/lovable-uploads/277981ef-28cb-47cf-8f01-f5ab3c475325.png", 
      alt: "School children with health awareness materials", 
      caption: "Students participating in our anti-smoking campaign",
      category: "Health Education"
    },
    { 
      src: "/lovable-uploads/088bdabc-99b4-4c8c-b933-aaaf6ef40189.png", 
      alt: "School children holding no smoking signs", 
      caption: "Youth advocates for tobacco-free schools",
      category: "Youth Advocacy"
    },
    { 
      src: "/lovable-uploads/7a4c2055-6b34-4c4a-aeb5-e9f445580bf4.png", 
      alt: "Team members with official", 
      caption: "EEE Foundation team members with community leaders",
      category: "Community Partnerships"
    },
    { 
      src: "/lovable-uploads/c9571d3b-ff5f-4614-a024-011198aead31.png", 
      alt: "Official signing document", 
      caption: "Formalizing partnerships to expand our health programs",
      category: "Program Development"
    },
    { 
      src: "/lovable-uploads/f1db06ba-5aab-4673-bdaf-44632788058d.png", 
      alt: "Team members in government office", 
      caption: "Advocacy work at local government offices",
      category: "Policy Advocacy"
    },
    { 
      src: "/lovable-uploads/a9991e39-ea8a-48c8-888c-3ef421452b14.png", 
      alt: "People in waiting area", 
      caption: "Community health services outreach",
      category: "Health Services"
    },
    { 
      src: "/lovable-uploads/f5983113-8798-4a8f-99a6-00c82e6d97e4.png", 
      alt: "HIV/AIDS awareness materials", 
      caption: "HIV/AIDS awareness campaign materials",
      category: "Health Awareness"
    },
    { 
      src: "/lovable-uploads/b6df6ae6-7575-458e-8447-129bc170a439.png", 
      alt: "HIV/AIDS awareness ribbon", 
      caption: "Symbolizing our commitment to HIV/AIDS education",
      category: "Health Awareness"
    },
    { 
      src: "/lovable-uploads/7e409df6-16b1-4677-a4c4-4d3eb64dae31.png", 
      alt: "Award ceremony", 
      caption: "Recognizing community health champions",
      category: "Community Recognition"
    },
    { 
      src: "/lovable-uploads/54eaba1c-94ef-48f2-bb2a-633e4e2c5bc9.png", 
      alt: "Speaker at event", 
      caption: "Health education workshop for community leaders",
      category: "Health Education"
    },
    { 
      src: "/lovable-uploads/5f873996-56fc-4f7b-92fc-459bce5162e8.png", 
      alt: "Community event with red ribbons", 
      caption: "Health awareness event for vulnerable populations",
      category: "Community Outreach"
    },
    { 
      src: "/lovable-uploads/fc56440f-4a94-47bb-8684-c53881e4973e.png", 
      alt: "Community workshop participants", 
      caption: "Workshop participants learning about health resources",
      category: "Capacity Building"
    },
  ];

  // Updated team members data with detailed info for all team members
  const teamMembers = [
    { 
      name: "Sinethemba Maphumulo", 
      role: "Chairperson", 
      image: "https://eee-foundation-media.s3.eu-west-1.amazonaws.com/Sinethemba.jpg",
      bio: "BCom (Majors in Managerial Accounting & Finance and Economics)",
      details: "Social entrepreneur who is passionate about skills development and youth empowerment. Previously worked in different Finance departments. Managing Director of group company focused in manufacturing, export market expansion with special interest in events, tourism and property investment.",
      quote: "Making an impact in disadvantaged population groups especially the youth is my calling."
    },
    { 
      name: "Zanele Qomoyi", 
      role: "Director - Treasurer", 
      image: "https://eee-foundation-media.s3.eu-west-1.amazonaws.com/Zanele.jpg",
      bio: "BCom Hons (Business Management), Certificate Fashion Design",
      details: "Result driven and compassionate leader with experience in banking, administration and stakeholder engagement. Proven performance history of effective team leadership and relationship management. Dedicated to empowering communities with a passion for fashion, women empowering.",
      quote: "I aim to continue growing and developing as a leader and change-maker."
    },
    { 
      name: "Lebogang Nzimande", 
      role: "Director - Secretary", 
      image: "public/images/Lebogang.jpg",
      bio: "Diploma in Business Management",
      details: "12 years in Operations and Project Management. Proven track record of driving company growth and profitability. Skilled in developing and maintaining relationships with key stakeholders for successful project execution. Experienced in establishing company-wide policies and procedures to ensure compliance with regulatory and legal requirements.",
      quote: "I thrive to be a driving force for our youth and communities"
    },
    { 
      name: "Project Administrator", 
      role: "Project Administrator", 
      image: "https://eee-foundation-media.s3.eu-west-1.amazonaws.com/Placeholder.jpg",
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
              <Card key={index} className="flex flex-col items-center text-center animate-on-scroll hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 px-6 pb-4 flex flex-col items-center">
                  <div className={`w-32 h-32 rounded-full overflow-hidden mb-4 border-4 ${index === 0 ? 'border-eee-purple' : 'border-yellow-400'}`}>
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-green-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{member.bio}</p>
                  
                  {member.details && (
                    <Button 
                      variant="outline" 
                      onClick={() => setSelectedMember(index)}
                      className="mt-auto"
                    >
                      Learn More
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Impact Gallery */}
      <section className="section container">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Impact</h2>
        <p className="text-lg text-center mb-8 max-w-3xl mx-auto">
          Through various programs and initiatives, we have been making a difference in communities across South Africa. 
          See our work in action through these images.
        </p>
        
        <ImageGallery 
          images={galleryImages} 
          className="animate-on-scroll"
        />
      </section>

      {/* Member Details Dialog */}
      <Dialog open={selectedMember !== null} onOpenChange={() => setSelectedMember(null)}>
        {selectedMember !== null && teamMembers[selectedMember] && (
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle className="text-2xl flex items-center gap-3">
                <span>{teamMembers[selectedMember].name}</span>
                <span className="text-green-600 text-lg font-medium">
                  {teamMembers[selectedMember].role}
                </span>
              </DialogTitle>
            </DialogHeader>
            
            <div className="flex flex-col md:flex-row gap-6 items-start mt-4">
              <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0 mx-auto md:mx-0 border-4 border-eee-purple">
                <img 
                  src={teamMembers[selectedMember].image} 
                  alt={teamMembers[selectedMember].name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1">
                <p className="font-medium text-eee-purple mb-2">{teamMembers[selectedMember].bio}</p>
                <p className="mb-4">{teamMembers[selectedMember].details}</p>
                
                {teamMembers[selectedMember].quote && (
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-eee-purple">
                    <p className="italic text-gray-700">"{teamMembers[selectedMember].quote}"</p>
                  </div>
                )}
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
};

export default About;
