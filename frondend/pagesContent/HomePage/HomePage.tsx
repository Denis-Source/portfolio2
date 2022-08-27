import Hero from "../../components/Hero/Hero";
import AboutMe from "../../components/AboutMe/AboutMe";
import MyProjects from "../../components/MyProjects/MyProjects";
import ContactMe from "../../components/ContactMe/ContactMe";
import { HomepageModel } from "./HomePage.model";

const HomePage = ({
    hero,
    aboutMe,
    myProjects,
    contactMe,
    categories,
    projects,
}: HomepageModel) => {
    return (
        <div>
            <Hero hero={hero} linked_section={aboutMe} />
            <div className="container">
                <AboutMe aboutMe={aboutMe} />
                <MyProjects
                    myProject={myProjects}
                    categories={categories}
                    projects={projects}
                />
                <ContactMe contactMe={contactMe} />
            </div>
        </div>
    );
};

export default HomePage;
