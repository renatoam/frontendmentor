import axios from "axios";
import { useEffect, useState } from "react";
import Divider from "../../../common/components/atoms/divider";
import AdviceButton from "./components/adviceButton";
import AdviceText from "./components/adviceText";
import AdviceTitle from "./components/adviceTitle";
import AdviceWrapper from "./components/adviceWrapper";
import { useAdvice } from "./hooks/useAdvice";

export default function AdviceGenerator() {
  const { id, advice, isLoading, generateNewAdvice } = useAdvice()

  return (
    <AdviceWrapper>
      <AdviceTitle>Advice #{id}</AdviceTitle>
      <AdviceText isLoading={isLoading}>{advice}</AdviceText>
      <Divider variant="custom" />
      <AdviceButton handleClick={generateNewAdvice} disabled={isLoading} />
  </AdviceWrapper>
  )
}
