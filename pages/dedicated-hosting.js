import Head from 'next/head';
// import DedHostingBanner from '@/components/DedHostingBanner';
// import DedHostingServics from '@/components/DedHostingServics';
// import DedHostingServTab from '@/components/DedHostingServTab';
import FullPage from '../fullpagecomp/DedHostingFullPage';


export default function Home() {
    return (
        <>
            <Head>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <title>Dedicated Hosting - Crystallite Digital</title>
                <link rel="icon" href="/images/logo.svg" sizes="32x32" title="logo" alt="favicon" />
                <meta name="author" content="Alvaro Trigo Lopez" />
                <meta name="description" content="fullPage full-screen navigation and sections control menu." />
                <meta name="keywords" content="fullpage,jquery,demo,screen,fullscreen,navigation,control arrows, dots" />
                <meta name="Resource-type" content="Document" />
            </Head>
            {/* <DedHostingBanner />
            <DedHostingServics />
            <DedHostingServTab /> */}
            <FullPage />
        </>
    )
}
