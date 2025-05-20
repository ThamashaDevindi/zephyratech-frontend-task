import React from 'react';
import insightImg from '../assets/insight.png';

// Insights section component
const Insights = () => {
  return (
    <div className="py-3">
      <div className="container d-flex justify-content-center">
        <div
          className="p-4"
          style={{
            backgroundColor: '#fbf9f5', // Light background
            maxWidth: '1200px',
            width: '100%',
            borderRadius: '2rem',
          }}
        >
          <div className="row align-items-center">

            {/* Left Side - Text Content */}
            <div className="col-md-6">
              <h3
                className="mb-3"
                style={{ fontSize: '3.5rem', fontWeight: 'bold' }}
              >
                Harness Insights for Success
              </h3>

              <p className="text-muted mb-4" style={{ fontSize: '1.2rem' }}>
                Uncover valuable insights and trends from your data with our advanced analytics tools.
                Make informed decisions, refine your strategies, and stay ahead of the competition by leveraging
                the wealth of information at your fingertips.
              </p>
            </div>

            {/* Right Side - Image */}
            <div className="col-md-6 text-center">
              <img
                src={insightImg}
                alt="Dashboard insights chart"
                className="img-fluid"
                style={{ maxWidth: '400px', borderRadius: '2rem' }}
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;
