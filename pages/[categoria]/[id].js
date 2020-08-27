import { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import styled from 'styled-components';
import {useRouter} from 'next/router'
import Loader from 'react-loader-spinner'
import useSWR, { mutate } from 'swr'
import AddButton from '../../components/AddButton'

import CarouselOffers from '../../components/CarouselOffers'
import { Carousel } from 'antd';
 
const Paquete = ({data}) => {

    
  
    const routerfall = useRouter()

    const fetcher = url => fetch(url).then(r => r.json())
    const userdata = useSWR('/api/user', fetcher)

    console.log(userdata.data)

    const buyThisPackage = (idpaquete) => {
      console.log(idpaquete)
    }

    if (routerfall.isFallback) {
      return (
        <MainWrapper>
            <Layout>
                <ContentLoad>
                    <Loader
                    style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)'}} 
                    type="TailSpin"
                    color="#00BFFF"
                    height={50}
                    width={50}
            
                />
              </ContentLoad>
            </Layout>
        </MainWrapper>
      )
    }

 
    return ( 
        <MainWrapper>
            <Layout>
                <Content>
                  {console.log(data)}
                  {data.paquete.length > 0 ? (
                    <>
                    <PortadaPaquete src="/movete.gif"/>
                    <CardProduct>
                    <TitleProduct>{data.paquete[0].descripcion_ampliada}</TitleProduct>
                    <MainProduct>
                    <DetailProduct>
                    <DetailsTitle>Detalles</DetailsTitle>
                    <Details>Desde: {data.paquete[0].fecha_desde}</Details>
                    <Details>Hasta: {data.paquete[0].fecha_hasta}</Details>
                    <Details>Precio: ${data.paquete[0].precio}</Details>
                    

                    </DetailProduct>
                    <div className="fotorama" data-width="400" data-height="400">
                    { data.paths.map(item => (  
                    <PathsProduct src={`https://www.lrseguridad.com.ar/turismo/1.0/${item.path} `}>
                    </PathsProduct> ))}
                    </div> 
                    </MainProduct>
                    <TableDetails>
                    <TableHead>Tipo de producto</TableHead>
                    <TableHead>Localidad</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead>Empresa</TableHead>
                    <TableHead>Correo</TableHead>
                    <TableBody>{data.paquete[0].tipo_producto}</TableBody>
                    <TableBody>{data.paquete[0].producto_localidad} </TableBody>
                    <TableBody>{data.paquete[0].paqueteturistico_estado}</TableBody>
                    <TableBody>{data.paquete[0].empresa_servicio_domicilo}</TableBody>
                    <TableBody>{data.paquete[0].empresa_servicio_email}</TableBody>

    

                    </TableDetails>
                    <Description>
                    <DetailsTitle>Descripcion detallada</DetailsTitle>
                    <p>{data.paquete[0].descripcion_detallada}</p>
                    </Description>
                    <FooterProduct>
                       {!userdata.data ? (
                     ''
                   ): userdata.data.auth ? userdata.data.auth.token ? (
                    <AddButton idproducto={data.paquete[0].id_producto}/>
                      ) : '' : ''}
                      <div style={{paddingLeft:'70%'}}>     <ContactButton>Contactar</ContactButton></div>
                    </FooterProduct>
                    </CardProduct>

                    <CarouselOffers offers={data}/>
                    <h1> </h1>

                  
                     
                   
                    </>
                  ): (
                    <h1> No se encontraron resultados para este paquete.</h1>
                  )}
                </Content>
                
            </Layout>
        </MainWrapper>
     );
}
 
export default Paquete;




export async function getStaticPaths() {
    const res = await fetch(`https://www.lrseguridad.com.ar/turismorest/public/api/paquetepublicos`, {
        headers: {
          'Accept': 'application/json',
                    'Content-Type': 'application/json'
         }
         });
    const data = await res.json();
    console.log(data, 'da')
    return {
        paths: data.map(({tipo_producto, id_producto}) => ({
          params: {categoria: tipo_producto, id: id_producto.toString()}
        })),
        fallback: true
    }
}




export async function getStaticProps({ params }) {
const res = await fetch(`https://www.lrseguridad.com.ar/turismorest/public/api/paquetes-publicos/${params.id}`, {
    headers: {
      'Accept': 'application/json',
                'Content-Type': 'application/json'
     }
     });
const data = await res.json();
console.log(res, 'el res')
return{
   props: {data},
   unstable_revalidate: 10
}
}
export const PortadaPaquete = styled.img`
width:100%;
height:30vh;
`;
export const MainWrapper = styled.div`
  padding: 0px 0px 0px 0px;
  box-sizing: border-box;
  min-height:100vh;
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

export const Content = styled.div`
  min-height:100vh;
  padding:8% 7% 0 7%;
`;
export const ContentLoad = styled.div`
  position:relative;
  min-height:70vh;
`;

export const CardProduct = styled.div`
  width: 100%;
  padding: 20px 10px 20px 10px;
  background-color: #e6e6e6;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 20px;
  grid-gap: 5px; 
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
`;

export const TitleProduct = styled.h3`
background: rgb(226, 48, 48);
border-radius: 8px;
color: white; 
padding-left:5px;


`;


export const MainProduct = styled.div`
display: grid;
grid-template-columns: 2fr 1fr; 
`;
export const PathsProduct = styled.img`
@media only screen and (max-width: 600px) {
  
    grid-column: 1/-1;
  
}
`;

export const DetailProduct = styled.div`

`;

export const DetailsTitle = styled.h4`
color: rgb(97, 97, 97);
`;

export const Details = styled.h4`
color: rgb(226, 48, 48);

`;

export const TableDetails = styled.div`
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-gap: 3px;
background-color: white;
border-radius: 5px;
border-top: 10px solid red;
`;

export const TableHead = styled.div`
background-color: rgb(223, 222, 223);
padding:5px;
`;

export const TableBody = styled.div`

`;

export const Description = styled.div`
display:grid;
grid-template-columns: 1fr;
background:white;
`;

export const FooterProduct = styled.div`
display:grid;
grid-template-columns: 3fr 1fr;
@media only screen and (max-width: 600px) {
  grid-template-columns: 1fr;
  grid-column: 1/-1;
  padding-left: 0%;

}
`;

export const ContactButton = styled.button`
border:0px; border-radius: 20px; background-color: rgb(226, 48, 48); color: white;padding:10px;
@media only screen and (max-width: 600px) {
  
  grid-column: 1/-1;
  padding-left: 0%;
  width: 100%;
  background:blue;

}
`;