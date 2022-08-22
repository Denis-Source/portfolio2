import {HeroModel} from "../../components/Hero/Hero.model";
import {AboutMeModel} from "../../components/AboutMe/AboutMe.model";
import {ContactMeModel} from "../../components/ContactMe/ContactMe.model";
import {CategoryModel, MyProjectsModel, ProjectModel} from "../../components/MyProjects/MyProjects.model";
import {FooterModel} from "../../components/Footer/Footer.model";
import {HeaderModel} from "../../components/Header/Header.model";
import {HeadModel} from "../../components/Head/Head.model";

export interface HomepageProps {
    hero: HeroModel;
    aboutMe: AboutMeModel;
    myProjects: MyProjectsModel;
    contactMe: ContactMeModel;
    categories: CategoryModel[];
    projects: ProjectModel[];
    header: HeaderModel;
    footer: FooterModel;
    head: HeadModel;
}