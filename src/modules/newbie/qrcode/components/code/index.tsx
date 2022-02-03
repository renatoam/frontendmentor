import { ChildrenType } from "../../../../../common/types/reactTypes";
import CodeTitle from "../codeTitle";
import CodeText from "../codeText";
import CodeImage from "../codeImage";

export default function CodeWrapper({ children }: ChildrenType) {
  return (
    <section>{children}</section>
  )
}

CodeWrapper.Title = CodeTitle
CodeWrapper.Text = CodeText
CodeWrapper.Image = CodeImage

