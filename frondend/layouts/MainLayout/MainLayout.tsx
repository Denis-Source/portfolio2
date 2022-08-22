import React from 'react';
import {FooterModel} from "../../components/Footer/Footer.model";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import {SectionTitleModel} from "../../components/SectionTitle/SectionTitle.model";
import {HeaderModel} from "../../components/Header/Header.model";
import HeadComponent from "../../components/Head/Head"
import {HeadModel} from "../../components/Head/Head.model";


const MainLayout = ({head, children, header, sections, footer}: {head: HeadModel, children: React.ReactNode, header: HeaderModel, sections: SectionTitleModel[], footer: FooterModel}) => {
    return (
        <>
            <HeadComponent head={head}/>
        <main>
            <Header header={header} sections={sections}/>
            {children}
            <Footer footer={footer}/>
        </main>
        </>
    );
};

export default MainLayout;