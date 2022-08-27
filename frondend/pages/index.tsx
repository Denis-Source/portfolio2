import type { GetStaticProps, NextPage } from "next";
import { HomepageProps } from "../pagesContent/HomePage/Homepage.props";
import { HeroModel } from "../components/Hero/Hero.model";
import getUrl from "../api";
import { AboutMeModel } from "../components/AboutMe/AboutMe.model";
import { ContactMeModel } from "../components/ContactMe/ContactMe.model";
import HomePage from "../pagesContent/HomePage/HomePage";
import {
    CategoryModel,
    MyProjectsModel,
    ProjectModel,
} from "../components/MyProjects/MyProjects.model";
import MainLayout from "../layouts/MainLayout/MainLayout";
import { HeaderModel } from "../components/Header/Header.model";
import { HeadModel } from "../components/Head/Head.model";

const Home: NextPage<HomepageProps> = ({
    head,
    header,
    footer,
    hero,
    aboutMe,
    myProjects,
    contactMe,
    categories,
    projects,
}: HomepageProps) => {
    return (
        <MainLayout
            head={head}
            header={header}
            sections={[hero, aboutMe, myProjects, contactMe]}
            footer={footer}
        >
            <HomePage
                hero={hero}
                aboutMe={aboutMe}
                myProjects={myProjects}
                contactMe={contactMe}
                categories={categories}
                projects={projects}
            />
        </MainLayout>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    let response = await fetch(getUrl("/homepage/hero"), {
        headers: {
            "Content-Type": "application/json",
        },
    });

    const hero: HeroModel = await response.json();

    response = await fetch(getUrl("/homepage/about"), {
        headers: {
            "Content-Type": "application/json",
        },
    });

    const aboutMe: AboutMeModel = await response.json();

    response = await fetch(getUrl("/homepage/project"), {
        headers: {
            "Content-Type": "application/json",
        },
    });

    const myProjects: MyProjectsModel = await response.json();

    response = await fetch(getUrl("/homepage/contact"), {
        headers: {
            "Content-Type": "application/json",
        },
    });

    const contactMe: ContactMeModel = await response.json();

    response = await fetch(getUrl("/project/category"), {
        headers: {
            "Content-Type": "application/json",
        },
    });

    const categories: CategoryModel[] = await response.json();

    response = await fetch(getUrl("/project"), {
        headers: {
            "Content-Type": "application/json",
        },
    });

    const projects: ProjectModel[] = await response.json();

    response = await fetch(getUrl("/header"), {
        headers: {
            "Content-Type": "application/json",
        },
    });

    const header: HeaderModel = await response.json();

    response = await fetch(getUrl("/footer"), {
        headers: {
            "Content-Type": "application/json",
        },
    });

    const footer = await response.json();

    response = await fetch(getUrl("/seo"), {
        headers: {
            "Content-Type": "application/json",
        },
    });

    const head: HeadModel = await response.json();

    return {
        props: {
            hero,
            aboutMe,
            myProjects,
            contactMe,
            categories,
            projects,
            header,
            footer,
            head,
        },
        revalidate: 1,
    };
};

export default Home;
