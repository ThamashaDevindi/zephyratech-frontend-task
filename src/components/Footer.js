import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-5">
      <p className="mb-1">&copy; {new Date().getFullYear()} MRKT.AI. All rights reserved.</p>
      <div className="d-flex justify-content-center gap-3">
        <a href="#" className="text-white text-decoration-none">Privacy Policy</a>
        <a href="#" className="text-white text-decoration-none">Terms</a>
        <a href="#" className="text-white text-decoration-none">Support</a>
      </div>
    </footer>
  );
};

export default Footer;
