import Head from "next/head";
import {HeadModel} from "./Head.model";
import getUrl from "../../api";

const HeadComponent = ({head}: { head: HeadModel }) => {
    return (
        <Head>
            <title>{head.title}</title>
            <meta name="description" content={head.description}/>


            <meta property="og:title" content={head.title}/>
            <meta property="og:type" content="article"/>
            <meta property="og:image" content={getUrl(head.share_image)}/>
            <meta property="og:url" content="https://new.zoloto.cx.ua"/>
            <meta name="twitter:card" content={getUrl(head.share_image)}/>

            <meta property="og:description" content={head.description}/>
            <meta property="og:site_name" content={head.title}/>
            <meta name="twitter:image:alt" content={head.title}/>
        </Head>
    );
};

export default HeadComponent;