import React from "react";
import { CategoryModel } from "../MyProjects.model";
import styles from "./MyProjectsCategory.module.scss";

const MyProjectsCategory = ({
    category,
    callback,
    active,
}: {
    category: CategoryModel;
    callback: any;
    active: boolean;
}) => {
    return (
        <button
            onClick={callback}
            className={active ? styles.button : styles.buttonInactive}
        >
            {category.name}
        </button>
    );
};

export default MyProjectsCategory;
