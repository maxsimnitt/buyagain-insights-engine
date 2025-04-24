
import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  BarChart2,
  Users,
  ShoppingBag,
  Settings,
  LogOut,
  Menu,
  X,
  Home,
  Mail,
  Tag,
  LineChart,
} from "lucide-react";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      {/* Sidebar for tablet and desktop */}
      <div
        className={`${
          sidebarOpen ? "md:w-64" : "md:w-16"
        } hidden md:flex md:flex-col fixed inset-y-0 z-20 transition-all duration-300`}
      >
        <div className="flex flex-col flex-grow overflow-y-auto bg-white border-r">
          <div className="flex items-center justify-between px-4 py-4">
            {sidebarOpen ? (
              <Link to="/dashboard" className="text-lg font-bold text-primary">
                BuyAgain.io
              </Link>
            ) : (
              <Link to="/dashboard" className="text-xl font-bold text-primary">
                B
              </Link>
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSidebar}
              className="md:block"
            >
              <Menu className="h-4 w-4" />
              <span className="sr-only">Toggle Sidebar</span>
            </Button>
          </div>
          <nav className="flex-1 px-2 py-4 space-y-1">
            <Link
              to="/dashboard"
              className="flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-primary-light hover:text-primary group"
            >
              <Home className="mr-3 h-5 w-5 text-gray-500 group-hover:text-primary" />
              {sidebarOpen && "Overview"}
            </Link>
            <Link
              to="/dashboard/forecasting"
              className="flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-primary-light hover:text-primary group"
            >
              <LineChart className="mr-3 h-5 w-5 text-gray-500 group-hover:text-primary" />
              {sidebarOpen && "Forecasting"}
            </Link>
            <Link
              to="/dashboard/recommendations"
              className="flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-primary-light hover:text-primary group"
            >
              <Tag className="mr-3 h-5 w-5 text-gray-500 group-hover:text-primary" />
              {sidebarOpen && "Recommendations"}
            </Link>
            <Link
              to="/dashboard/inventory"
              className="flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-primary-light hover:text-primary group"
            >
              <ShoppingBag className="mr-3 h-5 w-5 text-gray-500 group-hover:text-primary" />
              {sidebarOpen && "Inventory"}
            </Link>
            <Link
              to="/dashboard/targeting"
              className="flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-primary-light hover:text-primary group"
            >
              <Users className="mr-3 h-5 w-5 text-gray-500 group-hover:text-primary" />
              {sidebarOpen && "Customer Targeting"}
            </Link>
            <Link
              to="/dashboard/campaigns"
              className="flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-primary-light hover:text-primary group"
            >
              <Mail className="mr-3 h-5 w-5 text-gray-500 group-hover:text-primary" />
              {sidebarOpen && "Campaigns"}
            </Link>
            <Link
              to="/dashboard/analytics"
              className="flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-primary-light hover:text-primary group"
            >
              <BarChart2 className="mr-3 h-5 w-5 text-gray-500 group-hover:text-primary" />
              {sidebarOpen && "Analytics"}
            </Link>
            <Link
              to="/dashboard/settings"
              className="flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-primary-light hover:text-primary group"
            >
              <Settings className="mr-3 h-5 w-5 text-gray-500 group-hover:text-primary" />
              {sidebarOpen && "Settings"}
            </Link>
          </nav>
          <div className="px-4 py-2">
            <Button
              variant="ghost"
              className={`w-full justify-start text-gray-500 hover:bg-gray-100 hover:text-gray-700 ${
                !sidebarOpen && "px-2 py-2"
              }`}
              asChild
            >
              <Link to="/logout">
                <LogOut className="mr-3 h-5 w-5" />
                {sidebarOpen && "Logout"}
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile sidebar */}
      <div
        className={`fixed inset-0 z-40 md:hidden ${
          sidebarOpen ? "" : "hidden"
        }`}
      >
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75"></div>
        <div className="fixed inset-y-0 left-0 flex flex-col z-40 w-full max-w-xs bg-white">
          <div className="flex items-center justify-between h-16 px-4 border-b">
            <Link to="/dashboard" className="text-lg font-bold text-primary">
              BuyAgain.io
            </Link>
            <Button variant="ghost" size="icon" onClick={toggleSidebar}>
              <X className="h-5 w-5" />
              <span className="sr-only">Close sidebar</span>
            </Button>
          </div>
          <div className="flex-1 overflow-y-auto">
            <nav className="px-2 py-4 space-y-1">
              <Link
                to="/dashboard"
                className="flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-700 hover:bg-primary-light hover:text-primary"
              >
                <Home className="mr-3 h-5 w-5 text-gray-500" />
                Overview
              </Link>
              <Link
                to="/dashboard/forecasting"
                className="flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-700 hover:bg-primary-light hover:text-primary"
              >
                <LineChart className="mr-3 h-5 w-5 text-gray-500" />
                Forecasting
              </Link>
              <Link
                to="/dashboard/recommendations"
                className="flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-700 hover:bg-primary-light hover:text-primary"
              >
                <Tag className="mr-3 h-5 w-5 text-gray-500" />
                Recommendations
              </Link>
              <Link
                to="/dashboard/inventory"
                className="flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-700 hover:bg-primary-light hover:text-primary"
              >
                <ShoppingBag className="mr-3 h-5 w-5 text-gray-500" />
                Inventory
              </Link>
              <Link
                to="/dashboard/targeting"
                className="flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-700 hover:bg-primary-light hover:text-primary"
              >
                <Users className="mr-3 h-5 w-5 text-gray-500" />
                Customer Targeting
              </Link>
              <Link
                to="/dashboard/campaigns"
                className="flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-700 hover:bg-primary-light hover:text-primary"
              >
                <Mail className="mr-3 h-5 w-5 text-gray-500" />
                Campaigns
              </Link>
              <Link
                to="/dashboard/analytics"
                className="flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-700 hover:bg-primary-light hover:text-primary"
              >
                <BarChart2 className="mr-3 h-5 w-5 text-gray-500" />
                Analytics
              </Link>
              <Link
                to="/dashboard/settings"
                className="flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-700 hover:bg-primary-light hover:text-primary"
              >
                <Settings className="mr-3 h-5 w-5 text-gray-500" />
                Settings
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div
        className={`flex-1 flex flex-col md:ml-${sidebarOpen ? "64" : "16"} transition-all duration-300`}
      >
        <div className="md:hidden flex h-16 border-b bg-white items-center px-4">
          <Button variant="ghost" size="icon" onClick={toggleSidebar}>
            <Menu className="h-5 w-5" />
            <span className="sr-only">Open sidebar</span>
          </Button>
          <Link to="/dashboard" className="ml-4 text-lg font-bold text-primary">
            BuyAgain.io
          </Link>
        </div>
        <main className="flex-1 overflow-y-auto bg-gray-50">
          <div className="relative">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
