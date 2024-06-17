import Image from "next/image";
import { useState } from "react";

export default function ToDoBtn() {
  const [completed, setCompleted] = useState(true);

  return (
    <div
      className="flex flex-col items-center justify-center"
      onClick={() => setCompleted(!completed)}
    >
      {completed ? (
        <Image
          src="/assets/circle-completed.svg"
          width="16"
          height="16"
          alt="done"
          className="cursor-pointer"
        />
      ) : (
        <Image
          src="/assets/circle.svg"
          width="16"
          height="16"
          alt="plus"
          className="cursor-pointer"
        />
      )}
    </div>
  );
}
