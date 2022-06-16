import { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./styles.module.css";

interface DividerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  variant?: "simple" | "custom";
}

export default function Divider(props: DividerProps) {
  const { variant = 'simple', className, ...rest } = props;

  return (
    <div
      className={`${styles[variant]} ${className}`}
      {...rest}
    >
      {variant === 'custom' && <span />}
    </div>
  )
}
