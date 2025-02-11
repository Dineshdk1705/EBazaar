import styles from "./CategoriesLoading.module.css";

const CategoriesLoading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.skeletonWrapper}>
        {Array.from({ length: 19 }).map((_, index) => (
          <div key={index} className={styles.skeleton}></div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesLoading;
