import React from 'react';
import AuthLayout from '../layouts/AuthLayout';
import { Form, Input, Button, Typography, Row, Col} from 'antd';
const { Title } = Typography;

const style = {
    formLayout: {
        labelCol: { span: 8 },
        wrapperCol: { span: 20 },
    },
    tailLayout: {
        wrapperCol: { offset: 8, span: 16 },
    }
};

const LoginView = () => (
    <AuthLayout isLoginPage>
        <Title level={2} style={{ padding: 20 }}>Login</Title>
        <Form {...style.formLayout} name='basic' size='large' style={{ width: '30%' }}>
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}>
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item {...style.tailLayout} >
                <Button type="primary" htmlType="submit" size='large'>
                    Login
                </Button>
            </Form.Item>
        </Form>
    </AuthLayout>
);

export default LoginView;
