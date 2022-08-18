export interface AboutMeModel{
    name: string;
    title: string;
    subtitle: string;
    tabs: AboutMeTab[];
}

export interface AboutMeTab {
    name: string;
    icon: string;
    image: string;
    body: string;
}