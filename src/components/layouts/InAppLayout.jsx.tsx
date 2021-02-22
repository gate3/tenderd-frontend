import React from 'react';
import { Layout, Typography, Menu, Row, Col } from 'antd';
import { UserOutlined, CopyOutlined, HomeOutlined, SettingFilled } from '@ant-design/icons';
import {CssStylesheet} from "../../types";
const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const style:CssStylesheet = {
    headerStyle: {
        backgroundColor: '#fff',
    },
    contentStyle: {
        minHeight: 280,
        padding: 50,
        background: '#f1f1f1',
    },
};

const InAppLayout:React.FunctionComponent = ({ children }) => (
    <>
        <Header style={style.headerStyle}>
            <Menu mode="horizontal">
                <Menu.Item disabled>
                    <Title level={3}>rEquestor</Title>
                </Menu.Item>
                <Menu.Item key="home" icon={<HomeOutlined />}>
                    Home
                </Menu.Item>
                <Menu.Item key="employees" icon={<UserOutlined />}>
                    Employees
                </Menu.Item>
                <Menu.Item key="requests" icon={<CopyOutlined />}>
                    Requests
                </Menu.Item>
                <Menu.Item key="settings" icon={<SettingFilled />} style={{float: 'right'}}>
                    Settings
                </Menu.Item>
            </Menu>
        </Header>
        <Layout>
            <Content style={style.contentStyle}>
                <Row>
                    <Col span={20} offset={2}>
                        {children}
                    </Col>
                </Row>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Requests Management App by Acme Inc.</Footer>
        </Layout>

    </>
)

export default InAppLayout
