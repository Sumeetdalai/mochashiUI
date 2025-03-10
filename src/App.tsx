
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BasketProvider } from "./contexts/BasketContext";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Index from "./pages/Index";
import Shop from "./pages/Shop";
import Basket from "./pages/Basket";
import Newstand from "./pages/Newstand";
import AboutUs from "./pages/AboutUs";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <BasketProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/newstand" element={<Newstand />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BasketProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
