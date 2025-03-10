
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-mochashi-cream py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-mochashi-green font-serif text-2xl mb-6">Mo Chashi</h3>
            <p className="text-mochashi-darkgray max-w-xs">
              Organic farm-to-table produce, committed to sustainable farming and healthy eating.
            </p>
            <div className="flex gap-4 mt-6">
              <SocialLink href="https://instagram.com" aria-label="Instagram">
                <Instagram size={20} />
              </SocialLink>
              <SocialLink href="https://facebook.com" aria-label="Facebook">
                <Facebook size={20} />
              </SocialLink>
              <SocialLink href="https://twitter.com" aria-label="Twitter">
                <Twitter size={20} />
              </SocialLink>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-mochashi-darkgray mb-4">Shop</h4>
            <ul className="space-y-3">
              <FooterLink href="/shop/vegetables">Vegetables</FooterLink>
              <FooterLink href="/shop/fruits">Fruits</FooterLink>
              <FooterLink href="/shop/herbs">Herbs</FooterLink>
              <FooterLink href="/shop/bundles">Bundles</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-mochashi-darkgray mb-4">Company</h4>
            <ul className="space-y-3">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/sustainability">Sustainability</FooterLink>
              <FooterLink href="/careers">Careers</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-mochashi-darkgray mb-4">Legal</h4>
            <ul className="space-y-3">
              <FooterLink href="/terms">Terms of Service</FooterLink>
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
              <FooterLink href="/shipping">Shipping Policy</FooterLink>
              <FooterLink href="/returns">Returns & Refunds</FooterLink>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-mochashi-green/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-mochashi-gray text-sm">
            © {new Date().getFullYear()} Mo Chashi. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex gap-6">
            <Link to="/help" className="text-sm text-mochashi-gray hover:text-mochashi-darkgray transition-colors">
              Help Center
            </Link>
            <Link to="/faq" className="text-sm text-mochashi-gray hover:text-mochashi-darkgray transition-colors">
              FAQ
            </Link>
            <Link to="/support" className="text-sm text-mochashi-gray hover:text-mochashi-darkgray transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ 
  href, 
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a 
      href={href} 
      className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-mochashi-green hover:bg-mochashi-green hover:text-white transition-colors shadow-sm"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  );
};

const FooterLink = ({ 
  href, 
  children 
}: { 
  href: string; 
  children: React.ReactNode;
}) => {
  return (
    <li>
      <Link 
        to={href} 
        className="text-mochashi-gray hover:text-mochashi-darkgray transition-colors"
      >
        {children}
      </Link>
    </li>
  );
};

export default Footer;
