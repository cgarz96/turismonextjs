import { useState, useContext, useEffect, useRef } from 'react';
import { ContextState } from "../context/global";
import { TiPlus, TiMinus } from "react-icons/ti";
import { RiLoader4Line } from "react-icons/ri";
import {addItem, removeItem} from '../lib/cartlib'
import Loader from 'react-loader-spinner'
import styled from 'styled-components'

    export const AddButtonWrapper = styled.button`
    background: ${props => props.inCart == true ? "none" : '#fea621'};
    border: ${props => props.inCart == true ? "1px solid #fea621" : 'none'};
    width:190px;
    height:40px;
    border-radius:5px;
    display:grid;
    align-items:center;
    position:relative;
    cursor: pointer;
    `;
    export const FalseBtnWrapper = styled.button`
    background: transparent;
    border:1px solid #ffffff12;
    width:190px;
    height:40px;
    border-radius:5px;
    display:grid;
    align-items:center;
    position:relative;
    cursor: pointer;
    `;

    export const AddTitle = styled.p`
      color: #0b121a;
      font-weight:900;
      font-size:14px;
      display:grid;
      padding: 0px 0px 0px 14px;
      width:180px;
      grid-template-columns: 0px 160px;
      align-items:center;
      font-family:'Karla',sans-serif;
    `;
    export const RemoveTitle = styled.p`
      color: #fea621;
      font-weight:900;
      font-size:14px;
      display:grid;
      padding: 0px 0px 0px 14px;
      width:180px;
      grid-template-columns: 0px 160px;
      align-items:center;
      font-family:'Karla',sans-serif;
    `;

    export const LoaderBlock = styled.div`
      position:absolute;
      width:100%;
      height:100%;
      border-radius:3px;
      background: ${props => props.inCart == true ? "#0b121a" : '#01ff85'};
      top:0;
      left:0;
      animation: animate 2s ease-in-out 1 both;
    `;
 
const AddButton = ({idproducto}) => {

    
    const btnref = useRef(null);
    const [itemCart, setItemCart] = useContext(ContextState);
    const [inCart, setInCart] = useState(false);
    const [loading, setLoading] = useState(false);
    const [loadingwrap, setLoadingWrap] = useState(true)

    console.log(itemCart, 'temcart')

    useEffect(()=> {
        const ides = JSON.parse(localStorage.getItem('st_cart'));
        ides.map(item => {
            if(item == idproducto){
                setInCart(true)
            }
        })
        setLoadingWrap(false)
    }, [])


    const changeCart = () => {
        setLoading(true)
        btnref.current.disabled = true;
        btnref.current.style.opacity = "0.8";
        setTimeout(()=> {
            if(inCart){/*chequeamos si ya esta en el carrito entonces removemos */
                const allprod = removeItem(idproducto)
                setItemCart(allprod)
                setInCart(false)
                setLoading(false)
                btnref.current.disabled = false;
                btnref.current.style.opacity = "1";
                return
            }
            const allprod = addItem(idproducto);
            setItemCart(allprod)
            setInCart(true)
            btnref.current.disabled = false;
            setLoading(false)
            btnref.current.style.opacity = "1";
        }, 500)
        
    }

    console.log(itemCart)
    if(loadingwrap) {
        return(
            <FalseBtnWrapper>
                <Loader
                    style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)'}} 
                    type="TailSpin"
                    color="#00BFFF"
                    height={20}
                    width={20}
                />
            </FalseBtnWrapper>
        )
    }else{
        return(
            <AddButtonWrapper ref={btnref} onClick={changeCart} inCart={inCart} title={idproducto} >
                {loading ? (
                    <Loader
                    style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)'}} 
                    type="TailSpin"
                    color="#00BFFF"
                    height={20}
                    width={20}
                />
                ): (inCart ? <RemoveTitle> <TiMinus  size="16px" color="#fea621"/> Remover producto</RemoveTitle> : <AddTitle> <TiPlus size="16px" color="black"/> Agregar producto</AddTitle>)
                }
            </AddButtonWrapper>
        )
    }
}
 
export default AddButton;