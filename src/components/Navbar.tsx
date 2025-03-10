
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBasket } from 'lucide-react';
import { useBasket } from '@/contexts/BasketContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { totalItems } = useBasket();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 md:px-12 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="text-mochashi-green font-serif text-3xl md:text-4xl font-medium tracking-tighter"
        >
          Mo Chashi
        </Link>
        
        <nav className="hidden md:flex gap-10 items-center">
          <NavLink to="/shop" active={location.pathname === '/shop'}>
            Shop
          </NavLink>
          <NavLink to="/newstand" active={location.pathname === '/newstand'}>
            Newstand
          </NavLink>
          <NavLink to="/about" active={location.pathname === '/about'}>
            Who we are
          </NavLink>
          <NavLink to="/profile" active={location.pathname === '/profile'}>
            My profile
          </NavLink>
          
          <Link 
            to="/basket" 
            className="flex items-center gap-2 bg-mochashi-green text-white px-4 py-2 rounded transition-all hover:bg-mochashi-green/90"
          >
            <ShoppingBasket size={18} />
            <span>Basket ({totalItems})</span>
          </Link>
        </nav>
        
        <button className="md:hidden">
          <span className="sr-only">Open menu</span>
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path 
              stroke="currentColor" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="1.5" 
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

const NavLink = ({ 
  to, 
  children, 
  active = false 
}: { 
  to: string; 
  children: React.ReactNode; 
  active?: boolean;
}) => {
  return (
    <Link
      to={to}
      className={`text-base transition-all duration-200 relative ${
        active
          ? 'text-mochashi-darkgray font-medium'
          : 'text-mochashi-gray hover:text-mochashi-darkgray'
      }`}
    >
      {children}
      {active && (
        <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-mochashi-green" />
      )}
    </Link>
  );
};

export default Navbar;
