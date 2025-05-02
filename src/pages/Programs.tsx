import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect } from "react";

const Programs = () => {
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
      {/* Page Header */}
      <section className="bg-eee-purple text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Programs</h1>
          <p className="text-lg max-w-3xl">
            Discover the initiatives we've created to educate, empower, and elevate youth across Africa.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section container">
        <div className="max-w-3xl mx-auto text-center animate-on-scroll">
          <h2 className="text-3xl font-bold mb-6">Empowering Through Action</h2>
          <p className="text-lg text-gray-700">
            Our initiatives are built on three key pillars: Educate through providing knowledge and information, 
            Empower through skill development and resources, and Elevate through creating opportunities for 
            participation and leadership.
          </p>
        </div>
      </section>

      {/* Adopt a School */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="/images/f5983113-8798-4a8f-99a6-00c82e6d97e4.png"
                  alt="Students in a classroom"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold mb-4">Adopt a School</h2>
              <p className="text-lg mb-6">
                Our flagship program creates partnerships between schools, health institutions, and communities 
                to bring comprehensive health education directly into classrooms.
              </p>
              <h3 className="text-xl font-semibold mb-2">How It Works</h3>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Schools are paired with health professionals who provide ongoing education and support</li>
                <li>Interactive workshops for students on nutrition, physical activity, and mental wellbeing</li>
                <li>Teacher training to integrate health topics into regular curriculum</li>
                <li>Regular health screenings and follow-up care for identified issues</li>
              </ul>
              <h3 className="text-xl font-semibold mb-2">Impact</h3>
              <p className="mb-6">
                Since launching in 2018, we've partnered with 15 schools, reaching over 6,000 students 
                with life-changing health education and resources.
              </p>
              <Button className="bg-eee-purple hover:bg-eee-dark-purple" size="lg" asChild>
                <Link to="/get-involved">Join the Drive</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mind Over Miles */}
      <section className="section container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-on-scroll">
            <h2 className="text-3xl font-bold mb-4">Mind Over Miles</h2>
            <p className="text-lg mb-6">
              A unique initiative that combines mental health awareness with physical fitness challenges, 
              highlighting the critical connection between physical and mental wellbeing.
            </p>
            <h3 className="text-xl font-semibold mb-2">Key Objectives</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Reduce stigma around mental health through open conversations</li>
              <li>Promote physical activity as a tool for improving mental wellbeing</li>
              <li>Create supportive communities where youth can discuss health challenges</li>
              <li>Connect participants with mental health resources and professionals</li>
            </ul>
            <div className="bg-gray-100 p-4 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-2">Upcoming Event</h3>
              <p className="mb-2"><strong>Date:</strong> 14 June 2025</p>
              <p className="mb-4"><strong>Location:</strong> Kings Park Stadium</p>
              <Button className="bg-eee-purple hover:bg-eee-dark-purple" size="lg" asChild>
                <Link to="/events">Register Now</Link>
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2 animate-on-scroll">
            <div className="rounded-lg overflow-hidden">
              <img 
                src="/images/f5983113-8798-4a8f-99a6-00c82e6d97e4.png"
                alt="Green mountains landscape"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Other Initiatives */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Other Initiatives</h2>
          <div className="max-w-3xl mx-auto animate-on-scroll">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-medium">Shine Your Light on Hope</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">
                    An annual awareness campaign that brings attention to mental health challenges
                    facing youth in underserved communities.
                  </p>
                  <p>
                    Through community events, social media campaigns, and partnerships with local
                    organizations, we create safe spaces for young people to share their experiences
                    and access resources.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-medium">Tobacco Control Workshops</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">
                    Educational sessions designed to prevent tobacco use among youth through
                    factual information about health risks and peer pressure resistance techniques.
                  </p>
                  <p>
                    These workshops are delivered in schools and community centers, reaching 
                    thousands of young people each year with life-saving information.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-medium">Youth Health Ambassadors</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">
                    A leadership development program that trains selected youth to become health advocates
                    in their schools and communities.
                  </p>
                  <p>
                    Ambassadors receive comprehensive training in health topics, communication skills,
                    and project management, empowering them to lead initiatives that address local
                    health challenges.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-medium">Healthy Schools Competition</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">
                    An annual contest that challenges schools to implement innovative health promotion
                    projects, with awards for the most effective and sustainable initiatives.
                  </p>
                  <p>
                    The competition fosters creativity and commitment to health improvement while
                    providing schools with resources and recognition for their efforts.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
