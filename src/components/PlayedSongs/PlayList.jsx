import React from "react";
import { Row, Col } from "antd"
import './index.css'
import { PlayedSongsList } from './PlayedSongsList'
import * as BsIcons from "react-icons/bs";
import Song1 from '../../Assets/SongUser/User_3.png'
import Song2 from '../../Assets/SongUser/User_4.jpg'
import Song3 from '../../Assets/SongUser/User_5.jpg'
import Song4 from '../../Assets/Profileimg/User_2.png'
import Popular from '../../Assets/Profileimg/Popular-songs.png'
import { useSelector, useDispatch } from "react-redux";

export default function PlayList() {

    const value = useSelector(state => state);
    console.log(value);
    const dispatch = useDispatch();
    return (
        <div className="playList-container">

            <Row>
                <Col span={12}>
                    <h3 className="newplayed">New Played</h3>
                    <div>
                        <div className="list">
                            <Row className="Playing-List">
                                <Col className="song-play-btn" span={5} onClick={() =>
                                    dispatch({
                                        type: "Memories"
                                    })
                                }>
                                    {value.reducer.src === 'https://www.bensound.com/bensound-music/bensound-memories.mp3' ? <BsIcons.BsFillPlayFill className="play-button-icon" /> : null}
                                    <img className="song-Profile" src={Song4} alt='' />
                                </Col>
                                <Col span={9} className="MusicPlay">
                                    High is hope
                                </Col>
                                <Col span={5} className="MusicPlay">
                                    Rahima
                                </Col>
                                <Col span={3}>
                                    singer
                                </Col>
                                <Col span={2}>
                                    <BsIcons.BsThreeDotsVertical />
                                </Col>
                            </Row>
                        </div>
                        <div className="list">
                            <Row className="Playing-List">
                                <Col span={5} className="song-play-btn" onClick={() =>
                                    dispatch({
                                        type: "Creative Minds"
                                    })
                                }>
                                    {value.reducer.src === 'https://www.bensound.com/bensound-music/bensound-creativeminds.mp3' ? <BsIcons.BsFillPlayFill className="play-button-icon" /> : null}

                                    <img className="song-Profile" src={Song3} alt='' />
                                </Col>
                                <Col span={9} className="MusicPlay">
                                    Shape of you
                                </Col>
                                <Col span={5} className="MusicPlay">
                                    Ed sherpan
                                </Col>
                                <Col span={3}>
                                    singer
                                </Col>
                                <Col span={2}>
                                    <BsIcons.BsThreeDotsVertical />
                                </Col>
                            </Row>
                        </div>
                        <div className="list">
                            <Row className="Playing-List">
                                <Col span={5} className="song-play-btn" onClick={() =>
                                    dispatch({
                                        type: "Acoustic Breeze"
                                    })
                                }>
                                    {value.reducer.src === 'https://www.bensound.com/bensound-music/bensound-acousticbreeze.mp3' ? <BsIcons.BsFillPlayFill className="play-button-icon" /> : null}

                                    <img className="song-Profile" src={Song2} alt='' />
                                </Col>
                                <Col span={9} className="MusicPlay">
                                    All we know
                                </Col>
                                <Col span={5} className="MusicPlay">
                                    Tr serti
                                </Col>
                                <Col span={3}>
                                    singer
                                </Col>
                                <Col span={2}>
                                    <BsIcons.BsThreeDotsVertical />
                                </Col>
                            </Row>
                        </div>
                        <div className="list">
                            <Row className="Playing-List">
                                <Col span={5} className="song-play-btn" onClick={() =>
                                    dispatch({
                                        type: "Sunny"
                                    })
                                }>
                                    {value.reducer.src === 'https://www.bensound.com/bensound-music/bensound-sunny.mp3' ? <BsIcons.BsFillPlayFill className="play-button-icon" /> : null}

                                    <img className="song-Profile" src={Song1} alt='' />
                                </Col>
                                <Col span={9} className="MusicPlay">
                                    Shape of you
                                </Col>
                                <Col span={5} className="MusicPlay">
                                    Sanju
                                </Col>
                                <Col span={3}>
                                    artist
                                </Col>
                                <Col span={2}>
                                    <BsIcons.BsThreeDotsVertical />
                                </Col>
                            </Row>
                        </div>

                    </div>
                </Col>
                <Col span={12} >
                    <h3>Popular songs</h3>
                    <img className='popular-image' src={Popular} alt='' />
                </Col >
            </Row>

        </div>
    );
}
