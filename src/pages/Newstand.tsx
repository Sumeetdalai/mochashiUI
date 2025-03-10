
import { useState, useEffect } from 'react';
import { Calendar, Clock } from 'lucide-react';

type Article = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
};

const Newstand = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching articles
    setTimeout(() => {
      setArticles([
        {
          id: 1,
          title: 'Seasonal Eating: Why It Matters for Your Health and the Planet',
          excerpt: "Discover the benefits of eating produce that's in season and how it can enhance your meals.",
          date: 'June 12, 2023',
          readTime: '5 min read',
          image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80',
          category: 'Nutrition',
        },
        {
          id: 2,
          title: 'Our Sustainable Farming Practices: A Behind-the-Scenes Look',
          excerpt: 'Learn about the methods we use to grow organic produce while protecting the environment.',
          date: 'May 28, 2023',
          readTime: '7 min read',
          image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80',
          category: 'Sustainability',
        },
        {
          id: 3,
          title: 'Simple Summer Recipes Using Our Fresh Produce',
          excerpt: "Easy and delicious recipes to make the most of summer's bounty from our organic farm.",
          date: 'May 15, 2023',
          readTime: '4 min read',
          image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80',
          category: 'Recipes',
        },
      ]);
      setIsLoading(false);
    }, 800);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-medium mb-4 animate-fade-in">Newstand</h1>
          <p className="text-mochashi-gray max-w-xl mx-auto animate-fade-in" style={{ animationDelay: "200ms" }}>
            Stories, insights, and updates from our farm to your table. Learn about sustainable farming and get inspired in the kitchen.
          </p>
        </header>

        {isLoading ? (
          <div className="space-y-8 animate-pulse">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 aspect-[4/3] bg-gray-200 rounded-md"></div>
                <div className="md:w-2/3">
                  <div className="h-6 bg-gray-200 rounded mb-3 w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2 w-1/4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-4 w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-12">
            {articles.map((article, index) => (
              <article 
                key={article.id} 
                className="flex flex-col md:flex-row gap-6 pb-12 border-b border-mochashi-green/10 animate-fade-in"
                style={{ animationDelay: `${400 + index * 100}ms` }}
              >
                <div className="md:w-1/3 overflow-hidden rounded-md">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="md:w-2/3">
                  <div className="mb-2">
                    <span className="text-xs uppercase tracking-wider bg-mochashi-cream text-mochashi-green px-2 py-1 rounded">
                      {article.category}
                    </span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-serif font-medium mb-2 hover:text-mochashi-green transition-colors">
                    <a href="#">{article.title}</a>
                  </h2>
                  <div className="flex items-center gap-4 text-sm text-mochashi-gray mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <p className="text-mochashi-gray mb-4">{article.excerpt}</p>
                  <a 
                    href="#" 
                    className="text-mochashi-green font-medium hover:underline"
                  >
                    Read more
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Newstand;
