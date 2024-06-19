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
    '/assets/luther.jpg',
    '/assets/greene.jpg',
    '/assets/richard.jpg',
    '/assets/andrew.jpg',
    '/assets/dale.jpg',
    '/assets/adlous.jpg',
    '/assets/earl.jpg',
    '/assets/jobs.jpg',
    '/assets/tim.jpg',
];

const fadeAnimationName = 'fade-animation';

export default function VideoCard() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fadeStyle, setFadeStyle] = useState<React.CSSProperties>({});

    useEffect(() => {
        // Create keyframes for the fade animation
        const styleSheet = document.styleSheets[0];
        const keyframes = `
            @keyframes ${fadeAnimationName} {
                0% { opacity: 0; }
                50% { opacity: 1; }
                100% { opacity: 0; }
            }
        `;

        // Insert keyframes into the first stylesheet
        if (styleSheet) {
            const ruleIndex = styleSheet.cssRules.length;
            styleSheet.insertRule(keyframes, ruleIndex);
        }

        // Set interval to change the background image
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
            setFadeStyle({
                animation: `${fadeAnimationName} 2s ease-in-out`, // Apply animation
            });

            // Reset animation after it completes
            setTimeout(() => {
                setFadeStyle({});
            }, 2000); // 2 seconds duration of the animation
        }, 10000); // Change every 10 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div 
            className="shadow-md shadow-[#929aab] bg-white transform w-[100%] h-[290px] border-dark-400 cursor-pointer rounded-sm"
            style={{
                backgroundImage: `url(${images[currentImageIndex]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center 28%',
                backgroundRepeat: 'no-repeat',
                ...fadeStyle, // Spread fadeStyle for animations
            }}
        > 
        </div>
    );
}
