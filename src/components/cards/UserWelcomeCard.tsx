import { Avatar } from "@nextui-org/avatar";
import Image from "next/image";


interface Props {
  imgUrl: string;
  firstName: string;
}

export default function UserWelcomeCard({ imgUrl, firstName }: Props) {
  const titleStyle: React.CSSProperties = {
    color: 'white',
    fontSize: '25px',
    fontWeight: 1000,
    textShadow: '10px 10px 11px rgba(0, 0, 0, 0.4)' /* Add text shadow */
  };

  const shineStyle: React.CSSProperties = {
    animation: 'shine-animation 1.5s infinite linear'
  };

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="w-[100px] h-[100px] rounded-full bg-cover bg-center shadow-sm shadow-[#e0e0e0]]" style={{ backgroundImage: `url(${imgUrl})` }}>
      </div>
      <h3 style={{ ...titleStyle, ...shineStyle }}>Welcome {firstName}!</h3>
      <div className="flex gap-1">
        <p className="text-white text-[14px] mt-[-3px] font-semibold">Keep the learning going!</p>
        <Image width="20" height="20" src="/assets/party-icon.svg" alt="next"/>
      </div>
    </div>
  );
}
