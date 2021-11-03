import styled from 'styled-components';
import React from 'react';
import MyButton from '../Button';

const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items: center;
    background-image:url(Hero.png);
    background-repeat:no-repeat;
    background-size:cover;
    padding:10%;
`
const TitleCont = styled.div`
    flex:1;
`

const Title = styled.h3`
    color:#FFFFFF;
    font-size:96px;
    text-align:center;
`

const ButtonCont = styled.div`
    display:flex;
    justify-content:center;
`

const HeroImage = ({})=>{

    return<Container>

        <TitleCont>
            <Title>See how your actions have an impact</Title>
            <ButtonCont>
            <MyButton width="200px" height="65px" bgcolor="#FFC800" text="Explore Features"></MyButton>
            </ButtonCont>
        </TitleCont>
        
    </Container>    
  }
  
  export default HeroImage;