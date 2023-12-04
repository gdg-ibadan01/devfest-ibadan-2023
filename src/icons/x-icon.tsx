import { IconProps } from "./types";

export const XIcon = ({ color, width, height }: IconProps) => {
  return (
    <svg
      width={width ?? "27"}
      height={height ?? "27"}
      viewBox="0 0 30 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.1779 0.7229H27.5558L17.991 11.6558L29.2439 26.5299H20.4334L13.5334 17.5076L5.63656 26.5299H1.25628L11.4872 14.8357L0.692383 0.72409H9.72657L15.9639 8.97073L23.1779 0.7229ZM21.6421 23.9103H24.0678L8.40844 3.20569H5.80549L21.6421 23.9103Z"
        fill={color ?? "#fff"}
      />
    </svg>
  );
};
