
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigation = (sectionId: string) => {
    navigate('/', { state: { scrollTo: sectionId } });
  };

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-primary">BuyAgain.io</span>
            </Link>
            <div className="hidden md:ml-10 md:flex md:space-x-8">
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
            <Button asChild variant="outline" className="mr-3 hidden md:block">
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild className="hidden md:block">
              <Link to="/contact">Request Trial</Link>
            </Button>
            <div className="md:hidden flex items-center">
              <Button variant="ghost" size="icon" className="-mr-1">
                <span className="sr-only">Open menu</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
