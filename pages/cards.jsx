import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo1.svg";
import button from "../public/button.svg";
import styles from "../styles/Home.module.css";
import gs from "../public/Game_Screen.svg";
import { connect } from "react-redux";

const Cards = (props) => {
  const { user } = props;
  console.log("passed in user", user);
  return (
    <div>
      <Head>
        <title>Home | Cosmic Bots</title>
        <meta name="description" content="Farm tokens with cosmic bots" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <section className={styles.section}>
          <Image src={logo} alt="logo" className={styles.logo1} />
          {/* <h1>Account: {user.main.name}  </h1> */}
        </section>
        <Image src={gs} alt="game screen" className={styles.gs} />
        <section className={styles.buttonContainer}>
          <Link href="/app" passHref alt="button">
            <button className={styles.Button}>HOME</button>
          </Link>
          <Link href="/cards" passHref alt="button">
            <button className={styles.Button}>My Cards</button>
          </Link>
          <Link href="/market" passHref alt="button">
            <button className={styles.Button}>Market</button>
          </Link>
          <Link href="/exchange" passHref alt="button">
            <button className={styles.Button}>Exchange</button>
          </Link>
        </section>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state,
});

export default connect(mapStateToProps)(Cards);
