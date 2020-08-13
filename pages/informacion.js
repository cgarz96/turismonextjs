import { useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

export const MainWrapper = styled.div`
  padding: 0px 0px 0px 0px;
  box-sizing: border-box;
  min-heigth:120vh;
`;
export const InfoWrapper = styled.div`
  padding:10% 2% 2% 2%;
  background: #f1f1f1;
`;
 
const Informacion = () => {
 
    return ( 
        <MainWrapper>
            <Layout title="La Rioja Turismo - Informacion">
                <InfoWrapper>
                    <h1> Dani</h1>
                </InfoWrapper>
            </Layout>
        </MainWrapper>
     );
}
 
export default Informacion;