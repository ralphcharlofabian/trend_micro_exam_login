import React from 'react';

import './signupWithButtons.css';
import { Row, Col } from 'antd';
import { GoogleOutlined, FacebookFilled } from '@ant-design/icons';


const SignupWithButtons: React.FC = () => {

  return (
    <Row gutter={16}>
      <Col span={12} >
        <button className="signinButton">
          <Row>
            <GoogleOutlined className="signinIcon"/><span className="signinFont"> Sign up with Google</span>
          </Row>
        </button>
      </Col>
      <Col span={12} >
        <button className="signinButton">
          <Row>
            <FacebookFilled className="signinIcon"/><span className="signinFont"> Sign up with Facebook</span>
          </Row>
        </button>
      </Col>
    </Row>

  )
}

export default SignupWithButtons;