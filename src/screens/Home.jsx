// Home.jsx

import React from 'react';
import { useNavigate } from "react-router-dom";
import "../styles/styles.css"
import Highlights from '../components/Highlights';
import modern from "../images/modern.JPG"
import irene from "../images/irene.png"


const homeData = [
  {
    title: "AN ORNDORFF FAMILY",
    description:
      "A comprehensive book on the Orndorff family history",
    image:
      `${modern}`,
    link: "https://drive.google.com/file/d/1AOWJfZj1d7eQRI2I-Nz28T2Du_InqZbA/view?usp=drive_link",
    position: "center"
  },
  {
    title: "IRENE ORNDORFF",
    description:
      "The woman who worked with roosevelt",
    image:
      `${irene}`,
    link: "https://drive.google.com/file/d/1aPVM_mRr4qCSuWi_LHOUbeuV6xb2K3ns/view?usp=drive_link",
    postion: "flex-start"
  },
]

const Home = ({ setSelectedTab }) => {
  const navigate = useNavigate()

  return (
    <div className='container'>
      <div className="info-bar">
        <p>Welcome, to this page dedicated to the Orndorff family history from our origins in Seagan, Germany, our emigration to the United States, to our modern whereabouts!</p>
        <div className="info-button"
          onClick={() => {
            navigate("/writings")
            setSelectedTab("writings")
          }}
        >Learn More</div>
      </div>
      <Highlights highlights={homeData} />
    </div >
  );
};

export default Home;

// TODO: setup as redirects on click, stop text from moving with animation, make height of highlight same as screen height
