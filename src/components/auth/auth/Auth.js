import React, { useEffect, useState } from "react";
import AuthStyled from "./AuthStyled";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";
import { Redirect, useRouteMatch } from "react-router";
import MobileAuth from "../MobileAuth/MobileAuth";

const Auth = () => {
  const { url } = useRouteMatch();

  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  const handleWindowResize = () => {
    setDeviceWidth(window.innerWidth);
  };

  const isMobile = deviceWidth < 768;
  const isAuthURL = url === "/auth";
  const isLoginUrl = url === "/auth/login";
  const isRegisterUrl = url === "/auth/register";

  return (
    <AuthStyled>
      {isMobile && isAuthURL && <MobileAuth />}
      {isMobile && isLoginUrl && <Login />}
      {isMobile && isRegisterUrl && <Registration />}

      {!isMobile && isAuthURL && <Redirect to="/auth/login" />}
      {!isMobile && isLoginUrl && <Login />}
      {!isMobile && isRegisterUrl && <Registration />}
    </AuthStyled>
  );
};

export default Auth;
