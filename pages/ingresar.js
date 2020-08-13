import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import Router,{useRouter} from 'next/router'
import Loader from 'react-loader-spinner'
import Cookies from 'universal-cookie';
 
const Ingresar = () => {

    const cookies = new Cookies();

    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loguser = async () => {
        var formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);
        setIsLoading(true)
        let response = await fetch(`https://www.lrseguridad.com.ar/turismorest/public/api/login`, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
                        
             },
             body: formData
             });
        let data = await response.json()
        if(data.token){
            cookies.set('auth', {token: data.token, user: email}, { path: '/' });
            Router.push('/')
        }
        setIsLoading(false)
    }   
 
    return ( 
        <MainWrapper>
            <Layout>
                <Content>
                    <LoginWrapper>
                        <p> Ingreso de usuario</p>
                        <label>Email:</label>
                        <input placeholder="Ingrese un email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                        <label>Contraseña:</label>
                        <input  placeholder="Ingrese su contraseña" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                        <button onClick={loguser}> 
                        {isLoading ? (
                            <Loader
                            style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)'}} 
                            type="TailSpin"
                            color="#00BFFF"
                            height={20}
                            width={20}
                    
                        />
                        ): 'Ingresar'}
                        </button>
                    </LoginWrapper>
                </Content>
            </Layout>
        </MainWrapper>
     );
}
 
export default Ingresar;

export const MainWrapper = styled.div`
  padding: 0px 0px 0px 0px;
  box-sizing: border-box;
  min-height:100vh;
`;

export const Content = styled.div`
height:90vh;
position:relative;
`;
export const LoginWrapper = styled.div`
width:30vw;
padding:25px;
height:initial;
display:grid;
border-radius:5px;
border:1px solid #c5c5c5;
position:absolute;
top:57%;
left:50%;
transform:translate(-50%, -50%);
p{
    font-family:'Karla', sans-serif;
    font-weight:600;
}
input{
    font-family:'Karla', sans-serif;
    font-weight:600;
    padding:4px 6px 4px 10px;
    color:#333;
    outline:none;
    &::placeholder{
        color: #717171;
        font-weight:500;
    }
}
label{
    font-family:'Karla', sans-serif;
    font-weight:500;
}
button{
    position:relative;
    padding:6px;
    height:6vh;
    border-radius:5px;
    background:#602b2a;
    font-family:'Karla', sans-serif;
    font-weight:600;
    border:none;
    width:12vw;
    color:white;
    justify-self:center;
    margin:3% 0 0 0;
    cursor:pointer;
}
`;