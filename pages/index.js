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
          <h1>John Doe</h1>
          <p>
            Excepteur et proident exercitation consequat amet fugiat consectetur
            qui dolore laboris dolor eu fugiat anim.
          </p>
        </div>
        <div className={styles.buttons}>
          <Button background="red" text="Button 1"/>
          <Button background="orange" text="Button 2"/>
          <Button background="yellow" text="Button 3"/>
          <Button background="lime" text="Button 4"/>
          <Button background="cyan" text="Button 5"/>
        </div>
      </main>
    </div>
  );
}
