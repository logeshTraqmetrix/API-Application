// import React from 'react'
// import styles from './landingPage.module.css'

// const LandingPage = () => {
//     return (
//         <div>
//             <nav className={styles.navbar}>
//                 <div>
//                     logo
//                 </div>
//                 <div>
//                     <a href="/__catalyst/auth/login">Login</a>
//                     <a href="/__catalyst/auth/signup">SignUp</a>
//                 </div>
//             </nav>           
//         </div>
//     )
// }

// export default LandingPage











// // LandingPage.jsx
// import React from 'react';
// import { ArrowRight, Database, Book, Layout, Terminal } from 'lucide-react';
// import './LandingPage.css';
// import DashboardImg from '../../public/images/Dashboard.png'
// import DocImg from '../../public/images/Doc.png'
// import PlaygroundImg from '../../public/images/Playground.png'

// const LandingPage = () => {
//   return (
//     <div className="landing-container">
//       <nav className="navbar">
//         <div className="nav-content">
//           <div className="nav-logo">
//             <Database className="logo-icon" />
//             <span className="logo-text">DataAPI</span>
//           </div>
//           <div className="nav-links">
//             <a href="/__catalyst/auth/login" className="login-link">Login</a>
//             <a href="/__catalyst/auth/signup" className="signup-link">Sign Up</a>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <div className="hero-section">
//         <div className="content-wrapper">
//           <div className="hero-content">
//             <h1 className="hero-title">
//               Your One-Stop Solution for
//               <span className="highlight"> Stock & Pincode Data</span>
//             </h1>
//             <p className="hero-description">
//               Access reliable, real-time stock market data and comprehensive pincode information through our powerful APIs
//             </p>
//             <div className="hero-buttons">
//               <div className="primary-button">
//                 <a href="/__catalyst/auth/login" className="signup-link"> Get Started   <ArrowRight className="button-icon" /></a>
//               </div>
//               <button className="secondary-button">
//                 View Documentation
//               </button>
//             </div>
//           </div>

//           <div className="hero-image">
//             <span>API Dashboard Preview</span>
//           </div>
//         </div>
//       </div>

//       {/* Features Section */}
//       <div className="features-section">
//         <div className="content-wrapper">
//           <h2 className="section-title">Everything You Need</h2>
//           <div className="features-grid">
//             <div className="feature-card">
//               <Layout className="feature-icon" />
//               <h3 className="feature-title">Intuitive Dashboard</h3>
//               <p className="feature-description">Monitor your API usage, manage keys, and access analytics all in one place</p>
//               <div className="feature-image">
//               <img src={DashboardImg} alt="Dashboard Image" />
//               </div>
//             </div>

//             <div className="feature-card">
//               <Terminal className="feature-icon" />
//               <h3 className="feature-title">Interactive Playground</h3>
//               <p className="feature-description">Test API endpoints and experiment with queries in real-time</p>
//               <div className="feature-image">
//                 <img src={PlaygroundImg} alt="Playground Image" />
//               </div>
//             </div>

//             <div className="feature-card">
//               <Book className="feature-icon" />
//               <h3 className="feature-title">Detailed Documentation</h3>
//               <p className="feature-description">Comprehensive guides and API references to get you started quickly</p>
//               <div className="feature-image">
//               <img src={DocImg} alt="Documentation Image" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* API Overview Section */}
//       <div className="api-section">
//         <div className="content-wrapper">
//           <div className="api-grid">
//             <div className="api-content">
//               <h2 className="section-title">Powerful APIs at Your Fingertips</h2>
//               <div className="api-features">
//                 <div className="api-feature">
//                   <div className="feature-icon-small">
//                     <ArrowRight className="icon-small" />
//                   </div>
//                   <div className="feature-content">
//                     <h3 className="feature-subtitle">Stock Market Data</h3>
//                     <p className="feature-description">Real-time and historical stock data with comprehensive market coverage</p>
//                   </div>
//                 </div>
//                 <div className="api-feature">
//                   <div className="feature-icon-small">
//                     <ArrowRight className="icon-small" />
//                   </div>
//                   <div className="feature-content">
//                     <h3 className="feature-subtitle">Pincode Database</h3>
//                     <p className="feature-description">Extensive database of Indian pincodes with location details</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="api-image">
//               <span>API Overview Diagram</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="footer">
//         <div className="content-wrapper">
//           <div className="footer-grid">
//             <div className="footer-brand">
//               <div className="footer-logo">
//                 <Database className="logo-icon" />
//                 <span className="logo-text">DataAPI</span>
//               </div>
//               <p className="footer-description">Empowering developers with reliable data solutions</p>
//             </div>
//             <div className="footer-links">
//               <h4 className="footer-title">Products</h4>
//               <ul>
//                 <li>Stock API</li>
//                 <li>Pincode API</li>
//                 <li>Documentation</li>
//                 <li>Pricing</li>
//               </ul>
//             </div>
//             <div className="footer-links">
//               <h4 className="footer-title">Resources</h4>
//               <ul>
//                 <li>Documentation</li>
//                 <li>API Reference</li>
//                 <li>Playground</li>
//                 <li>Blog</li>
//               </ul>
//             </div>
//             <div className="footer-links">
//               <h4 className="footer-title">Company</h4>
//               <ul>
//                 <li>About</li>
//                 <li>Contact</li>
//                 <li>Privacy Policy</li>
//                 <li>Terms of Service</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default LandingPage;










// import React, { useEffect, useRef } from 'react';
// import { ArrowRight, Database, Book, Layout, Terminal, LineChart, MapPin, Code } from 'lucide-react';
// import './LandingPage.css'
// const AnimatedLandingPage = () => {
//   const observerRefs = useRef([]);

//   useEffect(() => {
//     const options = {
//       root: null,
//       rootMargin: '0px',
//       threshold: 0.1
//     };

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('animate-in');
//         }
//       });
//     }, options);

//     observerRefs.current.forEach(ref => {
//       if (ref) {
//         observer.observe(ref);
//       }
//     });

//     return () => observer.disconnect();
//   }, []);

//   const addToRefs = (el) => {
//     if (el && !observerRefs.current.includes(el)) {
//       observerRefs.current.push(el);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Navbar */}
//       <nav className="fixed w-full bg-white shadow-sm z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-16 items-center">
//             <div className="flex items-center">
//               <Database className="h-8 w-8 text-blue-600" />
//               <span className="ml-2 text-xl font-bold text-gray-900">DataAPI</span>
//             </div>
//             <div className="flex items-center space-x-4">
//               <a href="/__catalyst/auth/login" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md">Login</a>
//               <a href="/__catalyst/auth/signup" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Sign Up</a>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <div className="pt-24 pb-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div ref={addToRefs} className="text-center opacity-0 translate-y-8 transition-all duration-1000">
//             <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
//               Your One-Stop Solution for
//               <span className="text-blue-600"> Stock & Pincode Data</span>
//             </h1>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
//               Access reliable, real-time stock market data and comprehensive pincode information through our powerful APIs
//             </p>
//             <div className="flex justify-center space-x-4">
//               <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 flex items-center">
//                 Get Started <ArrowRight className="ml-2 h-5 w-5" />
//               </button>
//               <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-50">
//                 View Documentation
//               </button>
//             </div>
//           </div>

//           {/* Animated Dashboard Preview */}
//           <div ref={addToRefs} className="mt-16 opacity-0 translate-y-8 transition-all duration-1000">
//             <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {/* Animated Chart */}
//                 <div className="bg-white p-6 rounded-lg shadow-lg">
//                   <div className="flex items-center mb-4">
//                     <LineChart className="h-6 w-6 text-blue-600" />
//                     <span className="ml-2 font-semibold">Stock Trends</span>
//                   </div>
//                   <div className="h-48 flex items-center justify-center animate-pulse">
//                     <div className="w-full h-32 bg-gradient-to-r from-blue-100 to-blue-200 rounded" />
//                   </div>
//                 </div>

//                 {/* API Stats */}
//                 <div className="bg-white p-6 rounded-lg shadow-lg">
//                   <div className="flex items-center mb-4">
//                     <Code className="h-6 w-6 text-blue-600" />
//                     <span className="ml-2 font-semibold">API Usage</span>
//                   </div>
//                   <div className="space-y-4">
//                     {[1, 2, 3].map((i) => (
//                       <div key={i} className="h-6 bg-gray-100 rounded animate-pulse" />
//                     ))}
//                   </div>
//                 </div>

//                 {/* Location Data */}
//                 <div className="bg-white p-6 rounded-lg shadow-lg">
//                   <div className="flex items-center mb-4">
//                     <MapPin className="h-6 w-6 text-blue-600" />
//                     <span className="ml-2 font-semibold">Location Analytics</span>
//                   </div>
//                   <div className="h-48 bg-gray-100 rounded animate-pulse" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Features Section */}
//       <div className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 ref={addToRefs} className="text-3xl font-bold text-center text-gray-900 mb-12 opacity-0 translate-y-8 transition-all duration-1000">
//             Everything You Need
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: <Layout className="h-8 w-8" />,
//                 title: "Intuitive Dashboard",
//                 description: "Monitor your API usage, manage keys, and access analytics all in one place"
//               },
//               {
//                 icon: <Terminal className="h-8 w-8" />,
//                 title: "Interactive Playground",
//                 description: "Test API endpoints and experiment with queries in real-time"
//               },
//               {
//                 icon: <Book className="h-8 w-8" />,
//                 title: "Detailed Documentation",
//                 description: "Comprehensive guides and API references to get you started quickly"
//               }
//             ].map((feature, index) => (
//               <div
//                 key={index}
//                 ref={addToRefs}
//                 className="bg-white p-6 rounded-lg shadow-sm opacity-0 translate-y-8 transition-all duration-1000"
//                 style={{ transitionDelay: `${index * 200}ms` }}
//               >
//                 <div className="text-blue-600 mb-4">{feature.icon}</div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
//                 <p className="text-gray-600">{feature.description}</p>
//                 <div className="mt-6 h-48 bg-gray-100 rounded animate-pulse" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AnimatedLandingPage;











// import React from 'react';
// import { ArrowRight, Database, Book, Layout, Terminal } from 'lucide-react';
// import DashboardImg from '../../public/images/Dashboard.png'
// import DocImg from '../../public/images/Doc.png'
// import PlaygroundImg from '../../public/images/Playground.png'

// const LandingPage = () => {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Navbar */}
//       <nav className="fixed w-full bg-white shadow-sm z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <div className="flex items-center">
//               <Database className="h-8 w-8 text-blue-600" />
//               <span className="ml-2 text-xl font-bold text-gray-900">DataAPI</span>
//             </div>
//             <div className="flex items-center space-x-4">
//               <a href="/__catalyst/auth/login" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md">
//                 Login
//               </a>
//               <a
//                 href="/__catalyst/auth/signup"
//                 className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
//               >
//                 Sign Up
//               </a>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <div className="bg-white pt-24 pb-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
//               Your One-Stop Solution for
//               <span className="text-blue-600"> Stock & Pincode Data</span>
//             </h1>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
//               Access reliable, real-time stock market data and comprehensive pincode information through our powerful APIs
//             </p>
//             <div className="flex justify-center space-x-4">
//               <a
//                 href="/__catalyst/auth/signup"
//                 className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors inline-flex items-center"
//               >
//                 Get Started
//                 <ArrowRight className="ml-2 h-5 w-5" />
//               </a>
//               <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-50 transition-colors">
//                 View Documentation
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Features Section with Alternating Layouts */}
//       <div className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Dashboard Feature */}
//           <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
//             <div className="flex-1">
//               <div className="max-w-xl">
//                 <Layout className="h-12 w-12 text-blue-600 mb-4" />
//                 <h2 className="text-3xl font-bold text-gray-900 mb-4">Intuitive Dashboard</h2>
//                 <p className="text-lg text-gray-600 mb-6">
//                   Monitor your API usage, manage keys, and access analytics all in one place. Our dashboard provides a comprehensive view of your API performance and usage patterns.
//                 </p>
//                 <button className="text-blue-600 font-medium inline-flex items-center hover:text-blue-700">
//                 Try it now <ArrowRight className="ml-2 h-5 w-5" />
//                 </button>
//               </div>
//             </div>
//             <div className="flex-1">
//               <div className="bg-white p-4 rounded-xl shadow-lg">
//                 <img src={DashboardImg} alt="Dashboard Interface" className="rounded-lg w-full" />
//               </div>
//             </div>
//           </div>

//           {/* Playground Feature */}
//           <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-24">
//             <div className="flex-1">
//               <div className="max-w-xl">
//                 <Terminal className="h-12 w-12 text-blue-600 mb-4" />
//                 <h2 className="text-3xl font-bold text-gray-900 mb-4">Interactive Playground</h2>
//                 <p className="text-lg text-gray-600 mb-6">
//                   Test API endpoints and experiment with queries in real-time. Our interactive playground makes it easy to validate your implementation before going live.
//                 </p>
//                 <button className="text-blue-600 font-medium inline-flex items-center hover:text-blue-700">
//                   Try it now <ArrowRight className="ml-2 h-5 w-5" />
//                 </button>
//               </div>
//             </div>
//             <div className="flex-1">
//               <div className="bg-white p-4 rounded-xl shadow-lg">
//                 <img src={PlaygroundImg} alt="API Playground" className="rounded-lg w-full" />
//               </div>
//             </div>
//           </div>

//           {/* Documentation Feature */}
//           <div className="flex flex-col md:flex-row items-center gap-12">
//             <div className="flex-1">
//               <div className="max-w-xl">
//                 <Book className="h-12 w-12 text-blue-600 mb-4" />
//                 <h2 className="text-3xl font-bold text-gray-900 mb-4">Detailed Documentation</h2>
//                 <p className="text-lg text-gray-600 mb-6">
//                   Comprehensive guides and API references to get you started quickly. Our documentation includes examples, best practices, and detailed explanations.
//                 </p>
//                 <button className="text-blue-600 font-medium inline-flex items-center hover:text-blue-700">
//                   Read docs <ArrowRight className="ml-2 h-5 w-5" />
//                 </button>
//               </div>
//             </div>
//             <div className="flex-1">
//               <div className="bg-white p-4 rounded-xl shadow-lg">
//                 <img src={DocImg} alt="API Documentation" className="rounded-lg w-full" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Rest of the sections remain the same... */}
//     </div>
//   );
// };

// export default LandingPage;








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
              <span className="ml-2 text-xl font-bold text-gray-900">DataAPI</span>
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
          <div className="flex flex-col md:flex-row items-center gap-12 mb-24 animate-on-scroll opacity-0">
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
                <span className="ml-2 text-xl font-bold">DataAPI</span>
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