import { HeroModel } from "../../components/Hero/Hero.model";
import { AboutMeModel } from "../../components/AboutMe/AboutMe.model";
import { ContactMeModel } from "../../components/ContactMe/ContactMe.model";
import {
    CategoryModel,
    MyProjectsModel,
    ProjectModel,
} from "../../components/MyProjects/MyProjects.model";

export interface HomepageModel {
    hero: HeroModel;
    aboutMe: AboutMeModel;
    myProjects: MyProjectsModel;
    contactMe: ContactMeModel;
    categories: CategoryModel[];
    projects: ProjectModel[];
}
