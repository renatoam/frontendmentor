import Head from 'next/head'

import styles from '../../styles/newbie/nftcard.module.css'

export default function NFTPage() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600&display=swap" rel="stylesheet" />
      </Head>
      <main className={styles.main}>
        {/* <QrCode /> */}
      </main>
    </>
  )
}