export interface ContactMeModel {
    name: string;
    title: string;
    subtitle: string;
    cards: ContactMeCard[];
}

export interface ContactMeCard {
    title: string;
    link: string;
    icon: string;
    body: string;
}