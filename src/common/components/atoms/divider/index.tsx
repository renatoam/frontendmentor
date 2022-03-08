import { ReactNode } from "react";
import styles from "./styles.module.css";

interface DividerProps {
  variant: "simple" | "custom";
  content?: string | ReactNode;
  className?: string;
}

export default function Divider(props: DividerProps) {
  const { variant, content, className } = props;

  return variant === "simple" ? (
    <div className={styles.divider}></div>
  ) : (
    <div className={className}>{content}</div>
  );
}
