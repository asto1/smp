import React from 'react';

const Gallery = () => {
    const images = [
        { src: '/assets/images/event1.jpg', alt: 'Event 1' },
        { src: '/assets/images/event2.jpg', alt: 'Event 2' },
        { src: '/assets/images/event3.jpg', alt: 'Event 3' },
        { src: '/assets/images/event4.jpg', alt: 'Event 4' },
        { src: '/assets/images/event5.jpg', alt: 'Event 5' },
    ];

    return (
        <div className="gallery">
            <h2>Gallery</h2>
            <div className="gallery-grid">
                {images.map((image, index) => (
                    <div key={index} className="gallery-item">
                        <img src={image.src} alt={image.alt} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;