import Image from "next/image";
import { useState } from "react";

export default function HomeToDoBtn() {
  const [completed, setCompleted] = useState(false);

  return (
    <div
      className="flex flex-col items-center justify-center"
      onClick={() => setCompleted(!completed)}
    >
      {completed ? (
        <Image
          src="/assets/circle-completed.svg"
          width="13"
          height="13"
          alt="done"
          className="cursor-pointer"
        />
      ) : (
        <Image
          src="/assets/circle.svg"
          width="13"
          height="13"
          alt="plus"
          className="cursor-pointer"
        />
      )}
    </div>
  );
}
