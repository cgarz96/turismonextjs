import { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import styled from 'styled-components';
import {useRouter} from 'next/router'
import Loader from 'react-loader-spinner'
import useSWR, { mutate } from 'swr'
import AddButton from '../../components/AddButton'
 
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
                  {data.length > 0 ? (
                    <>
                    <PortadaPaquete src="/viñedo.jpg"/>
                    <h1> {data[0].producto_localidad} </h1>
                    <p>{data[0].descripcion_ampliada}</p>
                    <p>{data[0].descripcion_detallada}</p>
                    <img src={`https://www.lrseguridad.com.ar/turismo/1.0/${data[0].path}`}/>
                    <p>{data[0].empresa_servicio_domicilo}</p>
                    <p>{data[0].empresa_servicio_email}</p>
                    <p>desde:{data[0].fecha_desde}</p>
                    <p>hasta:{data[0].fecha_hasta}</p>
                    <p>Estado:{data[0].paqueteturistico_estado}</p>
                    <p>Precio:{data[0].precio}</p>
                    <p>Tipo:{data[0].tipo_producto}</p>
                   {!userdata.data ? (
                     ''
                   ): userdata.data.auth ? userdata.data.auth.token ? (
                     <AddButton idproducto={data[0].id_producto}/>
                   ) : '' : ''}
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
const res = await fetch(`https://www.lrseguridad.com.ar/turismorest/public/api/paquetepublicos/${params.id}`, {
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