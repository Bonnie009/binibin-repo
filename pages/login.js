import styled from "styled-components";
import React, { useState, useEffect } from "react";
import axios from "axios";

import GuestNavBar from "../comps/GuestNavBar";
import Header from "../comps/HeaderText";
import Footer from "../comps/footer";
import Image from "next/image";
import LoginForm from "../comps/LoginForm";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "../comps/ProtectedRoute";
import Dashboard from '../pages/dashboard';


const PageCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  min-height: 100vh;
  background-color: #eef9ff;
`;

const TopRow = styled.div`
  display: flex;
  flex: 1;
`;
const MidCont = styled.div`
  display: flex;
  margin: 200 50 200 50px;
`;

const LeftCont = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: flex-end;
  margin-right: 50px;
`;

const RightCont = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const FooterCont = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-end;
`;

//Fake Data
const fakeData = [
  {
    account_id: 1,
    username: "gates1",
    email: "gates@gmail.com1",
    school_id: 1,
    admin_account_id: null,
    display_name: "Principal Gates1",
    is_admin: true,
  },
  {
    account_id: 2,
    username: "gates",
    email: "gates@gmail.com",
    school_id: 1,
    admin_account_id: null,
    display_name: "Principal Gates2",
    is_admin: true,
  },
];

export default function Login() {
  // const [user, setUser] = useState(fakeData);

  // useEffect(() => {
  //   const GetUser = async () => {
  //     const resp = await axios.get(
  //       "https://binibin-server.herokuapp.com/auth/login"
  //     );
  //     // .catch((err)=>{
  //     //   console.log(err);

  //     // });
  //     console.log(resp);
  //     //setUser(resp.data)

  //     //user.map not a function error when I uncomment the setUser. so it's still pulling from fakeData
  //   };

  //   GetUser();
  // }, []);

  return (
    //<div className={styles.container}>
    <PageCont>
      <TopRow>
        <GuestNavBar></GuestNavBar>
      </TopRow>

      {/* {
        user.map((o,i)=>(
          <CardWrapper key={i}>
            <UserNav display_name={o.display_name}/>
          </CardWrapper>
          )
        )
      } */}

      <MidCont>
        <RightCont>
          <Header text="Login"></Header>

        <LoginForm></LoginForm>
          <BrowserRouter>
          <Routes>
            <Route exact path="/login" comp={LoginForm}/>
            <Route exact path ="/" comp={Dashboard}/>
            </Routes>
          </BrowserRouter>


        </RightCont>



        <LeftCont>
          <Image src={"/6162.png"} width={853} height={447} />
        </LeftCont>
      </MidCont>

      <FooterCont>
        <Footer></Footer>
      </FooterCont>
    </PageCont>
    //</div>
  );
}
