import React from 'react';

import { Layout, Button, Typography, Row, Col} from 'antd';
const { Header } = Layout;
const { Title } = Typography;

const style = {
    headerStyle: {
        backgroundColor: '#fff',
        paddingTop: 20,
        paddingBottom: 20
    },
    menuFloatRight: {
        float: 'right'
    }
};

const AuthActionArea = ({isLoginPage = false}) => {
  const settings:{title?:string, buttonText?:string, buttonLink?:string} = {};
  settings.title = isLoginPage ? 'Don\'t have an account ?' : 'Already have an account ?';
  settings.buttonText = isLoginPage ? 'Create Account' : 'Login';
  settings.buttonLink = isLoginPage ? '/register' : '/login';

  return (
      <Row justify="end" align="middle">
          {settings.title} &nbsp;
          <Button shape="round">{settings.buttonText}</Button>
      </Row>
  )
};

const AuthLayout = ({ isLoginPage = false }) => {
    return (
        <Header style={style.headerStyle}>
            <Row align="middle">
                <Col span={8}>
                    <Title level={3}>Request Manager</Title>
                </Col>
                <Col span={8} offset={8}>

                    <AuthActionArea isLoginPage={isLoginPage}/>

                </Col>
            </Row>
        </Header>
    )
};

export default AuthLayout;
