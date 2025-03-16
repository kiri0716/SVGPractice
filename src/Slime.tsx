/**
 *  スライム
 */
type SlimeProps ={
    color?:string;
};

export const Slime = ({color="blue"}:SlimeProps) => {

  return (
    <svg
      width={100}
      height={100}
      viewBox="0 0 300 300"
      xmlns="https://www.w3.org/2000/svg"
    >
      <path
        d="M170,50 Q150,2 130,50 Q120,125 60,145  Q-60,220 60,290 Q150,310 240,290 Q360,220 240,145 Q180,125 170,50"
        fill={color}
        stroke="black"
      />
      <circle cx="115" cy="195" r="25" fill="white" />
      <circle cx="185" cy="195" r="25" fill="white" />
      <circle cx="115" cy="195" r="10" fill="black" />
      <circle cx="185" cy="195" r="10" fill="black" />
      <path
        d="M80,240 Q150,290 230,240 Q240,230 230,230 Q150,270 80,230 Q70,230 80,240"
        fill="red"
      />
    </svg>
  );
};
