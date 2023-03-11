import './index.css';
import { Row, Col } from "antd"
import Users from '../../Assets/Profileimg/User_2.png'

function User() {
  return (
    <div className="user-container">
        <Row className='image-section'>
            <Col className='image-section'>
            <img className='user-img' src={Users} alt='user' />
            </Col>
            <Col className='name-section'>
            <div className='user-song'>All we know</div>
            <span className='user-name'>Rhaina</span>
            </Col>
        </Row>
    </div>
  );
}

export default User;
