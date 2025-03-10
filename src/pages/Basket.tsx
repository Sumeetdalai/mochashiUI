
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBasket, Trash, Plus, Minus, ArrowLeft } from 'lucide-react';
import { useBasket } from '@/contexts/BasketContext';

const USD_TO_INR_RATE = 83; // Approximate exchange rate: 1 USD = 83 INR

const Basket = () => {
  const { items, removeItem, updateQuantity, clearBasket, totalItems, subtotal } = useBasket();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  // Convert USD price to INR
  const convertToINR = (usdPrice: number): string => {
    const inrPrice = usdPrice * USD_TO_INR_RATE;
    return `₹${inrPrice.toFixed(0)}`; // Round to nearest integer for cleaner display
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    
    // Simulate checkout process
    setTimeout(() => {
      clearBasket();
      setIsCheckingOut(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-serif font-medium mb-4 animate-fade-in">Your Basket</h1>
          <p className="text-mochashi-gray max-w-xl mx-auto animate-fade-in" style={{ animationDelay: "100ms" }}>
            Review your items, adjust quantities, or proceed to checkout.
          </p>
        </header>

        {items.length === 0 ? (
          <div className="text-center py-16 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <div className="inline-flex justify-center items-center p-5 bg-mochashi-cream/50 rounded-full mb-4">
              <ShoppingBasket size={32} className="text-mochashi-gray" />
            </div>
            <h2 className="text-2xl font-medium mb-3">Your basket is empty</h2>
            <p className="text-mochashi-gray mb-6">
              Looks like you haven't added any products to your basket yet.
            </p>
            <Link 
              to="/shop" 
              className="inline-flex items-center gap-2 bg-mochashi-green text-white px-6 py-3 rounded-md hover:bg-mochashi-green/90 transition-colors"
            >
              <ArrowLeft size={16} />
              <span>Continue Shopping</span>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <div className="lg:col-span-2 space-y-4">
              <div className="flex justify-between items-center pb-4 border-b">
                <h2 className="text-xl font-medium">Items ({totalItems})</h2>
                <button 
                  onClick={clearBasket}
                  className="text-mochashi-gray hover:text-red-500 transition-colors flex items-center gap-1"
                >
                  <Trash size={16} />
                  <span>Clear All</span>
                </button>
              </div>
              
              {items.map((item) => (
                <div 
                  key={item.id} 
                  className="flex gap-4 p-4 border border-gray-100 rounded-lg shadow-sm"
                >
                  <div className="w-20 h-20 rounded overflow-hidden flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-mochashi-gray mb-2">{item.category}</p>
                    <p className="text-mochashi-green font-medium">{convertToINR(item.price)}</p>
                  </div>
                  
                  <div className="flex flex-col items-end gap-2">
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="text-mochashi-gray hover:text-red-500 transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash size={16} />
                    </button>
                    
                    <div className="flex items-center border rounded overflow-hidden">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        className="p-1 bg-gray-50 hover:bg-gray-100 disabled:opacity-50 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="px-3 py-0.5 text-sm">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 bg-gray-50 hover:bg-gray-100 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-mochashi-cream/20 p-6 rounded-lg h-fit">
              <h2 className="text-xl font-medium mb-4">Order Summary</h2>
              
              <div className="space-y-3 border-b border-mochashi-green/10 pb-4 mb-4">
                <div className="flex justify-between">
                  <span className="text-mochashi-gray">Subtotal</span>
                  <span>{convertToINR(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-mochashi-gray">Shipping</span>
                  <span>{convertToINR(subtotal > 0 ? 4.99 : 0)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-mochashi-gray">Tax</span>
                  <span>{convertToINR(subtotal * 0.09)}</span>
                </div>
              </div>
              
              <div className="flex justify-between font-medium text-lg mb-6">
                <span>Total</span>
                <span>{convertToINR(subtotal + (subtotal > 0 ? 4.99 : 0) + (subtotal * 0.09))}</span>
              </div>
              
              <button 
                onClick={handleCheckout}
                disabled={items.length === 0 || isCheckingOut}
                className="w-full flex items-center justify-center gap-2 bg-mochashi-green text-white py-3 rounded-md hover:bg-mochashi-green/90 transition-colors disabled:opacity-70"
              >
                {isCheckingOut ? (
                  <>
                    <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                    <span>Processing...</span>
                  </>
                ) : (
                  <span>Proceed to Checkout</span>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Basket;
