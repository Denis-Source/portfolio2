import React from 'react';
import {ProjectModel} from "../MyProjects.model";
import styles from "./MyProject.module.scss"
import Image from "next/image";
import {motion} from "framer-motion"
import github from "/public/images/github.png"
import link from "/public/images/link.png"
import Link from "next/link";

const MyProject = ({project}: { project: ProjectModel }) => {
    return (
        <motion.div
            layout
            animate={{opacity: 1}}
            initial={{opacity: 0}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}
            className={styles.layout}>
            <div className={styles.imageWrapper}>
                <div className={styles.image}>
                    <Image src={project.image} objectFit="cover" layout="fill" alt={project.name} objectPosition="50%"/>
                </div>
            </div>
            <div className={styles.infoWrapper}>
                <div className={styles.info}>
                    <div className={styles.text}>
                        <h3 className={styles.name}>
                            {project.name}
                        </h3>
                        <p className={styles.description}>
                            {project.description}
                        </p>
                    </div>
                    <div className={styles.icons}>
                        {project.github &&
                            <Link href={project.github}>
                                <a target="_blank">
                                    <div className={styles.icon}>
                                        <Image src={github} layout="fill" alt={"github"}/>
                                    </div>
                                </a>
                            </Link>
                        }
                        {project.link &&
                            <Link href={project.link}>
                                <a target="_blank">
                                    <div className={styles.icon}>
                                        <Image src={link} layout="fill" alt={"link"}/>
                                    </div>
                                </a>
                            </Link>
                        }
                    </div>
                </div>

            </div>
        </motion.div>

    );
};

export default MyProject;