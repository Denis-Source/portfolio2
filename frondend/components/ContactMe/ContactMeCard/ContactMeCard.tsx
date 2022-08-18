import React from 'react';
import {ContactMeCard} from "../ContactMe.model";
import styles from "./ContactMeCard.module.scss"
import Link from "next/link";
import Image from "next/image"
import getUrl from "../../../api";

const ContactMeCard = ({card}: { card: ContactMeCard }) => {
    return (
        <Link href={card.link}>
            <a target="_blank">
                <div className={styles.layout}>
                    <div className={styles.image}>
                        <Image src={getUrl(card.icon)} alt={card.title} layout="fill"/>
                    </div>
                    <h3 className={styles.title}>{card.title}</h3>
                    <p className={styles.body}>{card.body}</p>
                </div>
            </a>
        </Link>
    );
};

export default ContactMeCard;