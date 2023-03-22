import Head from 'next/head';
// import HomeBanner from '@/components/HomeBanner';
// import Journey from '@/components/Journey';
// import Services from '@/components/Services';
// import Career from '@/components/Career';
// import Contact from '@/components/Contact'
import FullPage from '../fullpagecomp/HomeFullPage';

export default function Home() {

  // const sections = [<HomeBanner />, <Journey />, <Services />, <Career />, <Contact />];
  // const scrollDuration = 7000;

  return (
    <>
      <Head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>Home - Crystallite Digital</title>
        <link rel="icon" href="/images/logo.svg" sizes="32x32" title="logo" alt="favicon" />
        <meta name="author" content="Alvaro Trigo Lopez" />
        <meta name="description" content="fullPage full-screen navigation and sections control menu." />
        <meta name="keywords" content="fullpage,jquery,demo,screen,fullscreen,navigation,control arrows, dots" />
        <meta name="Resource-type" content="Document" />
      </Head>
      {/* <FullPageScroll sections={sections} scrollDuration={scrollDuration} /> */}
      <FullPage />
    </>
  )
}

