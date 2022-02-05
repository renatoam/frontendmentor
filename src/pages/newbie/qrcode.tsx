import styles from "../../styles/newbie/qrcode.module.css";
import QrCode from "../../modules/newbie/qrcode";

export default function QRCode() {
  return (
    <main className={styles.main}>
      <QrCode />
    </main>
  );
}
