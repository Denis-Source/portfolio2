import React from 'react';
import {HeroModel} from "./Hero.model";
import styles from "./Hero.module.scss"
import Image from "next/image";
import getUrl from "../../api";
import {SectionTitleModel} from "../SectionTitle/SectionTitle.model";
import {useRouter} from "next/router";

const Hero = ({hero, linked_section}: { hero: HeroModel, linked_section: SectionTitleModel }) => {
    const router = useRouter();
    return (
        <section className={styles.wrapper} id={`section-${hero.name.toLowerCase()}`}>
            <div className={styles.image}>
                <Image src={getUrl(hero.background)} alt="hero" layout={"fill"} objectFit={"cover"} priority={true}/>
            </div>
            <div className={styles.layout}>
                <h1 className={styles.title}>{hero.title}</h1>
                <h2 className={styles.subtitle}>{hero.subtitle}</h2>
                <button onClick={() => router.push(`#section-${linked_section.name.toLowerCase()}`)} className={styles.button}>{hero.button}</button>
            </div>
        </section>
    );
};
export default Hero;