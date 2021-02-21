import React from 'react';
import AuthLayout from '../layouts/AuthLayout';
import { Form, Input, Button, Typography, Select} from 'antd';
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

const SignUpView = () => (
    <AuthLayout isLoginPage>
        <Title level={2} style={{ padding: 20 }}>Create an Account</Title>
        <Form {...style.formLayout} name='basic' size='large' style={{ width: '30%' }}>
            <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}>
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                label="Full Name"
                name="fullname"
                rules={[{ required: true, message: 'Please input your full name!' }]}>
                <Input />
            </Form.Item>

            <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please select a company!' }]}>
                <Select />
            </Form.Item>

            <Form.Item {...style.tailLayout} >
                <Button type="primary" htmlType="submit" size='large' style={{ width: '100%' }}>
                    Login
                </Button>
            </Form.Item>
        </Form>
    </AuthLayout>
);

export default SignUpView;
