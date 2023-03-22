import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/globals.css'
import Header from '@/components/Header'
// import Contact from '@/components/Contact'  

export default function App({ Component, pageProps }) {
  return <>
    <Header />
    <Component {...pageProps} />
    {/* <Contact /> */}
  </>
}

