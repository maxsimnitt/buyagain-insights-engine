
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigation = (sectionId: string) => {
    navigate('/', { state: { scrollTo: sectionId } });
  };

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16">
          <div className="flex flex-1 items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img 
                src="/lovable-uploads/48d2cf8c-e3ad-47b1-948f-1d3efa8134d0.png" 
                alt="BuyAgain.io Logo" 
                className="h-8 w-8 mr-2" 
              />
              <span className="text-xl font-bold text-primary">BuyAgain.io</span>
            </Link>
            <div className="hidden md:flex ml-10 space-x-8">
              <button 
                onClick={() => handleNavigation('hero')} 
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-primary"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavigation('capabilities')} 
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-primary"
              >
                Solutions
              </button>
              <button 
                onClick={() => handleNavigation('contact')} 
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-primary"
              >
                Contact Us
              </button>
            </div>
          </div>
          <div className="flex items-center">
            <Button asChild className="hidden md:block">
              <Link to="/contact">Request Trial</Link>
            </Button>
            
            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <span className="sr-only">Open menu</span>
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[80%] sm:w-[385px]">
                <div className="flex flex-col py-6 space-y-4">
                  <button 
                    onClick={() => {
                      handleNavigation('hero');
                      document.querySelector('[data-state="open"]')?.setAttribute('data-state', 'closed');
                    }}
                    className="text-lg font-medium text-gray-700 hover:text-primary text-left px-2 py-2"
                  >
                    Home
                  </button>
                  <button 
                    onClick={() => {
                      handleNavigation('capabilities');
                      document.querySelector('[data-state="open"]')?.setAttribute('data-state', 'closed');
                    }}
                    className="text-lg font-medium text-gray-700 hover:text-primary text-left px-2 py-2"
                  >
                    Solutions
                  </button>
                  <button 
                    onClick={() => {
                      handleNavigation('contact');
                      document.querySelector('[data-state="open"]')?.setAttribute('data-state', 'closed');
                    }}
                    className="text-lg font-medium text-gray-700 hover:text-primary text-left px-2 py-2"
                  >
                    Contact Us
                  </button>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <Button asChild className="w-full">
                      <Link to="/contact">Request Trial</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
