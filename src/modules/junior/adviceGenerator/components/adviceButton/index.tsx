import { MouseEvent } from "react";
import Image from "../../../../../common/components/atoms/image";
import styles from './styles.module.scss'

interface AdviceButtonProps {
  handleClick(event: MouseEvent<HTMLButtonElement>): void
  disabled?: boolean
}

export default function AdviceButton(props: AdviceButtonProps) {
  return (
    <button
      className={styles.shuffle}
      onClick={props.handleClick} 
      disabled={props.disabled}
    >
      <Image
        src="/icons/icon-dice.svg"
        alt="Shuffle"
        height={30}
        width={30}
      />
    </button>
  )
}