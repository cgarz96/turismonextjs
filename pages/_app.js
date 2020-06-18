import {useEffect} from 'react'
import { ZeitProvider, CssBaseline} from '@zeit-ui/react'
import '../css/global.css';
import 'react-multi-carousel/lib/styles.css';
// import { CartProvider } from "../context/global";
// import { LogProvider } from "../context/globalog";
import Router from 'next/router'
// import * as gtag from '../lib/gtag'


function MyApp({ Component, pageProps }) {

//   useEffect(() => {
//     const handleRouteChange = (url) => {
//       gtag.pageview(url)
//     }
//     Router.events.on('routeChangeComplete', handleRouteChange)
//     return () => {
//       Router.events.off('routeChangeComplete', handleRouteChange)
//     }
    
//   }, [])
  
    return (
      <ZeitProvider>
          <CssBaseline/>
                <Component {...pageProps} />
      </ZeitProvider>
    )
  }

  export default MyApp 