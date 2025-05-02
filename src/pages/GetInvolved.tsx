
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const GetInvolved = () => {
  const [volunteerForm, setVolunteerForm] = useState({
    name: "",
    email: "",
    phone: "",
    interests: "",
  });
  
  const [partnerForm, setPartnerForm] = useState({
    organization: "",
    contactName: "",
    email: "",
    phone: "",
    message: "",
  });
  
  const { toast } = useToast();
  
  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Volunteer form submitted",
      description: "Thank you for your interest in volunteering with us! We'll be in touch soon.",
    });
    setVolunteerForm({ name: "", email: "", phone: "", interests: "" });
  };
  
  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Partnership inquiry submitted",
      description: "Thank you for your interest in partnering with us! We'll be in touch soon to discuss opportunities.",
    });
    setPartnerForm({ organization: "", contactName: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-eee-purple text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get Involved</h1>
          <p className="text-lg max-w-3xl">
            There are many ways to support our mission. Explore opportunities to volunteer, partner, or donate.
          </p>
        </div>
      </section>

      {/* Donate Section */}
      <section className="section container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Make a Donation</h2>
            <p className="text-lg mb-6">
              Your financial contribution helps us expand our programs and reach more youth across Africa with vital health education and resources.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-4">Your Impact</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-eee-purple rounded-full flex items-center justify-center text-white font-bold mr-3">
                    R
                  </div>
                  <div>
                    <span className="font-medium">R200</span>
                    <p className="text-gray-600">Provides health education materials for 10 students</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-eee-purple rounded-full flex items-center justify-center text-white font-bold mr-3">
                    R
                  </div>
                  <div>
                    <span className="font-medium">R500</span>
                    <p className="text-gray-600">Sponsors a health screening event for a classroom</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-eee-purple rounded-full flex items-center justify-center text-white font-bold mr-3">
                    R
                  </div>
                  <div>
                    <span className="font-medium">R1000</span>
                    <p className="text-gray-600">Sponsors a school kit for 20 students</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <Button className="bg-eee-purple hover:bg-eee-dark-purple">R100</Button>
                <Button className="bg-eee-purple hover:bg-eee-dark-purple">R250</Button>
                <Button className="bg-eee-purple hover:bg-eee-dark-purple">R500</Button>
                <Button className="bg-eee-purple hover:bg-eee-dark-purple">R1000</Button>
              </div>
              <Input placeholder="Other amount" />
              <Button className="w-full bg-eee-orange hover:bg-eee-orange/90">Donate Now</Button>
            </div>
          </div>
          <div>
            <div className="rounded-lg overflow-hidden max-w-[65%] mx-auto">
              <img 
                src="/images/7e409df6-16b1-4677-a4c4-4d3eb64dae31.png"
                alt="Donation impact"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer & Partner Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Join Our Community</h2>
          
          <Tabs defaultValue="volunteer" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="volunteer">Volunteer</TabsTrigger>
              <TabsTrigger value="partner">Partner & Sponsor</TabsTrigger>
            </TabsList>
            
            <TabsContent value="volunteer">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Become a Volunteer</h3>
                  <p className="mb-4">
                    Our volunteers are the heartbeat of our organization. Whether you have professional skills
                    to share or simply want to lend a helping hand, we have opportunities for you to make a difference.
                  </p>
                  
                  <h4 className="text-xl font-semibold mb-3">Volunteer Roles</h4>
                  <ul className="list-disc pl-5 space-y-2 mb-6">
                    <li>Event Support: Help organize and run our health education events</li>
                    <li>School Programs: Assist with our Adopt a School initiative</li>
                    <li>Administrative Support: Help with office tasks and program coordination</li>
                    <li>Health Professionals: Share your expertise in workshops and training sessions</li>
                    <li>Marketing & Communications: Help spread our message and create content</li>
                  </ul>
                  
                  <p className="text-gray-700 italic mb-6">
                    Volunteering requires a minimum commitment of 5 hours per month.
                    All volunteers receive orientation and training.
                  </p>
                </div>
                
                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle>Volunteer Application</CardTitle>
                      <CardDescription>Fill out the form below to express your interest in volunteering</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleVolunteerSubmit} className="space-y-4">
                        <div className="space-y-2">
                          <label htmlFor="v-name" className="text-sm font-medium">
                            Name
                          </label>
                          <Input
                            id="v-name"
                            value={volunteerForm.name}
                            onChange={(e) => setVolunteerForm({...volunteerForm, name: e.target.value})}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="v-email" className="text-sm font-medium">
                            Email
                          </label>
                          <Input
                            id="v-email"
                            type="email"
                            value={volunteerForm.email}
                            onChange={(e) => setVolunteerForm({...volunteerForm, email: e.target.value})}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="v-phone" className="text-sm font-medium">
                            Phone Number
                          </label>
                          <Input
                            id="v-phone"
                            value={volunteerForm.phone}
                            onChange={(e) => setVolunteerForm({...volunteerForm, phone: e.target.value})}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="v-interests" className="text-sm font-medium">
                            Areas of Interest
                          </label>
                          <Textarea
                            id="v-interests"
                            placeholder="Tell us which volunteer roles interest you and any relevant skills or experience"
                            rows={4}
                            value={volunteerForm.interests}
                            onChange={(e) => setVolunteerForm({...volunteerForm, interests: e.target.value})}
                            required
                          />
                        </div>
                        <Button type="submit" className="w-full bg-eee-purple hover:bg-eee-dark-purple">
                          Submit Application
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="partner">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Partner & Sponsor</h3>
                  <p className="mb-4">
                    Partnership with the EEE Foundation offers a meaningful opportunity to demonstrate your 
                    organization's commitment to youth health and community development.
                  </p>
                  
                  <h4 className="text-xl font-semibold mb-3">Partnership Benefits</h4>
                  <ul className="list-disc pl-5 space-y-2 mb-6">
                    <li>Brand visibility at our events and on our digital platforms</li>
                    <li>Employee engagement opportunities through volunteering</li>
                    <li>Customized partnership programs aligned with your CSR objectives</li>
                    <li>Impact reports demonstrating the difference your support makes</li>
                    <li>Networking with other corporate and community partners</li>
                  </ul>
                  
                  <div className="bg-white p-5 rounded-lg border mb-6">
                    <h4 className="text-xl font-semibold mb-2">Sponsorship Tiers</h4>
                    <div className="space-y-3">
                      <div>
                        <div className="font-medium">Platinum Partner: R50,000+</div>
                        <p className="text-sm text-gray-600">Premier logo placement, speaking opportunities, VIP event access</p>
                      </div>
                      <div>
                        <div className="font-medium">Gold Partner: R25,000+</div>
                        <p className="text-sm text-gray-600">Featured logo placement, event participation, impact stories</p>
                      </div>
                      <div>
                        <div className="font-medium">Silver Partner: R10,000+</div>
                        <p className="text-sm text-gray-600">Logo inclusion, recognition in communications</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle>Partnership Inquiry</CardTitle>
                      <CardDescription>Contact us to discuss partnership opportunities</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handlePartnerSubmit} className="space-y-4">
                        <div className="space-y-2">
                          <label htmlFor="p-org" className="text-sm font-medium">
                            Organization
                          </label>
                          <Input
                            id="p-org"
                            value={partnerForm.organization}
                            onChange={(e) => setPartnerForm({...partnerForm, organization: e.target.value})}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="p-name" className="text-sm font-medium">
                            Contact Person
                          </label>
                          <Input
                            id="p-name"
                            value={partnerForm.contactName}
                            onChange={(e) => setPartnerForm({...partnerForm, contactName: e.target.value})}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="p-email" className="text-sm font-medium">
                            Email
                          </label>
                          <Input
                            id="p-email"
                            type="email"
                            value={partnerForm.email}
                            onChange={(e) => setPartnerForm({...partnerForm, email: e.target.value})}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="p-phone" className="text-sm font-medium">
                            Phone Number
                          </label>
                          <Input
                            id="p-phone"
                            value={partnerForm.phone}
                            onChange={(e) => setPartnerForm({...partnerForm, phone: e.target.value})}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="p-message" className="text-sm font-medium">
                            Message
                          </label>
                          <Textarea
                            id="p-message"
                            placeholder="Tell us about your organization and partnership interests"
                            rows={4}
                            value={partnerForm.message}
                            onChange={(e) => setPartnerForm({...partnerForm, message: e.target.value})}
                            required
                          />
                        </div>
                        <Button type="submit" className="w-full bg-eee-purple hover:bg-eee-dark-purple">
                          Submit Inquiry
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;
