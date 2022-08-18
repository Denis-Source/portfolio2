import styles from "./AboutMeNav.module.scss"
import Image from "next/image";
import {AboutMeTab} from "../AboutMe.model";
import getUrl from "../../../api";


const AboutMeNav = ({tab, active, callBack}: { tab: AboutMeTab, active: boolean, callBack: any }) => {
    return (
        <button className={active? styles.layoutActive: styles.layoutInactive} onClick={callBack}>
            <div className={active? styles.imageActive: styles.imageInactive}>
                <Image layout={"fill"} objectFit="cover" src={getUrl(tab.icon)} alt={tab.name}/>
            </div>
            <h3 className={styles.title}>{tab.name}</h3>
        </button>
    );
};

export default AboutMeNav;