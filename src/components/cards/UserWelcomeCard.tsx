import { Avatar } from "@nextui-org/avatar";

export default function UserWelcomeCard() {
  const titleStyle: React.CSSProperties = {
    color: '#eef2e2',
    fontSize: '25px',
    fontWeight: 1000,
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)' /* Add text shadow */
  };

  const shineStyle: React.CSSProperties = {
    background: 'linear-gradient(90deg, #ffffff, #f0f0f0, #ffffff)',
    backgroundSize: '200% 100%',
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
      <p className="text-white text-[14px] mt-[-3px]">Keep the learning going!</p>
    </div>
  );
}
