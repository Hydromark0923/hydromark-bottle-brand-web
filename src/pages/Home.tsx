import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ParallaxSection from "@/components/ParallaxSection";
import FloatingBottles from "@/components/FloatingBottles";
import { ArrowRight, Building2, GraduationCap, Hotel, Utensils, Calendar, Leaf, Users, Award } from "lucide-react";
import heroBottle from "@/assets/hero-bottle.jpg";
import productShowcase from "@/assets/product-showcase.jpg";
import sustainability from "@/assets/sustainability.jpg";

const Home = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
        <FloatingBottles />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-hero text-white mb-6 font-bold">
              Your Brand,{" "}
              <span className="bg-gradient-to-r from-secondary-light to-secondary bg-clip-text text-transparent">
                Bottled.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">
              Premium custom-branded water bottles that build loyalty, engage customers, 
              and showcase your commitment to sustainability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="secondary" size="xl" asChild>
                <Link to="/contact">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="glass" size="xl" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>

        <ParallaxSection speed={0.3} className="absolute right-0 top-1/2 transform -translate-y-1/2">
          <img
            src={heroBottle}
            alt="Premium branded water bottle"
            className="w-96 h-auto opacity-80 hover:opacity-100 transition-opacity duration-500"
          />
        </ParallaxSection>
      </section>

      {/* Who We Serve Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-section-title text-foreground mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From luxury resorts to college campuses, we help brands create memorable 
              experiences through custom water bottles.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Hotel, title: "Hotels & Resorts", description: "Luxury hospitality branding" },
              { icon: Utensils, title: "Restaurants", description: "Memorable dining experiences" },
              { icon: GraduationCap, title: "Colleges", description: "Campus community building" },
              { icon: Calendar, title: "Events", description: "Branded event experiences" },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl hover-lift glass fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-ocean p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h2 className="text-section-title text-foreground mb-6">
                Premium Quality,{" "}
                <span className="bg-gradient-ocean bg-clip-text text-transparent">
                  Custom Design
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Each bottle is carefully crafted with your brand in mind. From elegant 
                hotel logos to vibrant event graphics, we bring your vision to life 
                with precision and style.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Premium glass and eco-friendly materials",
                  "Full-color custom label printing",
                  "Minimum order quantities to fit your needs",
                  "Fast turnaround times for events",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-ocean rounded-full" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Start Your Project</Link>
              </Button>
            </div>

            <ParallaxSection speed={0.2} className="fade-in">
              <img
                src={productShowcase}
                alt="Custom branded water bottles showcase"
                className="w-full h-auto rounded-2xl shadow-ocean hover-lift"
              />
            </ParallaxSection>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ParallaxSection speed={0.2} className="fade-in lg:order-first order-last">
              <img
                src={sustainability}
                alt="Sustainable water bottle production"
                className="w-full h-auto rounded-2xl shadow-ocean hover-lift"
              />
            </ParallaxSection>

            <div className="fade-in">
              <h2 className="text-section-title text-foreground mb-6">
                Sustainability at{" "}
                <span className="bg-gradient-ocean bg-clip-text text-transparent">
                  Our Core
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We're committed to reducing environmental impact while building 
                your brand. Our eco-friendly approach ensures your message 
                resonates with environmentally conscious customers.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                {[
                  { icon: Leaf, title: "Eco Materials", stat: "100%" },
                  { icon: Users, title: "Client Satisfaction", stat: "99%" },
                  { icon: Award, title: "Quality Guarantee", stat: "5★" },
                ].map((item, index) => (
                  <div key={index} className="text-center p-4 rounded-lg glass">
                    <item.icon className="h-8 w-8 text-secondary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-primary mb-1">{item.stat}</div>
                    <div className="text-sm text-muted-foreground">{item.title}</div>
                  </div>
                ))}
              </div>

              <Button variant="outline" size="lg" asChild>
                <Link to="/about">Learn About Our Process</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in">
            <h2 className="text-section-title text-white mb-6">
              Ready to Bottle Your Brand?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join hundreds of satisfied clients who've elevated their brand 
              with Hydromark's premium custom water bottles.
            </p>
            <Button variant="secondary" size="xl" asChild>
              <Link to="/contact">
                Get Your Quote Today <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;