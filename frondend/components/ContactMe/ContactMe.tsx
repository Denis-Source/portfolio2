import React from "react";
import {ContactMeModel} from "./ContactMe.model";
import {SectionTitle} from "../SectionTitle/SectionTitle";
import styles from "./ContactMe.module.scss";
import ContactMeCard from "./ContactMeCard/ContactMeCard";
import ContactForm from "../ContactForm/ContactForm";
import {Fade} from "react-awesome-reveal";

const ContactMe = ({contactMe}: { contactMe: ContactMeModel }) => {
    return (
        <section>
            <Fade direction={"left"}>
                <div>
                    <SectionTitle section={contactMe}/>
                    <div className={styles.layout}>
                        <div className={styles.cards}>
                            {contactMe.cards.map((card, index) => (
                                <ContactMeCard card={card} key={index}/>
                            ))}
                        </div>
                        <ContactForm/>
                    </div>
                </div>
            </Fade>
        </section>
    );
};

export default ContactMe;
