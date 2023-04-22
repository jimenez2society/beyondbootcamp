import React from "react";
import { Outlet } from "react-router-dom";
import Container from "../components/container/Container";
import Navbar from "../components/Nav/Desktop/Navbar";
import NavbarMobile from "../components/Nav/Mobile/NavbarMobile";

function Layout() {
  return (
    <Container>
      <Navbar />
      <NavbarMobile />
      <Outlet />
    </Container>
  );
}

export default Layout;
