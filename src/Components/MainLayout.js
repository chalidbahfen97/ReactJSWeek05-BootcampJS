import React from "react";
import styled from "styled-components";
import Footers from "./layout/Footers";
import Headers from "./layout/Headers";
import Main from "./layout/Main";
import Navbar from "./layout/Navbar";
import SideBar from "./layout/Sidebar";

import home from "../pages/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Counter03 from "./Counter03";
import ProductList from "./Parent/ProductList";
import ProductRedux from "../pages/ProductRedux";

const ScreenMax = styled.div`
  .container {
    display: grid;
    margin: 1rem auto;
    grid-template-columns: 180px 2fr;
    grid-template-areas: "aside main main";
  }
  aside {
    grid-template-areas: aside;
  }
  main {
    grid-template-areas: main;
  }
`;

export default function MainLayout() {
  return (
    <BrowserRouter>
      <ScreenMax>
        <Headers />
        <Navbar />
        <div className="container">
          <SideBar />
          <Main>
            <Switch>
              <Route exact path="/counter" component={Counter03} />
              <Route exact path="/home" component={home} />
              <Route exact path="/product" component={ProductList} />
              <Route exact path="/redux" component={ProductRedux} />
              <Route exact path="/lifecycle" />
              <Route exact path="/hook" />
            </Switch>
          </Main>
        </div>
        <Footers />
      </ScreenMax>
    </BrowserRouter>
  );
}
