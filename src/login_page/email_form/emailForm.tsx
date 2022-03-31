import React, {useState, useEffect} from 'react';

import './emailForm.css';
import { Row, Col, Space, Checkbox } from 'antd';
import { EyeTwoTone, EyeInvisibleOutlined, CheckCircleOutlined, CheckCircleTwoTone } from '@ant-design/icons';


const EmailForm:React.FC = () => {


  interface UserInfo{
    firstName:string,
    lastName:string,
    email: string,
    password: string,
  }

  const [userInfo, setUserInfo] =  React.useState<UserInfo>({
    firstName:'',
    lastName:'',
    email: '',
    password: '',
  } as UserInfo);
  
  const [showCorrectEmailFormat, setShowCorrectEmailFormat] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [showCharacterMin, setShowCharacterMin] = React.useState(false);
  const [showHasNumber, setShowHasNumber] = React.useState(false);
  const [hasClickedAgreement, setHasClickedAgreement] = React.useState(false);
  const [enableCreateAcc, setEnableCreateAcc] = React.useState(false);

  
  useEffect(() => {
    let {firstName, lastName, email, password} = userInfo;

    if(firstName.length > 0 && lastName.length > 0 && showCorrectEmailFormat === true &&
      showCharacterMin === true && showHasNumber === true && hasClickedAgreement === true) {
      setEnableCreateAcc(true);
    } else setEnableCreateAcc(false);

  },[userInfo,hasClickedAgreement]);


  const hasNumber = (myString:string) => {
    return /\d/.test(myString);
  }

  const requirementChecker = ( indicator:string ,password:string) => {

    if (indicator === 'password') {
      if (password.length >= 8) {
        setShowCharacterMin(true);
      } else setShowCharacterMin(false);
      
      let containNumber = hasNumber(password);
      if (containNumber) {
        setShowHasNumber(true);
      } else setShowHasNumber(false);
    }
  }

  const validateEmail = (indicator:string, email:string) => {

    if(indicator === 'email') {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        setShowCorrectEmailFormat(true)
      } else setShowCorrectEmailFormat(false)
    }
  };

  const onchangeInfo = (e: any) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    })

    requirementChecker(e.target.name, e.target.value); //check the password requirements
    validateEmail(e.target.name, e.target.value);
  }
  


  
  return (
    <Space direction="vertical" size="small" style={{ display: 'flex' }}>
      <Row gutter={16} style={{ marginTop:30}}>  
        <Col span={12}>
          <input placeholder="First Name" className="inputText" onChange={onchangeInfo} name="firstName"/>
        </Col>
        <Col span={12}>
        <input placeholder="Last Name" className="inputText" onChange={onchangeInfo} name="lastName"/>
        </Col>
      </Row>
      <Row style={{ marginTop:12}}>
        <input placeholder="Email" className="inputText" onChange={onchangeInfo} name="email"/>
      </Row>
      <Row justify="start">
        <Col span={4}>
          { showCorrectEmailFormat ?
                  <Row justify="space-around" align="middle">
                    <CheckCircleTwoTone twoToneColor="#52c41a" /><span style={{fontSize:12}}>Email format</span> 
                  </Row> :
                  <Row justify="space-around" align="middle">
                    <CheckCircleOutlined style={{color:'lightGray'}}/><span className="requirementInfo">Email format</span> 
                  </Row>
          }
          </Col>
      </Row>
      <Row style={{ marginTop:5}} >
        <Col span={22}>
        {showPassword? 
          <input placeholder="Password" className="inputText" onChange={onchangeInfo} name="password" /> :
          <input type="password" placeholder="Password" className="inputText" onChange={onchangeInfo} name="password" />
        }
        </Col>
        <Col span={2}>
        <div className="passwordIcon" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ?<EyeTwoTone style={{fontSize:20, cursor:'pointer'}}/> : <EyeInvisibleOutlined className="eyeInvisibleOutlined"/>}
        </div>
        </Col>
      </Row>
      <Row justify="start">
          <Col span={5}>
            { showCharacterMin ?
              <Row justify="space-around" align="middle">
                <CheckCircleTwoTone twoToneColor="#52c41a" /><span style={{fontSize:12}}>8 Characters Min.</span> 
              </Row> :
              <Row justify="space-around" align="middle">
                <CheckCircleOutlined style={{color:'lightGray'}}/><span className="requirementInfo">8 Characters Min.</span> 
              </Row>
            }
          </Col> 
          <Col span={1}></Col>
          <Col span={4}>
            { showHasNumber ?
              <Row justify="space-around" align="middle">
                <CheckCircleTwoTone twoToneColor="#52c41a" /><span style={{fontSize:12}}>One Number</span> 
              </Row> :
              <Row justify="space-around" align="middle">
                <CheckCircleOutlined style={{color:'lightGray'}}/><span className="requirementInfo">One Number</span> 
              </Row>
            }
          </Col> 
      </Row>
      <Row style={{ marginTop:25}} align="top">
        <Col span={1}>
          <Checkbox onClick={()=> setHasClickedAgreement(!hasClickedAgreement)}></Checkbox>
        </Col>
        <Col span={23}>
          <span style={{color:'#757575', fontSize:14}}>By creating account, you agree to accept our Privacy Policy, Terms of Service and Notification settings.</span>
        </Col>
      </Row>
      <Row style={{ marginTop:8}}>
        { enableCreateAcc ?
          <button className="createAcctBtn"> <span >Create an Free Account!</span></button> :
          <button className="createAcctBtnDisabled" disabled> <span >Create an Free Account!</span></button>}
        
      </Row>
      <Row justify="center">
        <span style={{color:'#757575', fontSize:14}}>Already have an account? <a href="">Log in</a></span>
      </Row>

    </Space>

  )
}

export default EmailForm;