import { ChildrenType } from "../../../../../common/types/reactTypes";
import OrderSummaryButton from "../osButton";
import OrderSummaryImage from "../osImage";
import OrderSummaryPlans from "../osPlans";
import OrderSummaryText from "../osText";
import OrderSummaryTitle from "../osTitle";

export default function OS({ children }: ChildrenType) {
  return <section>{children}</section>;
}

OS.Image = OrderSummaryImage;
OS.Title = OrderSummaryTitle;
OS.Text = OrderSummaryText;
OS.Plans = OrderSummaryPlans;
OS.Payment = OrderSummaryButton;
OS.Cancel = OrderSummaryButton;
