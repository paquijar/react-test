import Category from "../Category/Category";
import styles from "./styles.module.css";
import { useState } from "react";

const Ballot = ({ items }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <Category key={item.id} category={item} />
      ))}
    </ul>
  );
};

export default Ballot;
