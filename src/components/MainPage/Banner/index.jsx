import React from "react";
import { Row, Col } from "antd";
import './index.css'
import * as BsIcons from "react-icons/bs";
export default function Banner() {
    return (
        <div className="banner-container">

            <Row>
                <Col className="Banner-title" >
                    <h1>This Weekend</h1>
                    <p>As I was Walkin down the Road to Bethlehem one night  </p>
                    <p>I looked up to the sky and there.</p>
                    <div className="play-btn">
                        <button>Play<BsIcons.BsFillPlayFill className="button-icon" /></button>

                    </div>
                </Col>
                <Col>
             {/* <img
                      src='https://image.pngaaa.com/750/1473750-middle.png'
                      alt=""
                    />  */}
			</Col>
            </Row>
        </div>
    );
}
