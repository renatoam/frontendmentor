import { TEXT, TITLE } from "../constants/qrcode";
import Code from "./components/code";

export default function QrCode() {
  return (
    <Code>
      <Code.Image src="/images/image-qr-code.png" alt="Frontend Mentor" />
      <Code.Title>{TITLE}</Code.Title>
      <Code.Text>{TEXT}</Code.Text>
    </Code>
  );
}
