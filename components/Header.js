import React,{ useState, useContext } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';
import { Select } from '@zeit-ui/react'
import { FiShoppingBag, FiSun, FiInfo, FiMessageCircle } from "react-icons/fi";
import {GoCalendar} from 'react-icons/go'
import { MdDirectionsBike, MdHome} from 'react-icons/md'
import {RiAccountPinBoxLine, RiShoppingCart2Line} from 'react-icons/ri'
import useSWR, { mutate } from 'swr'
import {ContextState} from '../context/global'
import { Badge } from '@zeit-ui/react'


const Header = () => {

    const fetcher = url => fetch(url).then(r => r.json())
    const { data } = useSWR('/api/user', fetcher)

   const [itemCart, setItemCart] = useContext(ContextState)

   console.log(itemCart, 'cart')
 
    return (
        <React.Fragment>
        <Head>
            {/* <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" /> */}
            <link rel="stylesheet" type="text/css" href="/nprogress.css" />
            <link href="https://fonts.googleapis.com/css?family=Karla:400,700,700i&display=swap" rel="stylesheet"></link>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>


            <link  href="https://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.css" rel="stylesheet"/>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.js"></script>
      
        </Head>
        <HeaderWrapper>
            <LogoWrapper src="/logov3.png" />
            <MenuWrapper>
                <FirstMenu>
                <Link href="/">
                    <ATag><MdHome size="20px" /> Inicio </ATag>
                </Link>
                <Link href="/actividades">
                    <ATag> <MdDirectionsBike size="20px"/> Que hacer </ATag>
                </Link>
                <Link href="/reservas">
                    <ATag><GoCalendar size="18px"/>Reservá</ATag>
                </Link>
                <Link href="/descubrir">
                    <ATag><FiSun size="18px"/>Descubrila </ATag>
                </Link>
                <Link href="/informacion">
                    <ATag><FiInfo size="18px"/>Información </ATag>
                </Link>
                <Link href="/contacto">
                    <ATag><FiMessageCircle size="18px"/> Contacto </ATag>
                </Link>
                </FirstMenu>
                <SecondMenu>
                {!data ? (
                    <HeadUserInfo> ... </HeadUserInfo>
                ): data.auth && data.auth.token ? (<HeadUserInfo> {data.auth.user} </HeadUserInfo>) : (
                    <Link href="/ingresar">
                    <AuthWrapper>
                    
                        <ATag size="0.8rem"> Ingresar</ATag>
                        <RiAccountPinBoxLine size="20px" color="#4c4c4c"/>
                    
                    </AuthWrapper>
                </Link>
                )}
                <Link href="/checkout">
                <CarritoWrapper>
                    <ATag><RiShoppingCart2Line color="#333" size="22px"/> </ATag>
                <p> {itemCart?.length > 0 ? (<Badge size="mini">{itemCart.length}</Badge> ) : ''} </p>
                </CarritoWrapper>
                </Link>
            </SecondMenu>
            </MenuWrapper>
        </HeaderWrapper>
        </React.Fragment>
      );
}
 
export default Header;


export const HeaderWrapper = styled.div`
padding:0% 7% 0% 7%;
border-top:1px solid;
width:100%;
position:fixed;
box-sizing:border-box;
height:10vh;
background:white;
display:grid;
z-index:1200;
grid-template-columns:18% 1fr;
align-items:center;
&::after{
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
    height: 4px;
    background: linear-gradient(180deg,rgba(9,30,66,0.13) 0,rgba(9,30,66,0.13) 1px,rgba(9,30,66,0.08) 1px,rgba(9,30,66,0) 4px);
}
}
// -webkit-box-shadow: 0px 3px 5px -2px rgba(0,0,0,0.75);
// -moz-box-shadow: 0px 3px 5px -2px rgba(0,0,0,0.75);
// box-shadow: 0px 3px 5px -2px rgba(0,0,0,0.75);
@media (max-width: 600px) {
    grid-template-columns:1fr;
    grid-template-rows:1fr 1fr;
    grid-row-gap:1vh;
    height:auto;
    padding:2% 3% 2% 3%;
    }
`;
export const LogoWrapper = styled.img`
margin:0;
max-width:12vw;
@media (max-width: 600px) {
max-width:45vw;    
}
`;
export const MenuWrapper = styled.div`
display:grid;
grid-template-columns:60% 40%;
grid-column-gap:2vw;
align-items:center;
@media (max-width: 600px) {
grid-template-columns:1fr;

}
`;
export const ATag = styled.a`
display: grid;
justify-content: center;
color: #4c4c4c;
font-weight: 700;
justify-items: center;
font-size:${props => props.size ? props.size : '0.7rem'};
font-family:'Open Sans',sans-serif;
`;
export const CarritoWrapper = styled.div`
display: flex;
justify-content: space-around;
`;
export const AuthWrapper = styled.div`
display:flex;
justify-content:space-around;
`;
 export const PTag = styled.p`
font-family:'Open Sans', sans-serif;
font-size: ${props => props.size ? props.size : '0.8rem'};
color: ${props => props.color ? props.color : '#333'};
 `;
export const SecondMenu = styled.div`
justify-content:end;
display:grid;
grid-column-gap:2vw;
align-items:center;
grid-template-columns:6vw 7vw;
@media (max-width: 600px) {
display:none; 
}
`;
export const FirstMenu = styled.div`
display:flex;
justify-content:space-around;
`;
export const HeadUserInfo = styled.p`
font-family:'Open Sans', sans-serif;
color:#333;
font-weight:600;
margin: 0 -2vw 0 -3vw;
font-size:0.8rem;
`;
