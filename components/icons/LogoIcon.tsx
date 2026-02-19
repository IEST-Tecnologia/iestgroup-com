import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export default function LogoIcon({
  className = "w-32 h-auto",
  ...props
}: IconProps) {
  return (
    <svg
      width="130"
      height="52"
      viewBox="0 0 130 52"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M 0 0 v 12 h 13 v -12 z" fill="#db1615" />
      <path d="M 0 20 v 31 h 13 v -31 z" fill="#274587" />
      <path
        d="M 20 0 v 12 h 35 v -12 z M 20 20 v 31 h 35 v -11 h -21 v -9 h 21 v -11 z"
        fill="#274587"
      />
      <path
        d="M 63 -2 c -1 6 -1 9 2 13 l 11 16 c 4 7 2 12 -2 13 h -15 v 11 h 19 c 11 0 21 -12 10 -28 l -12 -18 c -2 -3 -1 -6 0 -7 z"
        fill="#274587"
      />
      <path
        d="M 97 0 v 12 h 33 v -12 z M 99 21 v 16 c 0 10 4 14 12 14 h 17 v -11 h -11 c -3 0 -5 -2 -5 -5 v -14 z"
        fill="#274587"
      />
    </svg>
  );
}
