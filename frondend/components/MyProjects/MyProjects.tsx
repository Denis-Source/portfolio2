import React, { useState } from "react";
import {
    CategoryModel,
    MyProjectsModel,
    ProjectModel,
} from "./MyProjects.model";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import styles from "./MyProjects.module.scss";
import MyProjectsCategory from "./MyProjectsCategory/MyProjectsCategory";
import MyProject from "./MyProject/MyProject";
import { AnimatePresence, motion } from "framer-motion";

const MyProjects = ({
    myProject,
    categories,
    projects,
}: {
    myProject: MyProjectsModel;
    categories: CategoryModel[];
    projects: ProjectModel[];
}) => {
    const all = {
        name: "All",
        id: 0,
    };
    const [selectedCategory, setSelectedCategory] =
        useState<CategoryModel>(all);

    const filteredProjects =
        selectedCategory.name === all.name
            ? projects
            : projects.filter((projects) =>
                  projects.categories.some(
                      (category) => category.name === selectedCategory.name
                  )
              );

    return (
        <section>
            <SectionTitle section={myProject} />
            <div className={styles.layout}>
                <div className={styles.categories}>
                    <MyProjectsCategory
                        active={selectedCategory.name === all.name}
                        callback={() => setSelectedCategory(all)}
                        category={all}
                    />
                    {categories.map((category, index) => (
                        <MyProjectsCategory
                            key={index}
                            active={selectedCategory.name === category.name}
                            category={category}
                            callback={() => setSelectedCategory(category)}
                        />
                    ))}
                </div>
                <motion.div className={styles.projects} layout>
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <MyProject project={project} key={project.id} />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default MyProjects;
