import Head from 'next/head';
import FullPage from '../fullpagecomp/TranscriptionFullPage';

export default function Transcription() {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="Resource-type" content="Document" />
                {/* FavIcon */}
                <link rel="icon" href="/images/logo.svg" sizes="32x32" title="logo" alt="favicon" />
                {/* Meta Tags */}
                <title>Transcription - Crystallite Pvt Ltd</title>
                <meta name="description" content="How We Meet Enterprise Needs We'll take care of business." />
                <meta name="keywords" content="Digital Marketing, Seo, Smm, IT Services, Dedicated Hosting" />
                <meta name="robots" content="noindex, nofollow, noarchive, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                {/* Og Tags */}
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Transcription - Crystallite Pvt Ltd" />
                <meta property="og:description" content="How We Meet Enterprise Needs We'll take care of business." />
                <meta property="og:url" content="https://crystallite-digital.vercel.app/transcription" />
                <meta property="og:site_name" content="Transcription - Crystallite Pvt Ltd" />
                {/* canonical */}
                <link rel="canonical" href="https://crystallite-digital.vercel.app/transcription" />
            </Head>
            <FullPage />
        </>
    )
}
