import React, { useEffect, useState } from "react";
import { SectionTitleModel } from "../SectionTitle/SectionTitle.model";
import Link from "next/link";
import styles from "./Header.module.scss";
import { HeaderModel } from "./Header.model";
import Switch from "../Switch/Switch";
import { useTheme } from "next-themes";

const Header = ({
    header,
    sections,
}: {
    header: HeaderModel;
    sections: SectionTitleModel[];
}) => {
    const BREAK_POINT = 300;

    const [headerStyle, setHeaderStyle] = useState(styles.header);
    const handleScroll = () => {
        const position = window["pageYOffset"];
        setHeaderStyle(
            position >= BREAK_POINT ? styles.headerSunk : styles.header
        );
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const { theme, setTheme } = useTheme();

    return (
        <header className={headerStyle}>
            <div className="container">
                <div className={styles.layout}>
                    <p className={styles.logo}>{header.info}</p>
                    <div className={styles.navigation}>
                        {sections.map((section, index) => (
                            <Link
                                key={index}
                                href={`#section-${section.name.toLowerCase()}`}
                                className={styles.link}
                            >
                                <a>
                                    <div className={styles.name}>
                                        {section.name}
                                    </div>
                                </a>
                            </Link>
                        ))}
                        <Switch
                            callback={() =>
                                setTheme("dark" === theme ? "light" : "dark")
                            }
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
