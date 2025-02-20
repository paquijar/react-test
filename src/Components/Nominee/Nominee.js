import styles from "./styles.module.css";

const Nominee = ({ nominee, selected, selectItem, category }) => {
  return (
    <li className={`${styles.card} ${selected ? styles.selected : ""}`}>
      <h3 className={styles.title}>{nominee.title}</h3>
      <div className={styles.imageContainer}>
        <img src={nominee.photoUrL} alt={nominee.title} />
      </div>
      <button
        className={styles.button}
        onClick={() =>
          selectItem(
            selected
              ? undefined
              : {
                  id: nominee.id,
                  name: nominee.title,
                },
            category
          )
        }
      >
        {selected ? "Unselect" : "Select"}
      </button>
    </li>
  );
};

export default Nominee;
