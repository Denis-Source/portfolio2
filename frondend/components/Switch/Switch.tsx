import React from "react";
import styles from "./Switch.module.scss";

const Switch = ({ callback }: any) => {
    return (
        <label className={styles.switch}>
            <input type="checkbox" onClick={callback} />
            <span className={styles.slider}></span>
        </label>
    );
};

export default Switch;
