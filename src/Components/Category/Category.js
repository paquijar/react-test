import Nominee from "../Nominee/Nominee";
import styles from "./styles.module.css";

const Category = ({ category }) => {
  return (
    <li>
      <h2 className={styles.title}>{category.title}</h2>
      <ul className={styles.category}>
        {category.items.map((item) => (
          <Nominee key={item.id} nominee={item} />
        ))}
      </ul>
    </li>
  );
};

export default Category;
