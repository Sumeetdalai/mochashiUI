
import { useEffect } from 'react';

const AboutUs = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );
    
    const elements = document.querySelectorAll('.reveal-animation');
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-medium mb-4 animate-fade-in">Who We Are</h1>
          <p className="text-mochashi-gray max-w-xl mx-auto animate-fade-in" style={{ animationDelay: "200ms" }}>
            Get to know the farmers, the land, and the philosophy behind Mo Chashi's organic produce.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="order-2 md:order-1 flex flex-col justify-center reveal-animation">
            <span className="text-xs uppercase tracking-wider bg-mochashi-cream text-mochashi-green px-3 py-1 rounded-full w-fit mb-4">Our Story</span>
            <h2 className="text-3xl font-serif font-medium mb-6">From Seed to Table: Our Journey</h2>
            <p className="text-mochashi-darkgray mb-4">
              Mo Chashi began in 2010 with a small plot of land and a big vision: to grow the most flavorful, nutritious produce possible while caring for the earth. 
            </p>
            <p className="text-mochashi-darkgray mb-4">
              Our founders, Emma and David Chen, left their corporate careers to pursue their passion for sustainable agriculture and healthy food. What started as a small farm supplying local restaurants has grown into a thriving community of farmers, chefs, and food lovers.
            </p>
            <p className="text-mochashi-darkgray">
              Today, we cultivate over 40 acres of certified organic land, growing more than 100 varieties of vegetables, fruits, and herbs using regenerative farming practices that build soil health and biodiversity.
            </p>
          </div>
          <div className="order-1 md:order-2 reveal-animation">
            <img 
              src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80" 
              alt="Mo Chashi farm fields" 
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
        </div>

        <div className="bg-mochashi-cream rounded-xl p-8 md:p-12 mb-20 reveal-animation">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-medium mb-6">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
              <ValueCard 
                title="Sustainability" 
                description="We farm with methods that protect and enhance the environment, building soil health and supporting biodiversity."
              />
              <ValueCard 
                title="Transparency" 
                description="We believe you have the right to know exactly how your food is grown and who grows it."
              />
              <ValueCard 
                title="Community" 
                description="We're committed to building connections between people and the food they eat, fostering a healthier food system."
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <TeamMember 
            name="Emma Chen" 
            role="Co-Founder & Farm Director" 
            image="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80"
            delay={0}
          />
          <TeamMember 
            name="David Chen" 
            role="Co-Founder & Operations Manager" 
            image="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80"
            delay={100}
          />
          <TeamMember 
            name="Sarah Johnson" 
            role="Head Farmer" 
            image="https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80"
            delay={200}
          />
        </div>
      </div>
    </div>
  );
};

const ValueCard = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <h3 className="text-xl font-serif font-medium mb-3 text-mochashi-green">{title}</h3>
      <p className="text-mochashi-gray">{description}</p>
    </div>
  );
};

const TeamMember = ({ 
  name, 
  role, 
  image,
  delay = 0
}: { 
  name: string; 
  role: string; 
  image: string;
  delay?: number;
}) => {
  return (
    <div 
      className="reveal-animation" 
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="aspect-[3/4] overflow-hidden rounded-lg mb-4">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <h3 className="text-xl font-serif font-medium">{name}</h3>
      <p className="text-mochashi-gray">{role}</p>
    </div>
  );
};

export default AboutUs;
