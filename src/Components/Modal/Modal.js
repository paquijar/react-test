import React, { useEffect } from "react";
import styles from "./styles.module.css";

const Modal = ({ selection, close }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <>
      <div className={styles.modal}>
        <button className={styles.close} onClick={close}>
          X
        </button>
        <h2 className={styles.margin}>Success</h2>
        <p className={styles.margin}>
          You successfuly voted for the following categories:
        </p>
        {Object.keys(selection).map((categoryId) => (
          <p key={categoryId} className={styles.item}>
            <span> {selection[categoryId].categoryName}: </span>
            {selection[categoryId].name}
          </p>
        ))}
      </div>
      <div onClick={close} className={styles.overlay}></div>
    </>
  );
};

export default Modal;
