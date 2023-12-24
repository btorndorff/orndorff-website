import { React } from "react";
import "../styles/styles.css"
import hotel from "../images/hotel.jpeg"
import irene from "../images/irene.png"
import modern from "../images/modern.JPG"
import bridge from "../images/bridge.png"

const WritingCard = ({ title, description, image, link, position }) => {
    return (
        <div
            className="writing-card"
            onClick={() => window.open(link, "_blank", "noopener,noreferrer")}
        >
            <div className="writing-card-image">
                <img src={image} alt={title} style={{ objectPosition: position }} />
            </div>

            <div className="writing-card-content">
                <h3>{title}</h3>
                <hr style={{ width: "100%" }} />
                <p>{description}</p>
            </div>
        </div>
    );
};

const writingData = [
    {
        title: "AN ORNDORFF FAMILY",
        description:
            "A comprehensive book on the Orndorff family history",
        image:
            `${modern}`,
        link: "https://drive.google.com/file/d/1AOWJfZj1d7eQRI2I-Nz28T2Du_InqZbA/view?usp=drive_link",
    },
    {
        title: "IRENE ORNDORFF",
        description:
            "The woman who worked with roosevelt",
        image:
            `${irene}`,
        link: "https://drive.google.com/file/d/1aPVM_mRr4qCSuWi_LHOUbeuV6xb2K3ns/view?usp=drive_link",
        position: "top"
    },
    {
        title: "HOTEL ORNDORFF AND TEXAS GERMANS",
        description:
            "A brief history on the texas Orndorffs",
        image:
            `${hotel}`,
        link: "https://drive.google.com/file/d/1AOWJfZj1d7eQRI2I-Nz28T2Du_InqZbA/view?usp=drive_link",
        position: "bottom"
    },
    {
        title: "Antietam",
        description:
            "Orndorff involvment in the battle of Antietam and the civil war",
        image:
            `${bridge}`,
        link: "https://drive.google.com/file/d/1aPVM_mRr4qCSuWi_LHOUbeuV6xb2K3ns/view?usp=drive_link",
        position: "bottom"
    },
];

export default function Writing() {
    const writingDataArray = writingData.map((writing) => (
        <WritingCard
            title={writing.title}
            description={writing.description}
            image={writing.image}
            link={writing.link}
            position={writing.position ? writing.position : "center"}
        />
    ));

    return (
        <div className="writings-container">
            {writingDataArray}
        </div>
    );
}
