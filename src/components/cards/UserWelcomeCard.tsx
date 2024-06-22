import Image from "next/image";

interface Props {
  imgUrl: string;
  firstName: string;
  level: string;
}

export default function UserWelcomeCard({ imgUrl, firstName, level }: Props) {
  const titleStyle: React.CSSProperties = {
    color: 'white',
    fontSize: '25px',
    fontWeight: 1000,
    textShadow: '10px 10px 11px rgba(0, 0, 0, 0.4)' /* Add text shadow */
  };

  const shineStyle: React.CSSProperties = {
    animation: 'shine-animation 1.5s infinite linear'
  };

  // Function to get border color based on level
  const getBorderColor = (level: string): string => {
    const levelColors: { [key: string]: string } = {
      "100": "#66ccff", // Level 100
      "200": "#99ff99", // Level 200
      "300": "#ffff99", // Level 300
      "400": "#ffcc99", // Level 400
      "500": "#cc99ff", // Level 500
      "600": "#ff9999", // Level 600
      "700": "#99ffff"  // Level 700
      // Add more levels as needed
    };

    return levelColors[level] || "#e0e0e0"; // Default color if level not found
  };

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="w-[100px] h-[100px] rounded-full border-[3px]" style={{ 
        border: `3px solid ${getBorderColor(level)}`, // Set border color dynamically based on level
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' /* Adjust shadow as needed */
      }}>
      </div>
      <h3 style={{ ...titleStyle, ...shineStyle }}>Welcome {firstName}!</h3>
      <div className="flex gap-1">
        <p className="text-white text-[14px] mt-[-3px] font-semibold">Keep the learning going!</p>
        <Image width="20" height="20" src="/assets/party-icon.svg" alt="next"/>
      </div>
    </div>
  );
}
