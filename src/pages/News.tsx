
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

  // Updated press releases
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

  // Updated social media posts with news articles
  const socialPosts = [
    {
      id: 1,
      platform: "News Article",
      content: "Equal rights for healthcare highlighted on World Aids Day - Daily News coverage of our recent World AIDS Day event highlighting equal access to healthcare.",
      date: "December 2, 2024",
      image: "https://eee-foundation-media.s3.eu-west-1.amazonaws.com/social-post-event.jpg",
      link: "https://dailynews.co.za/news/2024-12-02-equal-rights-for-healthcare-highlighted-on-world-aids-day/"
    },
    {
      id: 2,
      platform: "News Coverage",
      content: "Our team conducted interactive health workshops with over 200 students as part of our Adopt a School program. The energy was incredible!",
      date: "April 2, 2024",
      image: "https://eee-foundation-media.s3.eu-west-1.amazonaws.com/social-post-workshop.jpg"
    },
    {
      id: 3,
      platform: "Past Article",
      content: "Article from last year covering our foundation's initiatives and impact in local communities.",
      date: "October 15, 2023",
      image: "/images/7a4c2055-6b34-4c4a-aeb5-e9f445580bf4.png"
    }
  ];

  // Updated newsletters schedule
  const newsletters = [
    {
      id: 1,
      title: "Autumn Newsletter",
      date: "April 2025",
      summary: "Updates on our school programs, upcoming Mind Over Miles event, and volunteer spotlight."
    },
    {
      id: 2,
      title: "Winter Newsletter",
      date: "June 2025",
      summary: "Summer program highlights, health education initiatives, and community partner features."
    },
    {
      id: 3,
      title: "Spring Newsletter",
      date: "September 2025",
      summary: "Mind Over Miles National Awareness Summit preview and youth health initiatives."
    },
    {
      id: 4,
      title: "Summer Newsletter",
      date: "December 2025",
      summary: "World AIDS Day Fashion Show highlights, annual achievements, and plans for 2026."
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Page Header - Updated with new color */}
      <section className="bg-eee-green text-white py-16">
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
            <div className="text-center mb-8">
              <p className="text-gray-700 italic">Past media releases are shown below. New releases will be added soon.</p>
            </div>
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
          
          {/* In the News Tab */}
          <TabsContent value="social">
            <div className="space-y-8">
              {socialPosts.map((post) => (
                <Card key={post.id}>
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3">
                      <div className="h-full">
                        <img 
                          src={post.image} 
                          alt="News media coverage"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="bg-eee-orange text-white px-3 py-1 rounded-full text-sm font-medium">
                          {post.platform}
                        </div>
                        <span className="text-gray-500 text-sm">{post.date}</span>
                      </div>
                      <p className="text-lg mb-4">{post.content}</p>
                      <div className="flex gap-4">
                        {post.link ? (
                          <Button variant="outline" size="sm" asChild>
                            <a href={post.link} target="_blank" rel="noopener noreferrer">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link mr-2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
                              Read Article
                            </a>
                          </Button>
                        ) : (
                          <Button variant="outline" size="sm" disabled>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text mr-2"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>
                            Article Archive
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          {/* Newsletters Tab - Updated schedule */}
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
                      <Button type="submit" className="w-full bg-eee-green hover:bg-eee-green/90">
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
