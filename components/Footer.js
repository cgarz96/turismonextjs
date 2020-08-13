import { useState } from 'react';
import styled from 'styled-components';

export const FooterWrapper = styled.div`
  padding: 4% 8% 4% 8%;
  height:30vh;
  background:white;
  width:100%;
  position:relative;
`;
export const LogoImg = styled.img`
  width:70%;
`;
export const PTag = styled.p`
  font-family:'Open Sans', sans-serif;
  color:white;
  font-weight:600;
  font-size:0.8rem; 
`;
export const LaRiojaWrapper = styled.img`
  position:absolute;
  bottom:0;
  right:0;
  width:32vw;
  @media (max-width: 600px) {
    width:75vw;
  }
`;
export const DoscientosWrapper = styled.img`
position:absolute;
bottom:0;
right:32%;
width:8vw;
@media (max-width: 600px) {
  left:5vw;
  width:24vw;
}
`;
export const MinisterioWrapper = styled.img`
width: 28vw;
left: 8vw;
bottom: 3vw;
@media (max-width: 600px) {
  width:60vw;
}
`;
const Footer = () => {
 
    return (  
        <>
          <FooterWrapper>
            <MinisterioWrapper src="/pie_logo1.png"/>
            <DoscientosWrapper src="/pie_logo2.png"/>
            <LaRiojaWrapper src="/pie_logo3.png"/> 
            
            
          </FooterWrapper>
        </>
    );
}
 
export default Footer;