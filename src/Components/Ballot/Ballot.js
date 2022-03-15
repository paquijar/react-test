import Category from "../Category/Category";
import styles from "./styles.module.css";
import { useState } from "react";
import Modal from "../Modal/Modal";

const Ballot = ({ items }) => {
  const [selectedItems, setSelectedItems] = useState({});
  const [showModal, setShowModal] = useState(false);
  const addSelectedItem = (itemId, categoryId) => {
    setSelectedItems({ ...selectedItems, [categoryId]: itemId });
  };
  return (
    <>
      <ul className={styles.list}>
        {items.map((item) => (
          <Category
            key={item.id}
            category={item}
            selectedItem={selectedItems[item.id]}
            selectItem={addSelectedItem}
          />
        ))}
      </ul>
      {showModal && <Modal />}
      <button className={styles.button}>SUBMIT BALLOT</button>
    </>
  );
};

export default Ballot;
