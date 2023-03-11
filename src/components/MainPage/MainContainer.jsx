import React from "react";
import Header from "../Header";
import Banner from "./Banner";
import { Row, Col } from "antd"
import SongList from "../SongList/Index";
export default function MainContainer() {
  return (
    <div className="Header">
      <Row>
        <Col> 
        <Header />
          <Banner />
          <SongList />
        </Col>
      </Row>


    </div>
  );
}
