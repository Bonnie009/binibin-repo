import styled from "styled-components";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import UserNav from '../comps/UserNav';
import Header from '../comps/HeaderText';
import Footer from '../comps/footer';
import EntryItem from '../comps/EntryItem';
import EntryDate from '../comps/EntryDate';
import EntryLegend from '../comps/EntryLegend';
import FooterComp from "../comps/footer";
// import EntryList from '../comps/EntryList';

const PageCont = styled.div`
  display: flex;
  justify-content: center;
  min-height:100vh;
`;

const HeaderCont = styled.div`
  display: flex;
  justify-content: center;
`;

const FooterCont = styled.div`
  display:flex;
  flex:1;
  align-items:flex-end;
  background-color:pink;
`;

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const AllDaysList = styled.div`
  margin: 10px;
`;

const EntryDayList = styled.div`
  display: flex;
  margin: 5px 20px 0px 20px;
  border: 3px solid #95afba;
  justify-content: space-between;
  border-radius:10px;
`;

const ListSection = styled.div`
  display: flex;
  margin: 10px;
  align-items: center;
  overflow: auto;
  flex-wrap: wrap;
`;

const SideSection = styled.div`
  display: flex;
  margin: 10px;
`;

const EntryEdit = styled.a``;

const fakeData = [
  {
    entry_id: 1,
    entry_date: "November 3",
    item_name: "Tin Can (200 mL)",
    item_count: 5,
    unit: "units",
    waste_type: "recycling",
  },
  {
    entry_id: 2,
    entry_date: "November 2",
    item_name: "Garbage",
    item_count: 500,
    unit: "g",
    waste_type: "garbage",
  },
  {
    entry_id: 3,
    entry_date: "November 2",
    item_name: "Compost",
    item_count: 50,
    unit: "g",
    waste_type: "compost",
  },
  {
    entry_id: 4,
    entry_date: "November 1",
    item_name: "Juice Box (100mL)",
    item_count: 2,
    unit: "units",
    waste_type: "recycling",
  },
  {
    entry_id: 5,
    entry_date: "November 3",
    item_name: "Garbage",
    item_count: 10,
    unit: "g",
    waste_type: "garbage",
  },
];
//"entry_id": 1,
// "item_name": "Can (200 mL)",
// "item_count": 5,
// "unit": "unit",
// "waste_type": "recycling",

export default function Home() {
  const [entries, setEntries] = useState(null);
  // const axios = require('axios');

  useEffect(() => {
    const GetEntries = async () => {
      // const result = await axios.get("https://ghibliapi.herokuapp.com/films")
      // const result = await axios.get("https://binibin-server.herokuapp.com/api/entries")
      await axios
        .get("https://binibin-server.herokuapp.com/api/entries")
        .then((resp) => {
          console.log(resp.data);
          setEntries(resp.data);
        })
        .catch((err) => {
          console.log(err);
        });
      // console.log(result);
    };
    GetEntries();
    // sort all entries by date
    // create a new div (EntryDayList) for each new day
    // it there are entries with the same date, put them under the same div
  }, []);
  return (
    <>
      <UserNav></UserNav>
      <HeaderCont>
        <Header text="Waste Tracked for November"></Header>
      </HeaderCont>
      <PageCont>
        <Cont>
          {entries? 
          entries.map((o, i) => (
            <AllDaysList key={i}>
              {/* <EntryDate entry_date={o.entry_date} /> 
                we changed the json from database to return month and day instead of entry_date
              */}
              <EntryDate entry_date={(o.month+'/'+o.day)} />
              <EntryDayList>
                <ListSection>
                  <EntryItem
                    entry_id={o.entry_id}
                    item_name={o.item_name}
                    item_count={o.item_count}
                    unit={o.unit}
                    waste_type={o.waste_type}
                  />
                  {/* <EntryItem entry_id={o.entry_id} item_name={o.item_name} item_count={o.item_count} unit={o.unit} waste_type={o.waste_type}/>
                      <EntryItem entry_id={o.entry_id} item_name={o.item_name} item_count={o.item_count} unit={o.unit} waste_type={o.waste_type}/>
                      <EntryItem entry_id={o.entry_id} item_name={o.item_name} item_count={o.item_count} unit={o.unit} waste_type={o.waste_type}/>
                      <EntryItem entry_id={o.entry_id} item_name={o.item_name} item_count={o.item_count} unit={o.unit} waste_type={o.waste_type}/>
                      <EntryItem entry_id={o.entry_id} item_name={o.item_name} item_count={o.item_count} unit={o.unit} waste_type={o.waste_type}/>
                      <EntryItem entry_id={o.entry_id} item_name={o.item_name} item_count={o.item_count} unit={o.unit} waste_type={o.waste_type}/>
                      <EntryItem entry_id={o.entry_id} item_name={o.item_name} item_count={o.item_count} unit={o.unit} waste_type={o.waste_type}/>
                      <EntryItem entry_id={o.entry_id} item_name={o.item_name} item_count={o.item_count} unit={o.unit} waste_type={o.waste_type}/>
                      <EntryItem entry_id={o.entry_id} item_name={o.item_name} item_count={o.item_count} unit={o.unit} waste_type={o.waste_type}/> */}
                </ListSection>
                <SideSection>
                  {/* <EntryEdit>Edit</EntryEdit> */}
                </SideSection>
              </EntryDayList>
            </AllDaysList>
          )): <p>Make your first entry!</p>}
        </Cont>
        <EntryLegend />
      </PageCont>
      <FooterCont>
        <FooterComp></FooterComp>
      </FooterCont>
    </>
  );
}