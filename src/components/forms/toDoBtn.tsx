import Image from "next/image";

interface Props {
  selected: boolean;
  onClick: (clicked: boolean) => void;
}

export default function ToDoBtn({ selected, onClick }: Props) {
  return (
    <div
      className="flex flex-col items-center justify-center"
      onClick={() => onClick(!selected)} // toggle the selected state on click
    >
      {selected ? (
        <Image
          src="/assets/circle-completed.svg"
          width="20"
          height="20"
          alt="done"
        />
      ) : (
        <Image
          src="/assets/circle.svg"
          width="20"
          height="20"
          alt="plus"
        />
      )}
    </div>
  );
}
