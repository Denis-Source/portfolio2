import Head from "next/head";
import {HeadModel} from "./Head.model";

const HeadComponent = ({head}: { head: HeadModel }) => {
    return (
        <Head>
            <title>{head.title}</title>
            <meta itemProp="description" content={head.description}/>
            <meta itemProp="image" content={head.share_image}/>
        </Head>
    );
};

export default HeadComponent;