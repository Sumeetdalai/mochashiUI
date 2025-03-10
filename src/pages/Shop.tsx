
import { useState, useEffect } from 'react';
import { ChevronDown, ShoppingBasket } from 'lucide-react';

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
};

const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    // Simulate fetching products
    setTimeout(() => {
      setProducts([
        {
          id: 1,
          name: 'Organic Kale Bunch',
          category: 'vegetables',
          price: 4.99,
          image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80',
        },
        {
          id: 2,
          name: 'Fresh Heirloom Tomatoes',
          category: 'vegetables',
          price: 6.49,
          image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80',
        },
        {
          id: 3,
          name: 'Organic Blueberries',
          category: 'fruits',
          price: 7.99,
          image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80',
        },
        {
          id: 4,
          name: 'Rainbow Carrots',
          category: 'vegetables',
          price: 5.99,
          image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80',
        },
        {
          id: 5,
          name: 'Fresh Basil Bundle',
          category: 'herbs',
          price: 3.99,
          image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80',
        },
        {
          id: 6,
          name: 'Red Apples (1lb)',
          category: 'fruits',
          price: 4.49,
          image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80',
        },
      ]);
      setIsLoading(false);
    }, 800);
  }, []);

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen pt-24 pb-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-medium mb-4 animate-fade-in">Shop</h1>
          <p className="text-mochashi-gray max-w-xl mx-auto animate-fade-in" style={{ animationDelay: "200ms" }}>
            Explore our selection of fresh, organic produce harvested at peak ripeness for maximum flavor and nutrition.
          </p>
        </header>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 animate-fade-in" style={{ animationDelay: "300ms" }}>
          <div className="relative mb-4 md:mb-0">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="appearance-none bg-white border border-mochashi-green/20 rounded-md py-2 pl-4 pr-10 text-mochashi-darkgray focus:outline-none focus:ring-2 focus:ring-mochashi-green/50"
            >
              <option value="all">All Products</option>
              <option value="vegetables">Vegetables</option>
              <option value="fruits">Fruits</option>
              <option value="herbs">Herbs</option>
            </select>
            <ChevronDown size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-mochashi-gray" />
          </div>

          <p className="text-sm text-mochashi-gray">
            Showing {filteredProducts.length} products
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-pulse">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-gray-100 rounded-lg overflow-hidden">
                <div className="aspect-square bg-gray-200"></div>
                <div className="p-4">
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div 
                key={product.id} 
                className="bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow animate-fade-in"
                style={{ animationDelay: `${400 + index * 100}ms` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-lg mb-1">{product.name}</h3>
                  <p className="text-mochashi-green font-medium">${product.price.toFixed(2)}</p>
                  <button className="mt-4 w-full flex items-center justify-center gap-2 bg-mochashi-cream text-mochashi-darkgray py-2 rounded hover:bg-mochashi-green hover:text-white transition-colors">
                    <ShoppingBasket size={16} />
                    <span>Add to Basket</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
