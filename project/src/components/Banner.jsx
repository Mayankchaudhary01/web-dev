import React from 'react';

const Banner = () => {
  return (
    <section id="banner" className="banner">
      <div className="container">
        <div className="banner-content">
          <h2>Welcome to Our Tuition Center</h2>
          <p>Empowering students to achieve their academic goals with expert guidance.</p>
          <a href="#contact"><button className="cta-button">Enroll Now</button></a>
        </div>
        <div className="banner-images">
          <img src="/images/banner1.jpg" alt="Banner Image 1" />
          <img src="/images/banner2.jpg" alt="Banner Image 2" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
