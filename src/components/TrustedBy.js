import React, { useRef, useEffect } from 'react';

// Import brand logos
import spotifyLogo from '../assets/spotify.png';
import facebookLogo from '../assets/facebook.png';
import twitterLogo from '../assets/twitter.png';
import metaLogo from '../assets/meta.png';
import instagramLogo from '../assets/instagram.png';

const TrustedBy = () => {
  // Create a ref to access the outer container
  const boxRef = useRef(null);

  // Log box info when component mounts
  useEffect(() => {
    if (boxRef.current) {
      console.log('Box element:', boxRef.current);
      console.log('Box dimensions:', boxRef.current.getBoundingClientRect());
    }
  }, []);

  // Array of brand logos with names
  const logos = [
    { name: 'Spotify', src: spotifyLogo },
    { name: 'Facebook', src: facebookLogo },
    { name: 'Twitter', src: twitterLogo },
    { name: 'Meta', src: metaLogo },
    { name: 'Instagram', src: instagramLogo }
  ];

  return (
    <div className="d-flex justify-content-center py-5">
      <div
        ref={boxRef}
        className="text-white py-4 px-4"
        style={{
          maxWidth: '1200px',
          width: '100%',
          backgroundColor: '#000',
          borderRadius: '4rem',
        }}
      >
        {/* Display all brand logos in a flexible row */}
        <div
          className="d-flex justify-content-between align-items-center flex-wrap"
          style={{ gap: '20px' }}
        >
          {logos.map((brand, i) => (
            <div
              key={i}
              className="d-flex align-items-center"
              style={{ minWidth: '180px', margin: '0 10px' }}
            >
              {/* Brand logo */}
              <img
                src={brand.src}
                alt={brand.name}
                style={{
                  height: '50px',
                  width: '50px',
                  objectFit: 'contain',
                  marginRight: '10px',
                }}
              />
              {/* Brand name */}
              <span
                className="fw-semibold fst-italic"
                style={{ fontSize: '1.6rem' }}
              >
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
