
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { toast } from '@/hooks/use-toast';

export type BasketItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  category: string;
};

type BasketContextType = {
  items: BasketItem[];
  addItem: (product: Omit<BasketItem, 'quantity'>) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearBasket: () => void;
  totalItems: number;
  subtotal: number;
};

const BasketContext = createContext<BasketContextType | undefined>(undefined);

export const BasketProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<BasketItem[]>([]);

  // Load basket from localStorage on mount
  useEffect(() => {
    const savedBasket = localStorage.getItem('basket');
    if (savedBasket) {
      try {
        setItems(JSON.parse(savedBasket));
      } catch (error) {
        console.error('Failed to parse basket from localStorage', error);
      }
    }
  }, []);

  // Save basket to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify(items));
  }, [items]);

  const addItem = (product: Omit<BasketItem, 'quantity'>) => {
    setItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((item) => item.id === product.id);
      
      if (existingItemIndex > -1) {
        // If item already exists in basket, increase quantity
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += 1;
        
        toast({
          title: "Item quantity updated",
          description: `${product.name} quantity increased to ${updatedItems[existingItemIndex].quantity}`,
        });
        
        return updatedItems;
      } else {
        // If item doesn't exist, add it with quantity 1
        toast({
          title: "Item added to basket",
          description: `${product.name} has been added to your basket`,
        });
        
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeItem = (id: number) => {
    setItems((prevItems) => {
      const itemToRemove = prevItems.find(item => item.id === id);
      
      if (itemToRemove) {
        toast({
          title: "Item removed",
          description: `${itemToRemove.name} has been removed from your basket`,
        });
      }
      
      return prevItems.filter((item) => item.id !== id);
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return;
    
    setItems((prevItems) => 
      prevItems.map((item) => 
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearBasket = () => {
    setItems([]);
    toast({
      title: "Basket cleared",
      description: "All items have been removed from your basket",
    });
  };

  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  
  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity, 
    0
  );

  return (
    <BasketContext.Provider value={{
      items,
      addItem,
      removeItem,
      updateQuantity,
      clearBasket,
      totalItems,
      subtotal,
    }}>
      {children}
    </BasketContext.Provider>
  );
};

export const useBasket = () => {
  const context = useContext(BasketContext);
  if (context === undefined) {
    throw new Error('useBasket must be used within a BasketProvider');
  }
  return context;
};
