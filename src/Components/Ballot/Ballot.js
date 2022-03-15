import Category from "../Category/Category";
import styles from "./styles.module.css";
import { useState } from "react";
import Modal from "../Modal/Modal";

const Ballot = ({ items }) => {
  const [selectedItems, setSelectedItems] = useState({});
  const [showModal, setShowModal] = useState(false);

  const addSelectedItem = (item, category) => {
    setSelectedItems((prevItems) => {
      const newItems = { ...prevItems };
      if (!item.id) {
        delete newItems[category.id];
      } else {
        newItems[category.id] = { ...item, categoryName: category.title };
      }
      return newItems;
    });
  };

  const closeModal = () => {
    setSelectedItems({});
    setShowModal(false);
  };

  const hasSelectedItems = Object.keys(selectedItems).length !== 0;

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
      {showModal && <Modal selection={selectedItems} close={closeModal} />}
      {hasSelectedItems && (
        <button onClick={() => setShowModal(true)} className={styles.button}>
          SUBMIT BALLOT
        </button>
      )}
    </>
  );
};

export default Ballot;
