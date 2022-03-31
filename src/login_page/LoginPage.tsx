import React, {useState} from 'react';
import './LoginPage.css';

import SignupWithButtons from './signup_with_buttons/signupWithButtons'
import EmailForm from './email_form/emailForm'
import { Row, Col, Card } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';


const LoginPage: React.FC = () => {

  let windowHeight:number = window.innerHeight;
  let windowWidth:number = window.innerWidth;



  return (
    <div style={{background: '#F1F5FF', height:windowHeight}}>
      <Row justify="center" align="middle">
        <Col>
          <Card style={{width: windowWidth/2.5, marginTop:windowHeight/8, borderRadius:15}}>
            <div className="ArrowLeftOutlined" ><ArrowLeftOutlined style={{cursor:'pointer'}}/> <span style={{cursor:'pointer'}}>Back</span> </div>
            <Row>
              <Col span={3}></Col>
              <Col span={18}>
                <div className="startFromFreeText">Start from free</div>
                <div className="createAnAcctText">Create an account</div>
                <SignupWithButtons/>
                <Row style={{marginTop:30}}>
                   <Col span={13}>
                      <span style={{fontSize:18, fontWeight:700}}>
                        Or use your email for registration
                      </span>
                    </Col>
                   <Col span={11}>
                        <hr style={{marginTop:15}}></hr>
                   </Col>
                </Row>
                <EmailForm/>
              </Col>
              <Col span={3}></Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default LoginPage;
