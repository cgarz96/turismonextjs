import { useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

export const DescubrirWrapper = styled.div`
  padding:10% 2% 2% 2%;
  background: #f1f1f1;
  height:100vh;
`;
 
const Descrubrir = () => {
 
    return ( 
        <>
            <Layout title="La Rioja Turismo - Descrubrir">
                <DescubrirWrapper>
                    <h1> Descubrir</h1>
                </DescubrirWrapper>
            </Layout>
        </>
     );
}
 
export default Descrubrir;