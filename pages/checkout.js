import { useState, useEffect, useContext } from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import {useRouter} from 'next/router'
import Loader from 'react-loader-spinner'
import useSWR, { mutate } from 'swr'
import { ContextState } from '../context/global';
 
const Tienda = () => {

    const [itemCart, setItemCart] = useContext(ContextState)

    
    return ( 
        <MainWrapper>
            <Layout>
                <Content>
                {itemCart?.length > 0 ? itemCart.map(item => (<p> {item}</p>)): 'No ha seleccionado productos.'}
                </Content>
            </Layout>
        </MainWrapper>
     );
}
 
export default Tienda;

export const MainWrapper = styled.div`
  padding: 0px 0px 0px 0px;
  box-sizing: border-box;
  min-height:100vh;
`;
export const Content = styled.div`
min-height:100vh;
padding:5% 8% 0 8%;
`;