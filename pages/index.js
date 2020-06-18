import { useState } from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';

export const IndexWrapper = styled.div`
  padding: 0px 0px 0px 0px;
`;
export const Titleh1 = styled.h1`
  font-family:'Roboto', sans-serif;
`;
 
const Index = () => {
 
    return ( 
        <IndexWrapper>
            <Layout>

                <Titleh1> Dani</Titleh1>

            </Layout>
        </IndexWrapper>
     );
}
 
export default Index;