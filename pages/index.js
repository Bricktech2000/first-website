import Head from 'next/head';
import Image from 'next/image';
import Button from '../components/Button';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>John Doe</title>
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
          <Button
            background="hsl(220deg, 75%, 50%)"
            text="Button 1"
            link="https://github.com/Bricktech2000/first-website"
          />
          <Button
            background="hsl(230deg, 75%, 50%)"
            text="Button 2"
            link="https://github.com/Bricktech2000/first-website"
          />
          <Button
            background="hsl(240deg, 75%, 50%)"
            text="Button 3"
            link="https://github.com/Bricktech2000/first-website"
          />
          <Button
            background="hsl(250deg, 75%, 50%)"
            text="Button 4"
            link="https://github.com/Bricktech2000/first-website"
          />
          <Button
            background="hsl(260deg, 75%, 50%)"
            text="Button 5"
            link="https://github.com/Bricktech2000/first-website"
          />
        </div>
      </main>
    </div>
  );
}
