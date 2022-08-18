export interface MyProjectsModel {
    name: string;
    title: string;
    subtitle: string;
    projects: ProjectModel[]
}

export interface CategoryModel {
    id: number;
    name: string;
}

export interface ProjectModel {
    id: number;
    name: string;
    link?: string;
    github?: string;
    image: string;
    description: string;
    categories: CategoryModel[]
}