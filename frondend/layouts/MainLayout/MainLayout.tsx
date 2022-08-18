import React from 'react';
import {FooterModel} from "../../components/Footer/Footer.model";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import {SectionTitleModel} from "../../components/SectionTitle/SectionTitle.model";
import {HeaderModel} from "../../components/Header/Header.model";


const MainLayout = ({children, header, sections, footer}: { children: React.ReactNode, header: HeaderModel, sections: SectionTitleModel[], footer: FooterModel}) => {
    return (
        <main>
            <Header header={header} sections={sections}/>
            {children}
            <Footer footer={footer}/>
        </main>
    );
};

export default MainLayout;