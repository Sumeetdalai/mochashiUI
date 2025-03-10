
import { useEffect, useState } from 'react';
import { User, Package, Clock, LogOut } from 'lucide-react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading user data
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-medium mb-4 animate-fade-in">My Profile</h1>
          <p className="text-mochashi-gray max-w-xl mx-auto animate-fade-in" style={{ animationDelay: "200ms" }}>
            Manage your account and view your order history.
          </p>
        </header>

        <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-64 bg-mochashi-cream p-6">
              <nav className="space-y-1">
                <NavButton 
                  icon={<User size={18} />} 
                  label="Account Details" 
                  active={activeTab === 'profile'} 
                  onClick={() => setActiveTab('profile')} 
                />
                <NavButton 
                  icon={<Package size={18} />} 
                  label="Orders" 
                  active={activeTab === 'orders'} 
                  onClick={() => setActiveTab('orders')} 
                />
                <NavButton 
                  icon={<Clock size={18} />} 
                  label="Subscription" 
                  active={activeTab === 'subscription'} 
                  onClick={() => setActiveTab('subscription')} 
                />
                <NavButton 
                  icon={<LogOut size={18} />} 
                  label="Log Out" 
                  active={false} 
                  onClick={() => {}} 
                />
              </nav>
            </div>

            <div className="flex-1 p-6 md:p-8">
              {isLoading ? (
                <div className="animate-pulse space-y-4">
                  <div className="h-8 bg-gray-200 rounded w-1/3"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </div>
              ) : (
                <>
                  {activeTab === 'profile' && (
                    <div className="animate-fade-in">
                      <h2 className="text-2xl font-serif font-medium mb-6">Account Details</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-mochashi-gray mb-1">
                            First Name
                          </label>
                          <input 
                            type="text" 
                            defaultValue="Jane" 
                            className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-mochashi-green/50"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-mochashi-gray mb-1">
                            Last Name
                          </label>
                          <input 
                            type="text" 
                            defaultValue="Doe" 
                            className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-mochashi-green/50"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-mochashi-gray mb-1">
                            Email
                          </label>
                          <input 
                            type="email" 
                            defaultValue="jane.doe@example.com" 
                            className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-mochashi-green/50"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-mochashi-gray mb-1">
                            Phone
                          </label>
                          <input 
                            type="text" 
                            defaultValue="(555) 123-4567" 
                            className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-mochashi-green/50"
                          />
                        </div>
                      </div>

                      <div className="mt-8">
                        <h3 className="text-xl font-serif font-medium mb-4">Delivery Address</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-mochashi-gray mb-1">
                              Address
                            </label>
                            <input 
                              type="text" 
                              defaultValue="123 Main Street" 
                              className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-mochashi-green/50"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-mochashi-gray mb-1">
                              City
                            </label>
                            <input 
                              type="text" 
                              defaultValue="San Francisco" 
                              className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-mochashi-green/50"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-mochashi-gray mb-1">
                              ZIP Code
                            </label>
                            <input 
                              type="text" 
                              defaultValue="94105" 
                              className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-mochashi-green/50"
                            />
                          </div>
                        </div>
                      </div>

                      <button className="mt-8 bg-mochashi-green text-white py-2 px-6 rounded-md hover:bg-mochashi-green/90 transition-colors">
                        Save Changes
                      </button>
                    </div>
                  )}

                  {activeTab === 'orders' && (
                    <div className="animate-fade-in">
                      <h2 className="text-2xl font-serif font-medium mb-6">Order History</h2>
                      <div className="space-y-4">
                        <OrderItem 
                          id="ORD-12345"
                          date="June 15, 2023"
                          status="Delivered"
                          total="$78.50"
                        />
                        <OrderItem 
                          id="ORD-12344"
                          date="May 28, 2023"
                          status="Delivered"
                          total="$45.95"
                        />
                        <OrderItem 
                          id="ORD-12343"
                          date="May 12, 2023"
                          status="Delivered"
                          total="$64.20"
                        />
                      </div>
                    </div>
                  )}
                  
                  {activeTab === 'subscription' && (
                    <div className="animate-fade-in">
                      <h2 className="text-2xl font-serif font-medium mb-6">Your Subscription</h2>
                      <div className="bg-mochashi-cream rounded-lg p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-medium">Weekly Produce Box</h3>
                          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Active</span>
                        </div>
                        <p className="text-mochashi-gray mb-4">
                          Fresh, seasonal produce delivered every Friday.
                        </p>
                        <div className="flex items-center justify-between text-sm text-mochashi-gray mb-6">
                          <span>Next delivery: June 23, 2023</span>
                          <span>$34.99/week</span>
                        </div>
                        <div className="flex gap-3">
                          <button className="text-mochashi-green border border-mochashi-green py-2 px-4 rounded-md hover:bg-mochashi-green hover:text-white transition-colors">
                            Edit Box
                          </button>
                          <button className="text-mochashi-gray border border-gray-300 py-2 px-4 rounded-md hover:bg-gray-100 transition-colors">
                            Skip Next Delivery
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const NavButton = ({ 
  icon, 
  label, 
  active, 
  onClick 
}: { 
  icon: React.ReactNode; 
  label: string; 
  active: boolean; 
  onClick: () => void;
}) => {
  return (
    <button 
      className={`flex items-center gap-3 w-full p-3 rounded-md transition-colors ${
        active 
          ? 'bg-mochashi-green text-white' 
          : 'text-mochashi-darkgray hover:bg-white/50'
      }`}
      onClick={onClick}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
};

const OrderItem = ({ 
  id, 
  date, 
  status, 
  total 
}: { 
  id: string; 
  date: string; 
  status: string; 
  total: string;
}) => {
  return (
    <div className="border border-gray-100 rounded-lg p-4 hover:border-mochashi-green/30 transition-colors">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="font-medium">{id}</h3>
          <p className="text-sm text-mochashi-gray">{date}</p>
        </div>
        <div className="mt-2 md:mt-0 flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
          <span className="text-sm px-2 py-1 bg-green-100 text-green-800 rounded w-fit">{status}</span>
          <span className="font-medium">{total}</span>
          <a href="#" className="text-mochashi-green text-sm hover:underline">View Details</a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
