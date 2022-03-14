import styles from "./styles.module.css";

const Nominee = ({ nominee }) => {
  return (
    <li className={styles.card}>
      <h3>{nominee.title}</h3>
      <img src={nominee.photoUrL} alt={nominee.title} />
      <button className={styles.button}>Select</button>
    </li>
  );
};

export default Nominee;
