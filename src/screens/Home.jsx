// Home.jsx

import React from 'react';
import "../styles/styles.css"

const Home = () => {
  return (
    <div className='container'>
      <div className="info-bar">
        <p>Welcome, to this page dedicated to the Orndorff family history from our origins in Seagan, Germany, our emigration to the United States, and our modern whereabouts!</p>
        <div className="info-button">Learn More</div>
      </div>
      <div className="highlight-1">
        <div className="highlight-info">
          <h1>AN ORNDORFF FAMILY<br /></h1>
          <h3>A comprehensive book on the Orndorff family history</h3>
        </div>
      </div>
      <div className="highlight-2">
        <div className="highlight-info">
          <h1>IRENE ORNDORFF<br /></h1>
          <h3>the woman who worked under rosevelt</h3>
        </div>
      </div>
    </div >
  );
};

export default Home;

// TODO: setup as redirects on click, stop text from moving with animation, make height of highlight same as screen height
