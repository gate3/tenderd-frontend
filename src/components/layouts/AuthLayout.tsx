import React from 'react';

import { Layout, Button, Typography, Row, Col} from 'antd';
const { Header, Content } = Layout;
const { Title } = Typography;

const style = {
    headerStyle: {
        backgroundColor: '#fff',
        paddingTop: 20,
        paddingBottom: 20
    },
    menuFloatRight: {
        float: 'right'
    },
    content: {
        display: 'flex',
        minHeight: 280,
        padding: '0 50px',
        background: '#fff',
    },
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

const AuthLayout:React.FunctionComponent<{isLoginPage:boolean}> = ({ children, isLoginPage = false }) => (
    <>
        <Header style={style.headerStyle}>
            <Row align="middle">
                <Col span={8}>
                    <Title level={3}>Request Manager</Title>
                </Col>
                <Col span={8} offset={8}>
                    <AuthActionArea isLoginPage={isLoginPage} />
                </Col>
            </Row>
        </Header>
        <Content style={style.content}>
            <Row justify="center" align="middle" style={{ width: '100%', flexDirection: 'column' }}>
                {children}
            </Row>
        </Content>
    </>
);

export default AuthLayout;
