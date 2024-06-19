import { useEffect, useState } from 'react';

const images = [
    '/assets/einstein.jpg',
    '/assets/steve.jpg',
    '/assets/bill.png',
    '/assets/nelson.jpg',
    '/assets/newton.jpg',
    '/assets/kennedy.jpg',
    '/assets/darwin.jpg',
    '/assets/jeff.jpg',
    '/assets/lincoln.jpg',
    '/assets/elon.jpg',
    '/assets/mark.jpg',
    '/assets/jack.jpg',
    '/assets/obama.jpg',
    '/assets/greene.jpg',
    '/assets/richard.jpg',
    '/assets/andrew.jpg',
    '/assets/dale.jpg',
    '/assets/adlous.jpg',
    '/assets/earl.jpg',
    '/assets/jobs.jpg',
    '/assets/tim.jpg',
];

export default function VideoCard() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 8000); // Change every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-[290px] overflow-hidden shadow-md shadow-[#929aab] cursor-pointer rounded-sm bg-white">
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
            >
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-full h-[290px] bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${image})` }}
                    ></div>
                ))}
            </div>
        </div>
    );
}
