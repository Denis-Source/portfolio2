export interface AboutMeModel{
    name: string;
    title: string;
    subtitle: string;
    tabs: AboutMeTab[];
}

export interface AboutMeTab {
    name: string;
    icon_black: string;
    icon_white: string;
    image_black: string;
    image_white: string;
    body: string;
}