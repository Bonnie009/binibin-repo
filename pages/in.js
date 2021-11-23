import styled from 'styled-components';
import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';

// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';

import GuestNavBar from '../comps/GuestNavBar';
import Header from '../comps/HeaderText';
import Footer from '../comps/footer';
import Button from '../comps/Button';
// import IGCR from '../comps/InputGCR';
import EntryItem from '../comps/EntryItem';
import { getFontDefinitionFromManifest } from 'next/dist/server/font-utils';
import UserNav from '../comps/UserNav';
import FooterComp from '../comps/footer';
import InputCounter from '../comps/InputCounter';
import CartItem from '../comps/Cart';
// import Subhead from '../SubheadText';
import In from '../comps/In';

const Cont = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  min-height: 100vh;
`;

const TopRow = styled.div`
  display:flex;
  width:100vw;
`;

const FooterCont = styled.div`
  display:flex;
  flex:1;
  align-items:flex-end;
  width:100vw;
`;
  
const SubCont = styled.div`
  display:flex;
`;

const CartCont = styled.div`
  max-height:220px;
  margin:30px 20px 0 0;
  padding:10px 0 0 10px;
  border: 3px solid #95AFBA;
  border-radius:10px;
  display:flex;
  justify-content:space-around;
`;

const ItemCont = styled.div`
  display:flex;
  margin:10px;
  padding:5px;
  align-items:center;
`;

const TypeCont = styled.div`
  display:flex;

`


//-------Click garbage function-----------

function clickGarbage(){

  //NUMBER OF GARBAGE ITEMS

    //get the selected number of garbage option and turn it into a float
    var g = parseFloat(document.getElementById("garbageSelect").value);

    if (typeof(Storage) !== "undefined"){
      //if there is something already stored in garcount,
      if (localStorage.garcount) {
        //add the selected option to the current garcount value in localstorage
        localStorage.garcount = parseFloat(localStorage.garcount) + g;
      } else {
        //if there were no garbage entries, set the garcount to zero
        localStorage.garcount = g;
      }
    }
    //display the garbage count in HTML
    document.getElementById("garbageCount").innerHTML = localStorage.garcount;

  //GARBAGE NOTES

    //get the newest inputted note for garbage
    var garinput = document.getElementById("garbageText").value;

    var addGarbageNote = function (gartext, garinput, delimiter) {
      //get the existing notes stored in gartext
      var existing = localStorage.getItem(gartext);
      //add the newest inputted note to the existing notes
      var data = existing ? existing + delimiter + garinput : garinput;
      //save the new note
      localStorage.setItem(gartext, data);
    }

    addGarbageNote("gartext", garinput, ", ")

    //display the garbage note in HTML
    document.getElementById("textGarbage").innerHTML = localStorage.gartext;
    // textGarbage = localStorage.gartext;

  } // End of clickGarbage function


//-------Click compost function-----------

function clickCompost(){

  //NUMBER OF COMPOST ITEMS

    //get the selected number of compost option and turn it into a float
    var c = parseFloat(document.getElementById("compostSelect").value);

    if (typeof(Storage) !== "undefined"){
      //if there is something already stored in comcount,
      if (localStorage.comcount) {
        //add the selected option to the current comcount value in localstorage
        localStorage.comcount = parseFloat(localStorage.comcount) + c;
      } else {
        //if there were no compost entries, set the comcount to zero
        localStorage.comcount = c;
      }
    }
    //display the compost count in HTML
    document.getElementById("compostCount").innerHTML = localStorage.comcount;

  //COMPOST NOTES

    //get the newest inputted note for compost
    var cominput = document.getElementById("compostText").value;

    var addCompostNote = function (comtext, cominput, delimiter) {
      //get the existing notes stored in comtext
      var existing = localStorage.getItem(comtext);
      //add the newest inputted note to the existing notes
      var data = existing ? existing + delimiter + cominput : cominput;
      //save the new note
      localStorage.setItem(comtext, data);
    }

    addCompostNote("comtext", cominput, ", ")

    //display the compost note in HTML
    document.getElementById("textCompost").innerHTML = localStorage.comtext;

} // End of clickCompost function

//---------CLICK RECYCLE FUNCTION-----------

function clickRecycle(){

  //NUMBER OF RECYCLABLE ITEMS

    //get the selected number of recycle option and turn it into a float
    var r = parseFloat(document.getElementById("recycleSelect").value);

    if (typeof(Storage) !== "undefined"){
      //if there is something already stored in reccount,
      if (localStorage.reccount) {
        //add the selected option to the current reccount value in localstorage
        localStorage.reccount = parseFloat(localStorage.reccount) + r;
      } else {
        //if there were no recycle entries, set the reccount to zero
        localStorage.reccount = r;
      }
    }
    //display the recycle count in HTML
    document.getElementById("recycleCount").innerHTML = localStorage.reccount;

  //RECYCLABLE NOTES

    //get the newest inputted note for recycle
    var recinput = document.getElementById("recycleText").value;

    var addRecycleNote = function (rectext, recinput, delimiter) {
      //get the existing notes stored in rectext
      var existing = localStorage.getItem(rectext);
      //add the newest inputted note to the existing notes
      var data = existing ? existing + delimiter + recinput : recinput;
      //save the new note
      localStorage.setItem(rectext, data);
    }

    addRecycleNote("rectext", recinput, ", ")

    //display the recbage note in HTML
    document.getElementById("textRecycle").innerHTML = localStorage.rectext;
} // End of clickRecycle function

export default function Home() {

  return(
    <Cont>
      <TopRow>
        <UserNav></UserNav>
      </TopRow>

      <SubCont>
        {/* <IGCR/> */}
        <In onClick={clickGarbage}></In>
        <In onClick={clickCompost} item_name="Compost" waste_type="compost" note="Example: cherry stem and seed, and apple core" bgcolor="#E2EED7"></In>
        <In onClick={clickRecycle} item_name="Recycle" waste_type="recycle" note="Example: yougurt container" bgcolor="#DFEAEF"></In>
      </SubCont>

      <CartCont>
        <CartItem itemtext={textGarbage}></CartItem>
        <CartItem text="Compost" itemtext={textCompost}></CartItem>
        <CartItem text="Recycle" itemtext={textRecycle}></CartItem>
      </CartCont>

      <FooterCont>
        <FooterComp></FooterComp>
      </FooterCont>

    </Cont>
  )
}