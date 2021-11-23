import styled from 'styled-components';
import React from 'react';
import Image from 'next/image';
import BoldText from '../BoldText';

const ItemCont = styled.form`
  display:flex;
  flex-direction:column;
  margin:10px;
  padding:10px;
  background-color:${props=>props.colors};
  align-items:center;
`;

const myLoader = ({src}) => {
  return `${src}`
}

const In = ({
  item_name="Garbage",
  waste_type="garbage",
  note="Example: two snack wrappers and a straw",
  alt="garbage bag",
  bgcolor="#E9E9E9",
  onClick=""
}) => {
  return <ItemCont color={bgcolor}>
    <BoldText text={item_name}></BoldText>
    <Image loader={myLoader} src={'/garbagebag.png'} width={50} height={150} alt={alt}/>
    <Description>How many pieces of {waste_type} are you throwing out?</Description>
    <Select id="garbageSelect">
      <option value="0">0</option>
      <option value="1">1</option>
      <option value="2">2</option>
    </Select>
    <Description>Write a note to remember this entry</Description>
    <TextBox id="garbageText" placeholder={note}></TextBox>
    <Submit type="button" value="Add Entry" onClick={onClick}></Submit>
  </ItemCont>
}

export default In;