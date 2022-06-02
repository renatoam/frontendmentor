import { ReactNode } from "react";
import styles from "./styles.module.css";

interface DividerProps {
  variant?: "simple" | "custom";
}

export default function Divider(props: DividerProps) {
  const { variant = 'simple' } = props;

  return <div className={styles[variant]}>{variant === 'custom' && <span />}</div>
}
