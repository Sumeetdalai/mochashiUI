
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6 pt-24 pb-16">
      <div className="text-center max-w-lg animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-serif font-medium mb-6">404</h1>
        <h2 className="text-2xl md:text-3xl font-serif mb-4">Page Not Found</h2>
        <p className="text-mochashi-gray mb-8">
          We couldn't find the page you're looking for. It might have been moved or no longer exists.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 bg-mochashi-green hover:bg-mochashi-green/90 text-white py-2 px-6 rounded-md transition-all duration-300 ease-in-out"
        >
          <ArrowLeft size={18} />
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
