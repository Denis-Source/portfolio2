import styles from "./AboutMeTab.module.scss"
import Image from "next/image";
import {AboutMeTab} from "../AboutMe.model";
import getUrl from "../../../api";


const AboutMeTab = ({tab}: { tab: AboutMeTab }) => {
    return (
        <div className={styles.layout}>
            <div className={styles.body} dangerouslySetInnerHTML={{__html: tab.body}}/>
            <div className={styles.image}>
                <Image src={getUrl(tab.image)} layout="fill" objectFit="cover" alt={tab.name} priority={true}/>
            </div>
        </div>
    );
};

export default AboutMeTab;