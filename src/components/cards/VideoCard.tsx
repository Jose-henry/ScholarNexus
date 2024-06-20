import { useEffect, useState, useRef } from 'react'

const images = [
    '/assets/einstein.jpg',
    '/assets/steve.jpg',
    '/assets/bill.png',
    '/assets/nelson.jpg',
    '/assets/kennedy.jpg',
    '/assets/jeff.jpg',
    '/assets/elon.jpg',
    '/assets/mark.jpg',
];

export default function VideoCard() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const imageCount = images.length;
    const imageSliderRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentImageIndex === imageCount) {
                // Temporarily disable transition
                setIsTransitioning(false);
                setCurrentImageIndex(0);
                // Enable transition again after rendering the first image
                setTimeout(() => {
                    setIsTransitioning(true);
                }, 50); // Short delay to re-enable transition
            } else {
                setCurrentImageIndex((prevIndex) => prevIndex + 1);
            }
        }, 8000); // Change every 8 seconds

        return () => clearInterval(interval);
    }, [currentImageIndex, imageCount]);

    return (
        <div className="relative w-full h-[290px] overflow-hidden shadow-md shadow-[#929aab] cursor-pointer rounded-sm bg-white">
            <div
                ref={imageSliderRef}
                className={`flex transition-transform duration-1000 ease-in-out ${!isTransitioning && 'transition-none'}`}
                style={{
                    transform: `translateX(-${(currentImageIndex % imageCount) * 100}%)`
                }}
            >
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-full h-[290px] bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${image})` }}
                    ></div>
                ))}
                {/* Clone the first image to the end for seamless transition */}
                <div
                    className="flex-shrink-0 w-full h-[290px] bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${images[0]})` }}
                ></div>
            </div>
        </div>
    );
}
