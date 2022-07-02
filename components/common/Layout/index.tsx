import Head from "next/head";
import {useRouter} from "next/router";

export type LayoutProps = {
    children: React.ReactNode;
    title?: string;
    description?: string;
    type?: string;
};

export default function Layout({children, title, description, type}: LayoutProps) {
    const router = useRouter()
    const fullTitle = title ? `${title} | Esida` : "Esida";
    const url = process.env.NEXT_PUBLIC_URL || "";
    const fullUrl = url + router.pathname;

    return (
        <div className="bg-black text-white min-h-screen">
            <Head>
                <title>{fullTitle}</title>
                <meta name="description" content={description}/>
                <meta property="og:title" content={fullTitle}/>
                <meta property="og:description" content={description}/>
                <meta property="og:type" content={type || "website"}/>
                <meta property="og:url" content={fullUrl}/>
                <meta property="og:image" content={`${url}/og.png`}/>
                <meta property="og:image:width" content="1200"/>
                <meta property="og:image:height" content="630"/>
                <meta property="og:image:type" content="image/png"/>
                <meta property="og:image:alt" content="Esida"/>
                <meta property="og:site_name" content="Esida - инструменты для Аризоны"/>
                <meta property="og:locale" content="ru_RU"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className="p-5 min-h-full">{children}</main>
        </div>
    )
}