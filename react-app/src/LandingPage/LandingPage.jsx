import React, { useEffect } from 'react';
import { ArrowRight, Database, Book, Layout, Terminal} from 'lucide-react';
import { motion } from 'framer-motion';
import DashboardImg from '../../public/images/Dashboard.png'
import DocImg from '../../public/images/Doc.png'
import PlaygroundImg from '../../public/images/Playground.png'
import './LandingPage.css'
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {

  const navigate = useNavigate()
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.75;
        if (isVisible) {
          element.classList.add('animate-fade-in');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function navigationFunction(){
    navigate('/stockdata')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="fixed w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <Database className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">API-Outlet</span>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-4"
            >
              <a href="/__catalyst/auth/login" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md transition-colors">
                Login
              </a>
              <a
                href="/__catalyst/auth/signup"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Sign Up
              </a>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-white pt-24 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
            >
              Your One-Stop Solution for
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-blue-600"
              > Stock & Pincode Data</motion.span>
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto mb-8"
            >
              Access reliable, real-time stock market data and comprehensive pincode information through our powerful APIs
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex justify-center space-x-4"
            >
              <a
                href="/__catalyst/auth/signup"
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors inline-flex items-center transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-50 transition-colors transform hover:scale-105" onClick={navigationFunction}>
                View Documentation
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section with Alternating Layouts */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Dashboard Feature */}
          <div className="flex flex-col md:flex-row items-center gap-12 mb-24 animate-on-scroll " >
            <div className="flex-1">
              <div className="max-w-xl">
                <Layout className="h-12 w-12 text-blue-600 mb-4" />
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Intuitive Dashboard</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Monitor your API usage, manage keys, and access analytics all in one place. Our dashboard provides a comprehensive view of your API performance and usage patterns.
                </p>
                

                  <a href="/__catalyst/auth/login" className="text-blue-600 font-medium inline-flex items-center hover:text-blue-700 transition-transform hover:translate-x-2">
                    Try it now  <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
               
              </div>
            </div>
            <div className="flex-1">
              <div className="bg-white p-4 rounded-xl shadow-lg transform hover:scale-105 transition-transform">
                <img src={DashboardImg} alt="Dashboard Interface" className="rounded-lg w-full" />
              </div>
            </div>
          </div>

          {/* Playground Feature */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-24 animate-on-scroll opacity-0">
            <div className="flex-1">
              <div className="max-w-xl">
                <Terminal className="h-12 w-12 text-blue-600 mb-4" />
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Interactive Playground</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Test API endpoints and experiment with queries in real-time. Our interactive playground makes it easy to validate your implementation before going live.
                </p>
                <a href="/__catalyst/auth/login" className="text-blue-600 font-medium inline-flex items-center hover:text-blue-700 transition-transform hover:translate-x-2">
                    Try it now  <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
              </div>
            </div>
            <div className="flex-1">
              <div className="bg-white p-4 rounded-xl shadow-lg transform hover:scale-105 transition-transform">
                <img src={PlaygroundImg} alt="API Playground" className="rounded-lg w-full" />
              </div>
            </div>
          </div>

          {/* Documentation Feature */}
          <div className="flex flex-col md:flex-row items-center gap-12 animate-on-scroll opacity-0">
            <div className="flex-1">
              <div className="max-w-xl">
                <Book className="h-12 w-12 text-blue-600 mb-4" />
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Detailed Documentation</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Comprehensive guides and API references to get you started quickly. Our documentation includes examples, best practices, and detailed explanations.
                </p>
                <button className="text-blue-600 font-medium inline-flex items-center hover:text-blue-700 transition-transform hover:translate-x-2" onClick={navigationFunction}>
                  Read docs <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="flex-1">
              <div className="bg-white p-4 rounded-xl shadow-lg transform hover:scale-105 transition-transform">
                <img src={DocImg} alt="API Documentation" className="rounded-lg w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
            <div className="space-y-4">
              <div className="flex items-center">
                <Database className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-xl font-bold">API-Outlet</span>
              </div>
              <p className="text-gray-400">
                Empowering developers with reliable data solutions for building better applications.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Products</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Stock API</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pincode API</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

          </div>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-center text-gray-400">© 2024 DataAPI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;