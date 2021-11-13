import styled from 'styled-components';
import { Image, Menu, Button, Item} from 'semantic-ui-react';
import MyButton from '../Button';
import {Router, useRouter} from 'next/router';
import Subhead from "../SubheadText";

import React from 'react';


const NavCont = styled.div`
    display:flex;
    min-width:200px;
    height:130px;
    background-color:white;
    box-shadow:0px 3px 30px grey; 
    justify-content:space-between;
    align-items:center;
    flex-wrap:wrap;
    flex:1;
    padding:50px;
`

const LogoCont = styled.div`
    padding-left:30px;
    flex:1;
`

const TextCont = styled.div`
    color:#598B2C;
    font-weight:bold;
`

const NavItems = styled.a`
    font-size:24px;
    padding:10px;
`

const GreetingCont = styled.div`
    display:flex;
    justify-content:flex-end;
`

const RightCol = styled.div`
    display:flex;
    flex-direction:column;
`
const ItemsDiv = styled.div`    
    display:flex;
`

const SubHeader = styled.h2`
  font-size:24px;
  color:#598B2C;
`;



const UserNav = ({
    router = useRouter(),
    display_name="Username"

}) =>{


    return <NavCont>

        <LogoCont>
            <Image src="/binibinlogo.png" alt="BiniBin Logo" width={204} height={52} 
            onClick={()=>router.push("/")}
            />
        </LogoCont>

        <RightCol>

        <GreetingCont>
            <SubHeader>{display_name}</SubHeader>
        </GreetingCont>

        <ItemsDiv>
            <NavItems>
                <TextCont onClick={()=>router.push("/dashboard")}>Dashboard</TextCont>
            </NavItems>
            <NavItems>
                <TextCont onClick={()=>router.push("/education")}>Educate</TextCont>
            </NavItems>
            <NavItems>
                <TextCont onClick={()=>router.push("/inputdata")} >Input</TextCont>
            </NavItems>
            <NavItems>
                <TextCont onClick={()=>router.push("/pastentries")} >Entries</TextCont>
            </NavItems>
            <NavItems>
                <TextCont onClick={()=>router.push("/graphs")} >Graphs</TextCont>
            </NavItems>
        </ItemsDiv>

        </RightCol>

    </NavCont>
    
}

export default UserNav;