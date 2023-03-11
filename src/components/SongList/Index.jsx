import React from "react";
import { Row, Col, Card } from 'antd';
import * as BsIcons from "react-icons/bs";
import Singer8 from '../../Assets/SongUser/Singer8.png'
import Singer7 from '../../Assets/SongUser/Singer7.png'
import Singer5 from '../../Assets/SongUser/Singer5.png'
import Singer6 from '../../Assets/SongUser/Singer6.png'
import './index.css'

export default function SongList() {

    const NewReleseList = [{
        id: 1,
        image: Singer7 ,
        className: 'new-releses',
        name: "Rihanna",
        profile: "Singer",
    }, {
        id: 2,
        image: Singer8,
        className: 'new-releses',
        name: "S nejo",
        profile: "Singer",
    }
        , {
        id: 3,
        image: Singer6,
        className: 'new-releses',
        name: "Rihanna",
        profile: "Singer",
    },
    {
        id: 4,
        image: Singer7,
        className: 'new-releses',
        name: "Raizuki",
        profile: "Artist",
    }, {
        id: 5,
        image: Singer5,
        className: 'new-releses',
        name: "Nijuki",
        profile: "Artist",
    },
    {
        id: 6,
        image: Singer6,
        className: 'new-releses',
        name: "Sanju",
        profile: "Artist",
    }
    ];
    return (
        <div className="songList-container">
            <h3>New Relsese <BsIcons.BsFillPlayFill className="button-icon" /></h3>
            <Row className="song-cards-head">
                {
                    NewReleseList.map((data, i) => {
                        return (
                            <Col span={4} className='card-body' Gutter={6}>
                                <div key={i}>
                                    <img className="card-img" alt="example" src={data.image} />
                                    <p>{data.name}</p>
                                    <span>{data.profile}</span>
                                </div>
                            </Col>
                        )
                    })
                }
            </Row>
        </div>
    );
}


