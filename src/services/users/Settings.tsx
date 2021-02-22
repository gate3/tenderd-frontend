import React from 'react';
import InAppLayout from "../../components/layouts/InAppLayout";
import {Button, Form, Input, Row, Select, Typography} from "antd";
import { LogoutOutlined } from '@ant-design/icons';

const { Title } = Typography;

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
};

const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 8,
            offset: 8,
        },
    },
};

const Settings = () => {
  return (
      <InAppLayout>
          <Row justify="center">
              <Title level={3}> Update User </Title>
          </Row>
          <Form {...formItemLayout}
                name="request"
                scrollToFirstError>
              <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                      { required: true, message: 'Please input your email!' },
                      { type: 'email', message: 'The input is not valid E-mail!'},
                  ]}>
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

              <Form.Item {...tailFormItemLayout} >
                  <Button type="primary" htmlType="submit" size='large' style={{ width: '100%' }}>
                      Update User
                  </Button>
              </Form.Item>
          </Form>

          <Row justify="center">
              <Button danger size='large' icon={<LogoutOutlined />}>
                  Logout
              </Button>
          </Row>

      </InAppLayout>
  )
};

export default Settings;
