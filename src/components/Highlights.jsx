// Home.jsx

import React from 'react';
import "../styles/styles.css"


const HighlightCard = ({ title, description, image, link, position }) => {
    return (
        <div className="highlight"
            style={{ backgroundImage: `url(${image}) rgba(32, 35, 39, 0.25)` }}
            onClick={() => window.open(link, "_blank", "noopener,noreferrer")}
        >
            <div className='highlight-image' style={{ alignItems: position }}>
                <img src={image} />
            </div>

            <div className="highlight-info">
                <h1>{title}<br /></h1>
                <h3>{description}</h3>
            </div>
        </div>
    )
}

const Highlights = ({ highlights }) => {
    const highlightsDataArray = highlights.map((highlight) => (
        <HighlightCard
            title={highlight.title}
            description={highlight.description}
            image={highlight.image}
            link={highlight.link}
        />
    ));

    return (
        <>
            {highlightsDataArray}
        </>
    );
};

export default Highlights;