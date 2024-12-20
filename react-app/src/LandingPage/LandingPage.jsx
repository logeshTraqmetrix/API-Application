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











// LandingPage.jsx
import React from 'react';
import { ArrowRight, Database, Book, Layout, Terminal } from 'lucide-react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="nav-logo">
            <Database className="logo-icon" />
            <span className="logo-text">DataAPI</span>
          </div>
          <div className="nav-links">
            <a href="/__catalyst/auth/login" className="login-link">Login</a>
            <a href="/__catalyst/auth/signup" className="signup-link">Sign Up</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="content-wrapper">
          <div className="hero-content">
            <h1 className="hero-title">
              Your One-Stop Solution for
              <span className="highlight"> Stock & Pincode Data</span>
            </h1>
            <p className="hero-description">
              Access reliable, real-time stock market data and comprehensive pincode information through our powerful APIs
            </p>
            <div className="hero-buttons">
              <button className="primary-button">
                Get Started <ArrowRight className="button-icon" />
              </button>
              <button className="secondary-button">
                View Documentation
              </button>
            </div>
          </div>
          
          <div className="hero-image">
            <span>API Dashboard Preview</span>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <div className="content-wrapper">
          <h2 className="section-title">Everything You Need</h2>
          <div className="features-grid">
            <div className="feature-card">
              <Layout className="feature-icon" />
              <h3 className="feature-title">Intuitive Dashboard</h3>
              <p className="feature-description">Monitor your API usage, manage keys, and access analytics all in one place</p>
              <div className="feature-image">
                <span>Dashboard Screenshot</span>
              </div>
            </div>

            <div className="feature-card">
              <Terminal className="feature-icon" />
              <h3 className="feature-title">Interactive Playground</h3>
              <p className="feature-description">Test API endpoints and experiment with queries in real-time</p>
              <div className="feature-image">
                <span>Playground Screenshot</span>
              </div>
            </div>

            <div className="feature-card">
              <Book className="feature-icon" />
              <h3 className="feature-title">Detailed Documentation</h3>
              <p className="feature-description">Comprehensive guides and API references to get you started quickly</p>
              <div className="feature-image">
                <span>Documentation Preview</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* API Overview Section */}
      <div className="api-section">
        <div className="content-wrapper">
          <div className="api-grid">
            <div className="api-content">
              <h2 className="section-title">Powerful APIs at Your Fingertips</h2>
              <div className="api-features">
                <div className="api-feature">
                  <div className="feature-icon-small">
                    <ArrowRight className="icon-small" />
                  </div>
                  <div className="feature-content">
                    <h3 className="feature-subtitle">Stock Market Data</h3>
                    <p className="feature-description">Real-time and historical stock data with comprehensive market coverage</p>
                  </div>
                </div>
                <div className="api-feature">
                  <div className="feature-icon-small">
                    <ArrowRight className="icon-small" />
                  </div>
                  <div className="feature-content">
                    <h3 className="feature-subtitle">Pincode Database</h3>
                    <p className="feature-description">Extensive database of Indian pincodes with location details</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="api-image">
              <span>API Overview Diagram</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="content-wrapper">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">
                <Database className="logo-icon" />
                <span className="logo-text">DataAPI</span>
              </div>
              <p className="footer-description">Empowering developers with reliable data solutions</p>
            </div>
            <div className="footer-links">
              <h4 className="footer-title">Products</h4>
              <ul>
                <li>Stock API</li>
                <li>Pincode API</li>
                <li>Documentation</li>
                <li>Pricing</li>
              </ul>
            </div>
            <div className="footer-links">
              <h4 className="footer-title">Resources</h4>
              <ul>
                <li>Documentation</li>
                <li>API Reference</li>
                <li>Playground</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="footer-links">
              <h4 className="footer-title">Company</h4>
              <ul>
                <li>About</li>
                <li>Contact</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;