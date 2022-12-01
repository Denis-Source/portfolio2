import {AboutMeModel} from "./AboutMe.model";
import {SectionTitle} from "../SectionTitle/SectionTitle";
import styles from "./AboutMe.module.scss";
import AboutMeTab from "./AboutMeTab/AboutMeTab";
import AboutMeNav from "./AboutMeNav/AboutMeNav";
import {useState} from "react";
import {Fade} from "react-awesome-reveal";

const AboutMe = ({aboutMe}: { aboutMe: AboutMeModel }) => {
    let [selected, setSelected] = useState(aboutMe.tabs[0].name);
    const tab = aboutMe.tabs.filter((tab) => tab.name === selected)[0];
    return (
        <section>
            <div className={styles.spacer}></div>
            <Fade direction={"left"}>
                <div>
                    <SectionTitle section={aboutMe}/>
                    <div className={styles.nav}>
                        {aboutMe.tabs.map((tab, index) => (
                            <AboutMeNav
                                callBack={() => setSelected((selected = tab.name))}
                                active={tab.name === selected}
                                tab={tab}
                                key={index}
                            />
                        ))}
                    </div>
                    <div className={styles.tab}>
                        <AboutMeTab tab={tab} key={tab.name}/>
                    </div>
                </div>
            </Fade>
        </section>
    );
};

export default AboutMe;
