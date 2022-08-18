import {SectionTitleModel} from "./SectionTitle.model";
import styles from "./SectionTitle.module.scss"

export const SectionTitle = ({section}:{section: SectionTitleModel}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.link} id={`section-${section.name.toLowerCase()}`}></div>
            <h2 className={styles.title} >{section.title}</h2>
            <p className={styles.subtitle} >{section.subtitle}</p>
        </div>
    );
};