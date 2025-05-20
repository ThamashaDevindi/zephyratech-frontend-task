import React from 'react';

// Features component displays a section highlighting platform features
const Features = () => {
  return (
    // Container with center-aligned text and vertical padding
    <div className="container text-center py-5">

      {/* Main heading with inline styles for color, size, and weight */}
      <h3
        className="mb-3"
        style={{ color: 'Black', fontSize: '3.5rem', fontWeight: 'bold' }}>
        Discover Our Comprehensive Suite of Features
      </h3>

      {/* Paragraph with muted text and font size for description */}
      <p className="text-muted mb-4" style={{ fontSize: '1.2rem' }}>
        Our platform is designed to empower your business with a comprehensive 
        suite of features that streamline your marketing efforts and supercharge your growth.
      </p>

    </div>
  );
};

export default Features; // Export the component for use in other files
