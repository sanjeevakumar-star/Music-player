import { Col, Row, } from "antd";
import React from "react";
import User from '../../Assets/Profileimg/User_1.png'
import './Header.css'
export default function Header() {
  return (
    <div className="flexbox-container">
      <Row>
        <Col span={21}>
          <input type="text" className="search-btn" name="search" placeholder="Enter Keyword" />
        </Col>
        <Col span={3}>
          <div className="user-profile">
            <img
              src={User}
              className="card-img-top"
              alt=""
            />
            <span>Nabil</span>
          </div>
        </Col>
      </Row>
    </div>
  );
}
