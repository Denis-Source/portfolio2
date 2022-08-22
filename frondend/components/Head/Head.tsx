import Head from "next/head";
import {HeadModel} from "./Head.model";
import getUrl from "../../api";

const HeadComponent = ({head}: { head: HeadModel }) => {
    return (
        <Head>
            <title>{head.title}</title>
            <meta name="description" content={head.description}/>
            <meta property="og:url"
                  content="https://new.zoloto.cx.ua"/>
            <meta property="og:type" content="article"/>
            <meta property="og:title" content={head.title}/>
            <meta property="og:description" content={head.description}/>
            <meta property="og:image"
                  content={getUrl(head.share_image)}/>
        </Head>
    );
};

export default HeadComponent;