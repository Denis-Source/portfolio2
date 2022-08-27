import styles from "./AboutMeNav.module.scss";
import Image from "next/image";
import { AboutMeTab } from "../AboutMe.model";
import getUrl from "../../../api";
import { useTheme } from "next-themes";

const AboutMeNav = ({
    tab,
    active,
    callBack,
}: {
    tab: AboutMeTab;
    active: boolean;
    callBack: any;
}) => {
    const { theme } = useTheme();

    return (
        <button
            className={active ? styles.layoutActive : styles.layoutInactive}
            onClick={callBack}
        >
            <div className={active ? styles.imageActive : styles.imageInactive}>
                <Image
                    layout={"fill"}
                    objectFit="cover"
                    src={getUrl(
                        theme === "light" ? tab.icon_white : tab.icon_black
                    )}
                    alt={tab.name}
                />
            </div>
            <h3 className={styles.title}>{tab.name}</h3>
        </button>
    );
};

export default AboutMeNav;
