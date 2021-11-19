import styled from 'styled-components';
import React from 'react';
import { useState, useEffect } from 'react';


const ItemCont = styled.div`
  display:flex;
  margin:10px;
  padding:5px;
  align-items:center;

`;

// const Square = styled.div`
//   min-width:30px;
//   max-width:30px;
//   min-height:30px;
//   max-height:30px;
//   border-radius:5px;
//   background-color:${({color}) =>
//     color === "garbage" && "#000" ||
//     color === "compost" && "#598B2C" ||
//     color === "recycling" && "#2C5489"
//   };
// `;

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

const EntryItem = ({
  waste_type="recycling",
  item_name="Garbage",
  item_count="0",
  unit="u",
  color="black"
}) => {
  return <ItemCont>
    <SquareCont color={color}/>
    {/* <Square color={waste_type}></Square> */}
    <ItemName>{item_name}</ItemName>
    <ItemQuantity>&times; {item_count}</ItemQuantity>
  </ItemCont>
}

export default EntryItem;