import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Droplets, Heart, Leaf, Users, Target, Award } from "lucide-react";
import sustainability from "@/assets/sustainability.jpg";

const About = () => {
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
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in">
            <h1 className="text-hero text-white mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-secondary-light to-secondary bg-clip-text text-transparent">
                Story
              </span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Born from a passion for sustainability and brand excellence, 
              Hydromark transforms how businesses connect with their customers 
              through premium custom water bottles.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-ocean p-3 rounded-full">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-section-title text-foreground">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-6">
                We believe that every brand has a unique story to tell. Our mission 
                is to help businesses share that story through beautifully crafted, 
                sustainable water bottles that create lasting impressions and build 
                genuine connections with customers.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                From luxury hotels seeking to enhance guest experiences to colleges 
                building campus community, we partner with organizations that value 
                quality, sustainability, and authentic brand expression.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Partner With Us</Link>
              </Button>
            </div>

            <div className="fade-in">
              <img
                src={sustainability}
                alt="Sustainable practices"
                className="w-full h-auto rounded-2xl shadow-ocean hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-section-title text-foreground mb-6">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything we do is guided by our core values that shape how we work 
              with clients and approach sustainable business practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                title: "Sustainability First",
                description: "Every bottle we create contributes to a healthier planet. We use eco-friendly materials and sustainable production processes that reduce environmental impact while maintaining premium quality."
              },
              {
                icon: Heart,
                title: "Client Partnership",
                description: "We don't just fulfill orders—we build relationships. Our team works closely with each client to understand their unique needs and create solutions that exceed expectations."
              },
              {
                icon: Award,
                title: "Quality Excellence",
                description: "Premium quality is non-negotiable. From material selection to final production, every step is carefully monitored to ensure your branded bottles reflect your brand's excellence."
              }
            ].map((value, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-xl glass hover-lift fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-ocean p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-section-title text-foreground mb-6">
              Our{" "}
              <span className="bg-gradient-ocean bg-clip-text text-transparent">
                Impact
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Numbers tell our story of growth, client satisfaction, and environmental responsibility.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Happy Clients", icon: Users },
              { number: "1M+", label: "Bottles Produced", icon: Droplets },
              { number: "99%", label: "Client Satisfaction", icon: Heart },
              { number: "100%", label: "Eco-Friendly", icon: Leaf },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl glass hover-lift fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in">
            <h2 className="text-section-title text-white mb-6">Our Vision</h2>
            <p className="text-xl text-white/90 mb-8">
              To become the world's leading provider of sustainable branded water bottles, 
              helping businesses create meaningful connections while protecting our planet 
              for future generations.
            </p>
            <Button variant="secondary" size="xl" asChild>
              <Link to="/contact">Join Our Mission</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;