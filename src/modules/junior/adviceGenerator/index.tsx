import Divider from "../../../common/components/atoms/divider";
import AdviceText from "./components/adviceText";
import AdviceTitle from "./components/adviceTitle";
import AdviceWrapper from "./components/adviceWrapper";

export default function AdviceGenerator() {
  return (
    <AdviceWrapper>
      <AdviceTitle>Advice #117</AdviceTitle>
      <AdviceText>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia necessitatibus illum esse distinctio voluptatibus?"</AdviceText>
      <Divider variant="custom" />
  </AdviceWrapper>
  )
}