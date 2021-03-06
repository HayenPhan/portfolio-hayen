import * as React from "react";

function SvgButton(props) {
  return (
    <svg data-name="button" width={141} height={99.968} {...props}>
      <g data-name="Group 13">
        <path
          data-name="Path 13"
          d="M1.221 32.805c6.294 12.827 31.928.223 84.363 7.909 20.985 3.076 36.62 7.991 45.345-1.055 4.41-4.572 6.633-12.348 5.8-19.509-.139-1.191-1.579-12.2-10.018-17.4-8.242-5.078-18.611-1.813-23.2-.527-43.446 12.175-75.815-14.049-94.909 5.8C2.536 14.33-2.374 25.478 1.221 32.805z"
          fill="#8875bc"
          opacity={0.512}
        />
        <path
          data-name="Path 12"
          d="M5.101 36.496c6.294 12.827 31.928.223 84.363 7.909 20.985 3.076 36.62 7.991 45.345-1.055 4.41-4.572 6.633-12.348 5.8-19.509-.139-1.191-1.579-12.2-10.018-17.4-8.242-5.078-18.611-1.813-23.2-.527-43.446 12.175-75.815-14.049-94.909 5.8-6.066 6.307-10.976 17.455-7.381 24.782z"
          fill="#33338e"
        />
        <text
          data-name="Lees meer!"
          transform="translate(32 13.968)"
          fill="#fff"
          fontSize={15}
          fontFamily="Lora-Bold, Lora"
          fontWeight={700}
          letterSpacing=".05em"
        >
          <tspan x={0} y={15}>
            {"Lees meer!"}
          </tspan>
        </text>
      </g>
      <path
        data-name="Path 13"
        d="M1.221 32.805c6.294 12.827 31.928.223 84.363 7.909 20.985 3.076 36.62 7.991 45.345-1.055 4.41-4.572 6.633-12.348 5.8-19.509-.139-1.191-1.579-12.2-10.018-17.4-8.242-5.078-18.611-1.813-23.2-.527-43.446 12.175-75.815-14.049-94.909 5.8C2.536 14.33-2.374 25.478 1.221 32.805z"
        fill="#8875bc"
        opacity={0.512}
      />
      <path
        data-name="Path 12"
        d="M5.101 36.496c6.294 12.827 31.928.223 84.363 7.909 20.985 3.076 36.62 7.991 45.345-1.055 4.41-4.572 6.633-12.348 5.8-19.509-.139-1.191-1.579-12.2-10.018-17.4-8.242-5.078-18.611-1.813-23.2-.527-43.446 12.175-75.815-14.049-94.909 5.8-6.066 6.307-10.976 17.455-7.381 24.782z"
        fill="#33338e"
      />
    </svg>
  );
}

export default SvgButton;
