import { useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

export const MainWrapper = styled.div`
  padding: 0px 0px 0px 0px;
  box-sizing: border-box;
  min-heigth:120vh;
`;
export const ActividadesWrapper = styled.div`
  padding:10% 2% 2% 2%;
  background: #f1f1f1;
  height:100vh;
`;
 
const Actividades = () => {
 
    return ( 
        <>
            <Layout title="La Rioja Turismo - Actividades">
                <ActividadesWrapper>
                    <h1> Actividades</h1>
                </ActividadesWrapper>
            </Layout>
        </>
     );
}
 
export default Actividades;