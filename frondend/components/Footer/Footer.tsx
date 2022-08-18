import React from 'react';
import {FooterModel} from "./Footer.model"
import styles from "./Footer.module.scss";

const Footer = ({footer}: { footer: FooterModel }) => {
    return (
        <footer className={styles.footer} dangerouslySetInnerHTML={{__html: footer.info} }>
        </footer>
    );
};

export default Footer;