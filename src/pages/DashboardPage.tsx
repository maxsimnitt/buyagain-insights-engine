
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  ArrowUpRight,
  ArrowDownRight,
  BarChart2,
  Users,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Sample data for charts
const revenueData = [
  { name: "Jan", value: 12000 },
  { name: "Feb", value: 19000 },
  { name: "Mar", value: 15000 },
  { name: "Apr", value: 17000 },
  { name: "May", value: 21000 },
  { name: "Jun", value: 19000 },
  { name: "Jul", value: 24000 },
];

const customerData = [
  { name: "Mon", new: 32, returning: 87 },
  { name: "Tue", new: 40, returning: 85 },
  { name: "Wed", new: 25, returning: 102 },
  { name: "Thu", new: 45, returning: 95 },
  { name: "Fri", new: 50, returning: 110 },
  { name: "Sat", new: 35, returning: 120 },
  { name: "Sun", new: 30, returning: 130 },
];

const categoryData = [
  { name: "Electronics", value: 35 },
  { name: "Clothing", value: 25 },
  { name: "Home", value: 20 },
  { name: "Beauty", value: 15 },
  { name: "Other", value: 5 },
];

const COLORS = ["#4361ee", "#3f37c9", "#4cc9f0", "#6d28d9", "#8b5cf6"];

const DashboardPage = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500">
          Welcome back! Here's an overview of your customer analytics.
        </p>
      </header>

      {/* Key Metrics */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <div className="bg-primary-light p-3 rounded-md">
                <BarChart2 className="h-5 w-5 text-primary" />
              </div>
              <span className="text-green-500 flex items-center text-sm font-medium">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                12.5%
              </span>
            </div>
            <div className="mt-4">
              <p className="text-sm font-medium text-gray-500">Total Revenue</p>
              <h3 className="text-2xl font-bold text-gray-900">$128,590</h3>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <div className="bg-primary-light p-3 rounded-md">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <span className="text-green-500 flex items-center text-sm font-medium">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                8.2%
              </span>
            </div>
            <div className="mt-4">
              <p className="text-sm font-medium text-gray-500">Active Customers</p>
              <h3 className="text-2xl font-bold text-gray-900">1,853</h3>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <div className="bg-primary-light p-3 rounded-md">
                <ShoppingBag className="h-5 w-5 text-primary" />
              </div>
              <span className="text-red-500 flex items-center text-sm font-medium">
                <ArrowDownRight className="h-4 w-4 mr-1" />
                3.1%
              </span>
            </div>
            <div className="mt-4">
              <p className="text-sm font-medium text-gray-500">Avg. Order Value</p>
              <h3 className="text-2xl font-bold text-gray-900">$94.20</h3>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <div className="bg-primary-light p-3 rounded-md">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <span className="text-green-500 flex items-center text-sm font-medium">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                5.3%
              </span>
            </div>
            <div className="mt-4">
              <p className="text-sm font-medium text-gray-500">Repeat Purchase Rate</p>
              <h3 className="text-2xl font-bold text-gray-900">42.8%</h3>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid gap-6 md:grid-cols-2 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Revenue Forecast</CardTitle>
            <CardDescription>
              Projected revenue based on customer purchase patterns
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={revenueData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#4361ee"
                    strokeWidth={2}
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Customer Segments</CardTitle>
            <CardDescription>
              New vs. returning customers over time
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={customerData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="new" stackId="a" fill="#4361ee" />
                  <Bar dataKey="returning" stackId="a" fill="#4cc9f0" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* More charts and insights */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Purchase Categories</CardTitle>
            <CardDescription>
              Distribution of purchases by category
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) =>
                      `${name}: ${(percent * 100).toFixed(0)}%`
                    }
                  >
                    {categoryData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Personalized Recommendations</CardTitle>
            <CardDescription>
              Top customers and their next likely purchases
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border rounded-md p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">Customer #1038</h4>
                    <p className="text-sm text-gray-500">Last purchase: 7 days ago</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">Predicted next purchase</p>
                    <p className="text-primary">$125.40</p>
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="bg-primary-light text-primary text-xs px-2 py-1 rounded-full">
                    Premium Headphones
                  </span>
                  <span className="bg-primary-light text-primary text-xs px-2 py-1 rounded-full">
                    Wireless Charger
                  </span>
                </div>
              </div>
              
              <div className="border rounded-md p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">Customer #2756</h4>
                    <p className="text-sm text-gray-500">Last purchase: 3 days ago</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">Predicted next purchase</p>
                    <p className="text-primary">$85.20</p>
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="bg-primary-light text-primary text-xs px-2 py-1 rounded-full">
                    Kitchen Appliances
                  </span>
                  <span className="bg-primary-light text-primary text-xs px-2 py-1 rounded-full">
                    Cookware
                  </span>
                </div>
              </div>
              
              <div className="border rounded-md p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">Customer #4512</h4>
                    <p className="text-sm text-gray-500">Last purchase: 12 days ago</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">Predicted next purchase</p>
                    <p className="text-primary">$210.75</p>
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="bg-primary-light text-primary text-xs px-2 py-1 rounded-full">
                    Premium Skincare
                  </span>
                  <span className="bg-primary-light text-primary text-xs px-2 py-1 rounded-full">
                    Makeup Set
                  </span>
                </div>
              </div>
              
              <Button className="w-full mt-2" variant="outline">
                View all customers <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;
