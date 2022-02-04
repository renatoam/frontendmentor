import Head from 'next/head'

import styles from '../../styles/newbie/qrcode.module.css'
import QrCode from '../../modules/newbie/qrcode'

export default function QRCode() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <main className={styles.main}>
        <QrCode />
      </main>
    </>
  )
}