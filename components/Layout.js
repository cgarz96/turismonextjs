import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children, title = '', isAuth = false}) => {
    return(
    <div>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0,minimum-scale=1.0" />
            <meta charSet="utf-8" />
            <meta name="description" content="Comprá tu paquete de viajes La Rioja"/>
            <meta property="og:title" content="TurismoWebApp" />
            <meta property="og:site_name" content="Turismo Web App" />
            <meta
                property="og:description"
                content="Compra paquetes especializados de viaje"
            />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@turismoapp" />
            <meta property="og:image" content="turismoapp.jpg" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,400;1,500&display=swap" rel="stylesheet"/>
            <title>{title}</title>
        </Head>
        <Header />
        {children}
        <Footer />
    </div>
    )
}

export default Layout;