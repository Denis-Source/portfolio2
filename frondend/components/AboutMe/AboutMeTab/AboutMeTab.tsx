import styles from "./AboutMeTab.module.scss"
import Image from "next/image";
import {AboutMeTab} from "../AboutMe.model";
import getUrl from "../../../api";
import {useTheme} from "next-themes";


const AboutMeTab = ({tab}: { tab: AboutMeTab }) => {
    const {theme} = useTheme();

    return (
        <div className={styles.layout}>
            <div className={styles.body} dangerouslySetInnerHTML={{__html: tab.body}}/>
            <div className={styles.image}>
                <Image src={getUrl(theme === "light" ? tab.image_white : tab.image_black)} layout="fill"
                       objectFit="cover" alt={tab.name} priority={true}/>
            </div>
        </div>
    );
};

export default AboutMeTab;