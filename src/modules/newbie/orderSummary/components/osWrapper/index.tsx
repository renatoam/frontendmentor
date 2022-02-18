import { ChildrenType } from "../../../../../common/types/reactTypes";
import OrderSummaryButton from "../osButton";
import OrderSummaryContentWrapper from "../osContentWrapper";
import OrderSummaryImage from "../osImage";
import OrderSummaryPlans from "../osPlans";
import OrderSummaryText from "../osText";
import OrderSummaryTitle from "../osTitle";
import styles from "./styles.module.css";

export default function OS({ children }: ChildrenType) {
  return <section className={styles.wrapper}>{children}</section>;
}

OS.Image = OrderSummaryImage;
OS.Content = OrderSummaryContentWrapper;
OS.Title = OrderSummaryTitle;
OS.Text = OrderSummaryText;
OS.Plans = OrderSummaryPlans;
OS.Payment = OrderSummaryButton;
OS.Cancel = OrderSummaryButton;
