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
import IGCR from '../comps/InputGCR';
import EntryItem from '../comps/EntryItem';
import { getFontDefinitionFromManifest } from 'next/dist/server/font-utils';
import UserNav from '../comps/UserNav';
import FooterComp from '../comps/footer';
import InputCounter from '../comps/InputCounter';

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
  display:flex;
  border: 5px solid #003274;
  border-radius:10px;
`

const TypeCont = styled.div`
  display:flex;

`

export default function Home() {
  // const [added, setAdded] = useState(null);
  // useEffect(() => {
  //   const GetAdded = async () => {
  //     await axios
  //       .get("https://binibin-server.herokuapp.com/api/entries")
  //       .then((resp) => {
  //         console.log(resp.data);
  //         setAdded(resp.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };
  //   GetAdded();
  // }, []);
  return(
    <Cont>
      <TopRow>
        <UserNav></UserNav>
      </TopRow>
    <SubCont>
      {/* <Popup
        trigger={<button className="button"> View Added Entries </button>}
        modal
        nested
      >
        {close => (
          <div className="modal">
            <Header text="Added Entries"></Header>
            <div>
              {added?
              added.map((o,i)=>(
                <div key={i}>
                  <EntryItem
                    entry_id={o.entry_id}
                    item_name={o.item_name}
                    item_count={o.item_count}
                    unit={o.unit}
                    waste_type={o.waste_type}
                  />
                </div>
              )): <p>No added entries. Come back after you add your first entry!</p>}
            </div>
            <div className="actions">
              <button onClick={() => {close();}}>Close</button>
              <button className="close" onClick={close}>&times;</button>
              <button>Submit Entries</button>
            </div>
          </div>
        )}
      </Popup> */}
    </SubCont>
    <SubCont>
      <IGCR/>
    </SubCont>

      {/* <CartCont>

        
        <TypeCont>
          <EntryItem></EntryItem>
        </TypeCont>

        <TypeCont>
          <EntryItem></EntryItem>
        </TypeCont>

        <TypeCont>
          <EntryItem></EntryItem>
        </TypeCont>


      </CartCont> */}

    <FooterCont>
      <FooterComp></FooterComp>
    </FooterCont>

  </Cont>
  )
}