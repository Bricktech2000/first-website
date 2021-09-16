import Head from 'next/head';
import Image from 'next/image';
import Button from '../components/Button';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Reid Tull</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.title}>
          <h1>Reid Tull</h1>
          <p>
            Excepteur et proident exercitation consequat amet fugiat consectetur
            qui dolore laboris dolor eu fugiat anim.
          </p>
        </div>
        <div className={styles.buttons}>
          <Button background="red" />
          <Button background="orange" />
          <Button background="yellow" />
          <Button background="lime" />
          <Button background="cyan" />
        </div>
      </main>
    </div>
  );
}
