import React from 'react';
import {ContactMeCard} from "../ContactMe.model";
import styles from "./ContactMeCard.module.scss"
import Link from "next/link";
import Image from "next/image"
import getUrl from "../../../api";
import {useTheme} from "next-themes";

const ContactMeCard = ({card}: { card: ContactMeCard }) => {
    const {theme} = useTheme()

    return (
        <Link href={card.link}>
            <a target="_blank">
                <div className={styles.layout}>
                    <div className={styles.image}>
                        <Image src={getUrl(theme === "light" ? card.icon_white : card.icon_black)} alt={card.title}
                               layout="fill"/>
                    </div>
                    <h3 className={styles.title}>{card.title}</h3>
                    <p className={styles.body}>{card.body}</p>
                </div>
            </a>
        </Link>
    );
};

export default ContactMeCard;