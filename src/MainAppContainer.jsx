import SideBar from './components/SideBarMenu/SideBar'
import { Row, Col } from "antd"
import './App.css'
import SongListView from './components/SongList/Player/SongList';
import PlayList from './components/PlayedSongs/PlayList';
import User from './components/User';
import MainRouter from './Router';
function MainAppContainer() {
  return (
    <div >
      <div>
        <Row>
          <Col span={5} className='sideBar'>
            <SideBar />
          </Col>
          <Col span={19}>
          <MainRouter />
            <PlayList />
          </Col>
        </Row>
        <Row>
          <Col span={5} className='sideBar'>
            <User />
          </Col>
          <Col span={19} >
            <SongListView />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default MainAppContainer;
