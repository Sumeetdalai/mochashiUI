
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  
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
    <section className="min-h-screen flex flex-col justify-center items-center pt-24 pb-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 
          ref={headingRef}
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-medium tracking-tight leading-tight reveal-animation"
        >
          We're <em className="not-italic text-mochashi-green">farmers, purveyors,</em> and <em className="not-italic text-mochashi-green">eaters</em> of organically grown food.
        </h1>
        
        <div className="mt-16 reveal-animation" style={{ transitionDelay: '300ms' }}>
          <Link 
            to="/shop" 
            className="inline-flex items-center gap-2 bg-mochashi-green hover:bg-mochashi-green/90 text-white py-3 px-8 rounded-md text-lg font-medium transition-all duration-300 ease-in-out"
          >
            Browse our shop
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-24 w-full max-w-7xl">
        <div className="aspect-square overflow-hidden rounded-md reveal-animation" style={{ transitionDelay: '400ms' }}>
          <img 
            src="/lovable-uploads/03aae9e5-9656-4ba5-a00e-5adfff1bfc77.png" 
            alt="Fresh organic vegetables" 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
        <div className="aspect-square overflow-hidden rounded-md reveal-animation" style={{ transitionDelay: '500ms' }}>
          <img 
            src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80" 
            alt="Stacked organic produce" 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
