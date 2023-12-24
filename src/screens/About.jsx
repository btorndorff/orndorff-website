
import { React } from 'react';
import "../styles/styles.css"
import dad from "../images/mendad.JPG"


const About = () => {
    return (
        <div style={{ display: "flex", gap: "20px", margin: "50px" }}>
            <img
                src={dad}
                style={{ width: "40%", height: "auto", boxShadow: "0 0 0.5rem rgba(0, 0, 0, 0.1)" }}
            />
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: "15px",
                    color: 'white'
                }}
            >
                <p style={{ fontSize: "24px" }}>
                    Hello! We are Ben and Mark Orndorff from northen Virginia and are working together to archive some of the Orndorff history in one neat place. If there's anything you would like to add or ask about feel free to reach out to us!
                </p>
                <p>
                    &#9993;{" "}
                    <a
                        href="mailto:oksports@verizon.net"
                        style={{ textDecoration: "none", color: "white", fontSize: "24px" }}
                    >
                        <strong>{"oksports@verizon.net"}</strong>
                    </a>
                </p>
            </div>
        </div>
    );
};

export default About;