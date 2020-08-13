import {useEffect} from 'react'
import { ZEITUIProvider, CSSBaseline} from '@zeit-ui/react'
import '../css/global.css';
import NextNprogress from 'nextjs-progressbar';
import 'react-multi-carousel/lib/styles.css';
import 'antd/dist/antd.css'
import {ConfigProvider } from 'antd'
import esES from 'antd/lib/locale-provider/es_ES'
import { CartProvider } from "../context/global";
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
      <ZEITUIProvider>
          <CSSBaseline />
          <CartProvider>
            <ConfigProvider  locale={esES}>
                  <Component {...pageProps} />
            </ConfigProvider >
          </CartProvider>
      </ZEITUIProvider>
    )
  }

  export default MyApp 