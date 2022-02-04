import { ChildrenType } from "../../../../../common/types/reactTypes";
import styles from './styles.module.css'
import CodeTitle from "../codeTitle";
import CodeText from "../codeText";
import CodeImage from "../codeImage";

export default function CodeWrapper({ children }: ChildrenType) {
  return (
    <section className={styles.wrapper}>{children}</section>
  )
}

CodeWrapper.Title = CodeTitle
CodeWrapper.Text = CodeText
CodeWrapper.Image = CodeImage

