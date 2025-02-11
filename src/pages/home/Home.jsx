import React, { useEffect } from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    window.scroll({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <img src="/logo.jpg" alt="logo" className={styles.logo_img} />
          <h1 className={styles.heroTitle}>Shop Smarter, Live Better</h1>
          <p className={styles.heroSubtitle}>
            Explore our curated collection of products designed just for you.
          </p>
          <Link to="/products">
            <button className={styles.heroButton}>Explore Now</button>
          </Link>
        </div>
        <div className={styles.heroImage}>
          <img
            src="https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg"
            alt="E-Commerce Vector"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
