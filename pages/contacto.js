import { useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

export const MainWrapper = styled.div`
  padding: 0px 0px 0px 0px;
  box-sizing: border-box;
  min-heigth:120vh;
`;
export const ContactoWrapper = styled.div`
  padding:10% 2% 2% 2%;
  background: #f1f1f1;
`;
 
 
const Contacto = () => {
 
    return ( 
        <MainWrapper>
            <Layout title="La Rioja Turismo - Contacto">
                <ContactoWrapper>
                    <h1> Contacto</h1>
                </ContactoWrapper>
            </Layout>
        </MainWrapper>
     );
}
 
export default Contacto;