
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Users, ShoppingBag, LineChart, BarChart2, PieChart } from "lucide-react";

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-6 xl:col-span-6">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                <span className="block">A Customer Intelligence</span>
                <span className="block mt-1">Platform For Ecommerce</span>
              </h1>
              <p className="mt-6 text-xl">
                Increasing repeatable purchases through data, insight, action, and profit. 
                Give us a try, what do you have to lose? Get the most out of your existing inventory.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                  <Link to="/contact">Request a Free Trial</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  <Link to="/features/forecasting">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 lg:col-span-6 xl:col-span-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg shadow-xl overflow-hidden p-6 animate-pulse-slow">
                <div className="bg-white/20 h-64 rounded-md"></div>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="bg-white/20 h-24 rounded-md"></div>
                  <div className="bg-white/20 h-24 rounded-md"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Overview Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Transforming Customer Data Into Revenue
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Our platform helps you understand, predict, and influence customer behavior.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <div className="w-12 h-12 bg-primary-light rounded-md flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Forecast Revenue</h3>
              <p className="mt-2 text-gray-500">
                Predict individual customers' next purchase values and categories to estimate future demand and revenue.
              </p>
              <Link to="/features/forecasting" className="mt-4 text-primary inline-flex items-center">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <div className="w-12 h-12 bg-primary-light rounded-md flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Target Customers</h3>
              <p className="mt-2 text-gray-500">
                Identify high-potential customers and strategically position your best offers to specific segments.
              </p>
              <Link to="/features/targeting" className="mt-4 text-primary inline-flex items-center">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <div className="w-12 h-12 bg-primary-light rounded-md flex items-center justify-center mb-4">
                <ShoppingBag className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Optimize Inventory</h3>
              <p className="mt-2 text-gray-500">
                Ensure your top 20% of customers always have access to their desired products through predictive inventory.
              </p>
              <Link to="/features/inventory" className="mt-4 text-primary inline-flex items-center">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <div className="lg:col-span-6">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Turn Data Into Actionable Insights
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                BuyAgain.io helps you understand your customers better than ever before. 
                Our platform analyzes purchase patterns, predicts future behavior, and provides 
                actionable recommendations to increase repeat purchases and maximize customer lifetime value.
              </p>
              
              <div className="mt-8">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                      <LineChart className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Increase Repeat Purchases</h4>
                    <p className="mt-1 text-gray-500">
                      Identify patterns that lead to repeat purchases and optimize accordingly.
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                      <BarChart2 className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Optimize Pricing</h4>
                    <p className="mt-1 text-gray-500">
                      Set prices that maximize long-term customer lifetime value and revenue.
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                      <PieChart className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Enhance Acquisition</h4>
                    <p className="mt-1 text-gray-500">
                      Measure the effectiveness of acquisition channels and optimize marketing spend.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-10 lg:mt-0 lg:col-span-6">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="px-6 py-8 bg-gray-50 border-b border-gray-100">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <div className="px-6 py-8">
                  <div className="space-y-6">
                    <div>
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                      <div className="mt-2 grid grid-cols-3 gap-4">
                        <div className="h-24 bg-primary-light rounded"></div>
                        <div className="h-24 bg-primary-light rounded"></div>
                        <div className="h-24 bg-primary-light rounded"></div>
                      </div>
                    </div>
                    <div>
                      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                      <div className="mt-2 h-32 bg-primary-light rounded"></div>
                    </div>
                    <div>
                      <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                      <div className="mt-2 h-16 bg-primary-light rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to increase repeat purchases?</span>
            <span className="block text-accent">Start your free trial today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Link to="/contact">Request a Free Trial</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
