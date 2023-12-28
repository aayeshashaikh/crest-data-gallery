import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-share.css';
import 'lightgallery/css/lg-rotate.css';


// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';

const images = [
    { src: "/images/1.jpg", alt: "Flag of India" },
    { src: "/images/2.jpg", alt: "2" },
    { src: "/images/3.jpg", alt: "3" },
    { src: "/images/4.jpg", alt: "4", },
    { src: "/images/5.jpg", alt: "5", },
    { src: "/images/6.jpg", alt: "6", },
    { src: "/images/7.jpg", alt: "7", },
    { src: "/images/8.jpg", alt: "8", },
    { src: "/images/9.jpg", alt: "9", },
    { src: "/images/10.jpg", alt: "10", },
    { src: "/images/11.jpg", alt: "11", },
    { src: "/images/12.jpg", alt: "12", },
    { src: "/images/13.jpg", alt: "13", },
    { src: "/images/14.jpg", alt: "14", },
    { src: "/images/15.jpg", alt: "15", },
    { src: "/images/16.jpg", alt: "16", },
    { src: "/images/17.jpg", alt: "17", },
    { src: "/images/18.jpg", alt: "18", },
    { src: "/images/19.jpg", alt: "19", },
]

export function Gallery() {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (
        <div className="App">
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail]}
            >

                {images.map((image, index) => {
                    return (
                        <a href={image.src} key={index}>
                            <img alt={image.alt} src={image.src} />
                        </a>
                    )
                })}
            </LightGallery>
        </div>
    );
}
