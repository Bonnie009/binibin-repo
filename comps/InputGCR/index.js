import styled from 'styled-components';
import BoldText from '../BoldText';
import Image from 'next/image';
import EntryItem from '../EntryItem';
import InputCounter from '../InputCounter';
import EduImage from '../EduImage';
import { useState } from 'react';
  
const PageCont = styled.div`

`

const ItemCont = styled.form`
  display:flex;
  flex-direction:column;
  margin:10px;
  padding:10px;
  background-color:#ccc;
`;

//----------------------TOP ROW CONTAINER-----------------
const TopCont = styled.div`
  display:flex;

`

const Description = styled.p`
  margin-top:10px;
  max-width:180px;
  word-wrap:wrap;
`;

const Number = styled.input`
  display:flex;
  min-height:35px;
  max-width:90px;
`;

const Select = styled.select`
  display:flex;
  min-height:35px;
  max-width:90px;
`;

const TextBox = styled.textarea`
  min-height:60px;
`;

const Submit = styled.input`
  min-height:35px;
  margin-top:10px;
`;

// -----------------CART COMP----------------------------
const CartCont = styled.div`
  display:flex;
  flex-wrap:wrap;
  flex:1;
  border: 5px solid #003274;
  border-radius:10px;
  flex-direction:column;
`

const TypeCont = styled.div`
  display:flex;
  margin:10px;
  padding:5px;
  align-items:center;
  
`

//----------------------TYPE OF GARBAGE COUNTER---------------
const SquareCont = styled.div`
  min-width:30px;
  max-width:30px;
  min-height:30px;
  max-height:30px;
  border-radius:5px;
  background-color:${props=>props.color};
`
  
const ItemName = styled.p`
  font-weight:bold;
  margin:10px 5px 10px 10px;
`;
  
const ItemQuantity = styled.p`
  font-weight:bold;
`;

//-------------------------Notes Input------------------------
const TextG = styled.p`
  
`

const TextCont = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  width:100px;
  word-break: break-all;
`

const TopCart = styled.div`
  display:flex; 
  justify-content:space-around;
  flex:1;
`
const BotCart = styled.div`
  display:flex;
  width:100%;
  justify-content:space-between;
  flex:1;
  padding:10px;
`


const myLoader = ({src}) => {
  return `${src}`
}

const IGCR = ({
  item_name="Garbage",
  waste_type="garbage",
  note="Example: two snack wrappers and a straw",
  unit="g",
  src="garbagebag.png",
  alt="garbage bag",
  optional="optional",
  color="black",
  item_count="0",
}) => {

function clickGarbage(){
  //Gets the selected option
  var g = document.getElementById("garbageSelect").value;
  var resultG = parseFloat(g);

  // var totalNumber = localStorage.getItem(resultG);
  

  // //add 1 to existing
  // var addNumber = totalNumber+ resultG;

  // //set new total
  // localStorage.setItem(resultG, addNumber)

  //TO DISPLAY IN HTML
  let sumG = resultG ;
  document.getElementById("garbageCount").innerHTML = sumG;


//To display text 

  var getGarbageText = document.getElementById("garbageText").value; 
  
  localStorage.setItem('getGarbageText', getGarbageText)
  
  var existing = localStorage.getItem('garbageText');

  var data = existing ? existing + " " + getGarbageText + ", ": ' ';

  localStorage.setItem('garbageText', data);

  document.getElementById("TextGarbage").innerHTML = data;


} // END OF clickGarbage function


//-------Click compost function-----------

function clickCompost(){
  var c = document.getElementById("compostSelect").value;
  var resultC = parseFloat(c);
  document.getElementById("compostCount").innerHTML = resultC;

  var compostText = document.getElementById("compostText").value; 
  document.getElementById("TextCompost").innerHTML = compostText;

  //To display text

  var getCompostText = document.getElementById("compostText").value; 
  
  localStorage.setItem('getCompostText', getCompostText)
  
  var existing = localStorage.getItem('compostText');

  var data = existing ? existing + " "  + getCompostText + ", ": ' ';

  localStorage.setItem('compostText', data);

  document.getElementById("TextCompost").innerHTML = data;


} //END OF clickCompost function

//---------CLICK RECYCLE FUNCTION-----------

function clickRecycle(){
  var r = document.getElementById("recycleSelect").value;
  var resultR = parseFloat(r);
  document.getElementById("recycleCount").innerHTML = resultR;

  var recycleText = document.getElementById("recycleText").value; 
  document.getElementById("TextRecycle").innerHTML = recycleText;

  //To display text

  var getRecycleText = document.getElementById("recycleText").value; 
  
  localStorage.setItem('getRecycleText', getRecycleText)
  
  var existing = localStorage.getItem('recycleText');

  var data = existing ? existing + " " + getRecycleText + ", ": ' ' ;

  localStorage.setItem('recycleText', data);

  document.getElementById("TextRecycle").innerHTML = data;


} //END OF clickRecycle function

  return <PageCont>

{/* ----------------------GARBAGE------------------------- */}

    <TopCont>

  <ItemCont>
    <BoldText text={item_name}></BoldText>
    <Image loader={myLoader} src={'/garbagebag.png'} width={50} height={150} alt={alt}/>
    <Description>How many pieces of {waste_type} are you throwing out?</Description>
    <Select id="garbageSelect">
      <option value="0">0</option>
      <option value="1">1</option>
      <option value="2">2</option>
    </Select>
    <Description>Write a note to remember this entry ({optional})</Description>
    <TextBox id="garbageText" placeholder={note}></TextBox>
    <Submit type="button" value="Add Entry" onClick={clickGarbage}></Submit>
  </ItemCont>

{/* ----------------------COMPOST------------------------- */}

  <ItemCont>
    <BoldText text={"Compost"}></BoldText>
    <Image loader={myLoader} src={'/tea-bag.png'} width={50} height={150} alt={alt}/>
    <Description>How many pieces of {waste_type} are you throwing out?</Description>
    <Select id="compostSelect">
      <option value="0">0</option>
      <option value="1">1</option>
      <option value="2">2</option>
    </Select>
    <Description>Write a note to remember this entry ({optional})</Description>
    <TextBox id="compostText" placeholder={note}></TextBox>
    <Submit type="button" value="Add Entry" onClick={clickCompost}></Submit>
  </ItemCont>

{/* ----------------------RECYCLE------------------------- */}

  <ItemCont>
    <BoldText text="Recycle"></BoldText>
    <Image loader={myLoader} src={'/newspaper.png'} width={50} height={150} alt={alt}/>
    <Description>How many pieces of {waste_type} are you throwing out?</Description>
    <Select id="recycleSelect">
      <option value="0">0</option>
      <option value="1">1</option>
      <option value="2">2</option>
    </Select>
    <Description>Write a note to remember this entry ({optional})</Description>
    <TextBox id="recycleText" placeholder={note}></TextBox>
    <Submit type="button" value="Add Entry" onClick={clickRecycle}></Submit>
  </ItemCont>

  </TopCont>

{/* ----------------------CART COMPONENT------------------------- */}

  <CartCont>  

    <TopCart>

  <TypeCont>
    <SquareCont color={color}/>
    <ItemName>{item_name} &times;</ItemName>
    <ItemQuantity id="garbageCount"></ItemQuantity>
  </TypeCont>

  <TypeCont>
    <SquareCont color={"#3A7A1C"}/>
    <ItemName>{"Compost"} &times;</ItemName>
    <ItemQuantity id="compostCount"></ItemQuantity>
  </TypeCont>

  <TypeCont>
    <SquareCont color={"#3C64B1"}/>
    <ItemName>{"Recycle"} &times;</ItemName>
    <ItemQuantity id="recycleCount"></ItemQuantity>
  </TypeCont>

  </TopCart>

  <BotCart>

    <TextCont>
      <TextG id="TextGarbage"></TextG>
    </TextCont>

    <TextCont>
      <TextG id="TextCompost"></TextG>
    </TextCont>

    <TextCont>
      <TextG id="TextRecycle"></TextG>
    </TextCont>
    
  </BotCart>

  </CartCont>


  </PageCont>
}

export default IGCR;