import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import Carousel from 'react-multi-carousel';
import {RiArrowRightSLine, RiArrowLeftSLine} from 'react-icons/ri'
import CarouselOffers from '../components/CarouselOffers'
import FilterSearch from '../components/FilterSearch'

export const MainWrapper = styled.div`
  padding: 0px 0px 0px 0px;
  box-sizing: border-box;
  
`;
export const IndexWrapper = styled.div`
  padding:10% 8% 2% 8%;
  background: white;
  heigth:120vh;
  min-height:120vh;
  @media (max-width: 600px) {
  padding:50% 3% 3% 3%;  
  }
`;
export const Titleh1 = styled.h1`
  font-family:'Open Sans', sans-serif;
`;
export const PortadaTurismo = styled.div`
background:#5f0710;
margin: 0 0 10vh 0;
padding:10px;
border-radius:5px;
width:100%;
position:relative;
height:40vh;
display:grid;
grid-template-columns:70% 15% 15%;
@media (max-width: 600px) {
  height:25vh;
  grid-template-columns:1fr;
  grid-template-rows:auto;
  }
`;
export const Title = styled.h2`
  font-family:'Open Sans', sans-serif;
  color: ${props => props.color ? props.color : '#a1a1a1'};
  font-size:${props => props.size ? props.size : '1.8rem'};
  font-weight: ${props => props.weight ? props.weight : '600'};
  position:relative;

`;
export const PTag = styled.p`
font-family:'Open Sans', sans-serif;
line-height: ${props => props.line ? props.line : '1.2'};
font-size: ${props => props.size ? props.size : '0.8rem'};
color: ${props => props.color ? props.color : '#333'};
font-weight: ${props => props.weight ? props.weight : '500'};
`;

export const Be = styled.span`
  font-size:1.4rem;
  color:#393939;
  font-weight:700;
`;
export const MoveteImg = styled.img`
width: 51%;
justify-self: center;
align-self: center;
@media (max-width: 600px) {
  width:78%; 
  margin: 0 14vw 0 0;
  }
`;
export const LineasImg = styled.img`
object-fit: contain;
height: 100%;
`;
export const LineasWrapper = styled.div`
position:absolute;
top:0;
height: 100%;
right:5vw;
`;


const Index = () => {
  //https://jonathangabriel.vercel.app/api/registrar

    const [redata, setRedata] = useState();
    const [packages, setPackages] = useState([])


    async function getPackages() 
      {
          let response = await fetch(`https://www.lrseguridad.com.ar/turismorest/public/api/paquetepublicos`, {
            headers: {
              'Accept': 'application/json',
                        'Content-Type': 'application/json'
             }
             });
        let data = await response.json()
        return data;
      }
     
  
    useEffect(() => {
      getPackages().then(resp => {
        setPackages(resp)
        console.log(resp, 'all paquetes')
      })
    }, [])

    return ( 
        <MainWrapper>
            <Layout>
                <IndexWrapper>
                    <PortadaTurismo>
                        <MoveteImg src="/movetev1.png"/>
                        <LineasWrapper>
                          <LineasImg src="/lineasgrande.png"/>
                        </LineasWrapper>

                    </PortadaTurismo>
                    <FilterSearch offers={packages}/>
                    <CarouselOffers offers={packages}/>
                    {/* <CarouselOffers offers={packages}/>
                    <CarouselOffers offers={packages}/> */}
                </IndexWrapper>
            </Layout>
        </MainWrapper>
     );
}
 
export default Index;