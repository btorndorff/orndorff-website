import { PhotoAlbum } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { React, useState } from 'react';
import "../styles/styles.css"
import hotel from "../images/hotel.jpeg"
import irene from "../images/irene_full.jpg"
import modern from "../images/modern.JPG"
import bridge from "../images/bridge.png"
import navy from "../images/navy.jpg"
import penn from "../images/penn.jpg"
import irene_group from "../images/irene_group.jpg"
import Alzina from "../images/Alzina.jpg"

const photosData = [
    { src: irene, width: 640, height: 480 },
    { src: hotel, width: 578, height: 473 },
    { src: modern, width: 1374, height: 911 },
    { src: bridge, width: 759, height: 541 },
    { src: irene_group, width: 640, height: 480 },
    { src: penn, width: 3024, height: 4032 },
    { src: navy, width: 2505, height: 3985 },
    { src: Alzina, width: 220, height: 357 }

]

const Photos = () => {
    const [photoOpen, setPhotoOpen] = useState(false);
    const [displayPhoto, setDisplayPhoto] = useState([]);

    const openPhotoModal = (photo) => {
        setDisplayPhoto({ src: photo });
        setPhotoOpen(true);
    };

    return (
        <div style={{ margin: "50px" }}>
            <PhotoAlbum
                layout="masonry"
                columns={(containerWidth) => {
                    if (containerWidth < 400) return 2;
                    if (containerWidth < 600) return 3;
                    return 4;
                }}
                photos={photosData}
                renderPhoto={({ photo, wrapperStyle, renderDefaultPhoto }) => (
                    <div
                        onClick={() => openPhotoModal(photo.src)}
                        style={wrapperStyle}
                    >
                        {renderDefaultPhoto({ wrapped: true })}
                    </div>
                )}
            />

            <Lightbox
                open={photoOpen}
                close={() => setPhotoOpen(false)}
                slides={[displayPhoto]}
                render={{
                    buttonPrev: () => null,
                    buttonNext: () => null,
                }}
            />
        </div>
    );
};

export default Photos;