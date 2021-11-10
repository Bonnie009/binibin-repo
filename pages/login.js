import styled from "styled-components";
import React from "react";

import GuestNavBar from "../comps/GuestNavBar";
import Header from "../comps/HeaderText";
import Footer from "../comps/footer";
import InputPasswordComp from "../comps/InputPassword";
import InputTextComp from "../comps/InputText";
import Image from "next/image";
import loginImage from "../public/login_image.png";
import LoginForm from "../comps/LoginForm";

const PageCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const TopRow = styled.div`
  display: flex;
  flex: 1;
`;
const MidCont = styled.div`
  display: flex;
  height: 500px;
`;

const LeftCont = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const RightCont = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default function Login() {
  // const usernameValue = InputTextComp.value;
  return (
    //<div className={styles.container}>
    <PageCont>
      <TopRow>
        <GuestNavBar></GuestNavBar>
      </TopRow>

      <MidCont>
        <LeftCont>
          <Image src={loginImage} width={500} height={300} />
        </LeftCont>
        <RightCont>
          <LoginForm></LoginForm>
        </RightCont>
      </MidCont>

      <Footer></Footer>
    </PageCont>
    //</div>
  );
}
