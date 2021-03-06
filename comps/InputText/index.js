import styled from "styled-components";
import React from "react";


const InputCont = styled.div`
    padding:10px;
`    

const InputText = styled.input.attrs(props => ({
    type:"text",

}))
`
width:${props=>props.width};
height:${props=>props.height};
color: black;
font-size: 18px;
border: 5px solid #0E73AA;
border-radius: 10px;
padding:10px;
`

const InputTextComp = ({
    width="400px",
    height="52px",
    placeholder="placeholder"

}) =>{

    return <InputCont>
        <InputText width={width} height={height} placeholder={placeholder}></InputText>
    </InputCont>
}

export default InputTextComp;