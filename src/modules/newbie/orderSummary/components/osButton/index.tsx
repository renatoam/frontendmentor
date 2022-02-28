import { ReactNode } from "react";
import styles from "./styles.module.css";

interface ButtonProps {
  variant?: "primary" | "secondary";
  children: ReactNode;
}

export default function OrderSummaryButton({
  variant = "primary",
  children,
}: ButtonProps) {
  return (
    <button className={`${styles.button} ${styles[variant]}`}>
      {children}
    </button>
  );
}
