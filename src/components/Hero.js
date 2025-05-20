
import React from 'react';
import heroImg from '../assets/ai-bot.png';
import '../styles/custom.css';

const Hero = () => {
    return (
        <div className="py-5 px-3 d-flex justify-content-center align-items-center text-center">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-6 text-md-start text-center">
                        <h1 className="ai-heading">
                            <span className="gradient-color">AI-Driven</span> <strong>marketing</strong>
                        </h1>
                        <p className="lead mt-3">
                            Enhance your marketing strategy with our AI-powered tools that optimize campaigns and boost results.
                        </p>
                        <div className="mt-4">
                            <button className="custom-gradient-button me-2">Get Started</button>
                            <button className="custom-outline-button">Watch a Demo</button>
                        </div>
                        {/* Rating section */}
                        <div className="mt-3" style={{ fontSize: '1.1rem', fontWeight: '600', color: '#444' }}>
                            <div>Tested Software Reviewers</div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
                                <div style={{ color: '#FFD700', fontSize: '1.6rem', letterSpacing: '2px' }}>
                                    ★★★★★
                                </div>
                                <div style={{ fontSize: '1rem', color: '#333' }}>4.9 / 5.0</div>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-6 text-center mt-4 mt-md-0">
                        <img
                            src={heroImg}
                            alt="AI Bot"
                            className="img-fluid w-100"
                            style={{ maxWidth: '100%', height: 'auto' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
