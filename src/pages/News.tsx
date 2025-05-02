
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const News = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Newsletter subscription received",
      description: "Thank you for subscribing to our newsletter!",
    });
    setEmail("");
  };

  // Sample press releases
  const pressReleases = [
    {
      id: 1,
      title: "EEE Foundation Awarded Community Impact Grant",
      date: "April 15, 2025",
      excerpt: "The EEE Foundation has been awarded a significant grant to expand its Adopt a School program to ten additional schools in KwaZulu-Natal.",
      image: "https://eee-foundation-media.s3.eu-west-1.amazonaws.com/press-release-grant.jpg"
    },
    {
      id: 2,
      title: "Mind Over Miles Event Registration Now Open",
      date: "March 28, 2025",
      excerpt: "Registration for the annual Mind Over Miles event is now open, with early bird discounts available until May 15th.",
      image: "https://eee-foundation-media.s3.eu-west-1.amazonaws.com/mind-over-miles-event.jpg"
    },
    {
      id: 3,
      title: "New Partnership with National Health Department",
      date: "February 10, 2025",
      excerpt: "EEE Foundation is proud to announce a new strategic partnership with the National Department of Health to enhance youth health education.",
      image: "https://eee-foundation-media.s3.eu-west-1.amazonaws.com/health-department-partnership.jpg"
    }
  ];

  // Sample social media posts
  const socialPosts = [
    {
      id: 1,
      platform: "Instagram",
      content: "Exciting news! Our Mind Over Miles event last weekend reached over 5,000 participants. Thank you to everyone who joined us in promoting mental health awareness! #MindOverMiles #EEEFoundation",
      date: "March 20, 2025",
      image: "https://eee-foundation-media.s3.eu-west-1.amazonaws.com/social-post-event.jpg"
    },
    {
      id: 2,
      platform: "Facebook",
      content: "Today at Northwood High School: Our team conducted interactive health workshops with over 200 students as part of our Adopt a School program. The energy was incredible! #AdoptASchool #YouthHealth",
      date: "April 2, 2025",
      image: "https://eee-foundation-media.s3.eu-west-1.amazonaws.com/social-post-workshop.jpg"
    }
  ];

  // Sample newsletters
  const newsletters = [
    {
      id: 1,
      title: "Spring Newsletter 2025",
      date: "April 2025",
      summary: "Updates on our school programs, upcoming Mind Over Miles event, and volunteer spotlight."
    },
    {
      id: 2,
      title: "Winter Newsletter 2025",
      date: "January 2025",
      summary: "Year in review, new strategic partnerships, and upcoming initiatives for 2025."
    },
    {
      id: 3,
      title: "Autumn Newsletter 2024",
      date: "October 2024",
      summary: "Tobacco Control Workshop results, new team members, and annual fundraising update."
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-eee-purple text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">News & Media</h1>
          <p className="text-lg max-w-3xl">
            Stay up to date with the latest news, announcements, and stories from the EEE Foundation.
          </p>
        </div>
      </section>

      {/* News Content */}
      <section className="section container">
        <Tabs defaultValue="press" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="press">Press Releases</TabsTrigger>
            <TabsTrigger value="social">In the News</TabsTrigger>
            <TabsTrigger value="newsletters">Newsletters</TabsTrigger>
          </TabsList>
          
          {/* Press Releases Tab */}
          <TabsContent value="press">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pressReleases.map((item) => (
                <Card key={item.id} className="flex flex-col">
                  <div className="aspect-[3/2] overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardDescription>{item.date}</CardDescription>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p>{item.excerpt}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">Read More</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          {/* Social Media Tab */}
          <TabsContent value="social">
            <div className="space-y-8">
              {socialPosts.map((post) => (
                <Card key={post.id}>
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3">
                      <div className="h-full">
                        <img 
                          src={post.image} 
                          alt="Social media post"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="bg-eee-purple text-white px-3 py-1 rounded-full text-sm font-medium">
                          {post.platform}
                        </div>
                        <span className="text-gray-500 text-sm">{post.date}</span>
                      </div>
                      <p className="text-lg mb-4">{post.content}</p>
                      <div className="flex gap-4">
                        <Button variant="outline" size="sm">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart mr-2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                          Like
                        </Button>
                        <Button variant="outline" size="sm">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-share mr-2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" x2="12" y1="2" y2="15"/></svg>
                          Share
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          {/* Newsletters Tab */}
          <TabsContent value="newsletters">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <div className="space-y-4">
                  {newsletters.map((newsletter) => (
                    <Card key={newsletter.id}>
                      <CardHeader>
                        <CardTitle>{newsletter.title}</CardTitle>
                        <CardDescription>{newsletter.date}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>{newsletter.summary}</p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline">View Newsletter</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
              
              <div className="md:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle>Subscribe to Our Newsletter</CardTitle>
                    <CardDescription>Get the latest updates delivered to your inbox</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubscribe} className="space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full bg-eee-purple hover:bg-eee-dark-purple">
                        Subscribe
                      </Button>
                    </form>
                  </CardContent>
                  <CardFooter className="text-sm text-gray-500">
                    <p>We send newsletters quarterly and for special announcements</p>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
};

export default News;
