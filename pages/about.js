import Head from "next/head";
import React from "react";
import Footer from "../components/Footer";
import styles from "../styles/about.module.scss";

function about() {
  return (
    <div className={styles.highlightSCSS}>
      <Head>
        <title>About Page</title>
        <meta name="description" content="About page" />
      </Head>
      <h1>about page</h1>
    </div>
  );
}

export default about;

about.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
