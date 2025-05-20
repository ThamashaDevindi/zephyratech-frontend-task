import React from 'react';
import companyLogo from '../assets/logo.png';
import spotifyLogo from '../assets/spotify.png';
import facebookLogo from '../assets/facebook.png';
import twitterLogo from '../assets/twitter.png';
import metaLogo from '../assets/meta.png';
import instagramLogo from '../assets/instagram.png';

const Footer = () => {
  const trustedLogos = [
    { name: 'Spotify', src: spotifyLogo },
    { name: 'Facebook', src: facebookLogo },
    { name: 'Twitter', src: twitterLogo },
    { name: 'Meta', src: metaLogo },
    { name: 'Instagram', src: instagramLogo },
  ];

  return (
    <footer className="bg-black text-white py-5 mt-5">
      <div className="container">
        {/* Four horizontal sections */}
        <div className="row text-start mb-4">
          {/* Section 1: logos */}
          <div className="col-md-3 mb-4 mb-md-0">
            {/* Company logo and name */}
            <div className="d-flex align-items-center mb-3">
              <img
                src={companyLogo}
                alt="MRKT.AI"
                style={{ height: '40px', marginRight: '10px' }}
              />
              <span className="fw-bold fs-4">MRKT.AI</span>
            </div>

            {/* logos */}
            <div className="d-flex flex-wrap gap-2">
              {trustedLogos.map((logo, i) => (
                <img
                  key={i}
                  src={logo.src}
                  alt={logo.name}
                  style={{ height: '30px', objectFit: 'contain' }}
                />
              ))}
            </div>
          </div>

          {/* Section 2: Solution */}
          <div className="col-md-3 mb-3 mb-md-0">
            <h5 className="fw-bold mb-3">Solution</h5>
            <ul className="list-unstyled">
              <li>Digital Marketing</li>
              <li>Social Media</li>
              <li>Ads</li>
              <li>SEO</li>
            </ul>
          </div>

          {/* Section 3: Resource */}
          <div className="col-md-3 mb-3 mb-md-0">
            <h5 className="fw-bold mb-3">Resource</h5>
            <ul className="list-unstyled">
              <li>News & Media</li>
              <li>Culture</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Section 4: Tools */}
          <div className="col-md-3 mb-3 mb-md-0">
            <h5 className="fw-bold mb-3">Tools</h5>
            <ul className="list-unstyled">
              <li>Pricing</li>
              <li>Compare Us</li>
              <li>Support</li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright and links */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center border-top pt-3">
          <p className="mb-2 mb-md-0">&copy; {new Date().getFullYear()} MRKT.AI. All rights reserved.</p>
          <div className="d-flex gap-4">
            <a href="#" className="text-white text-decoration-none">Privacy Policy</a>
            <a href="#" className="text-white text-decoration-none">Terms</a>
            <a href="#" className="text-white text-decoration-none">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
