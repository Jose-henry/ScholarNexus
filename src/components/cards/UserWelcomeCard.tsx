import { Avatar } from "@nextui-org/avatar";
import Image from "next/image";

export default function UserWelcomeCard() {
  const titleStyle: React.CSSProperties = {
    color: '#eef2e2',
    fontSize: '25px',
    fontWeight: 1000,
    textShadow: '10px 10px 11px rgba(0, 0, 0, 0.4)' /* Add text shadow */
  };

  const shineStyle: React.CSSProperties = {
    animation: 'shine-animation 1.5s infinite linear'
  };

  return (
    <div className="flex flex-col items-center gap-1">
      <Avatar
        isBordered
        showFallback
        color="secondary"
        className="w-20 h-20 text-large mb-[10px] cursor-pointer"
        src="(link unavailable)"
      />
      <h3 style={{ ...titleStyle, ...shineStyle }}>Welcome Ella!</h3>
      <div className="flex gap-1">
        <p className="text-white text-[14px] mt-[-3px]">Keep the learning going!</p>
        <Image width="18" height="18" src="/assets/party-icon.svg" alt="next"/>
      </div>
    </div>
  );
}
