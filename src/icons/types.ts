export interface IconProps extends React.SVGAttributes<SVGAElement> {
    children?: never;
    color?: string;
    height?: string;
    width?: string;
    className?: string;
}

export interface IFilledIcon extends IconProps {
    filledIcon?: boolean;
}