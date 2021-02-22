import React from 'react';
import AuthLayout from '../layouts/AuthLayout';
import { Form, Input, Button, Typography} from 'antd';
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {userLogin} from "./auth-redux-slice";
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

const LoginView:React.FunctionComponent  = (props) => {
    const dispatch = useDispatch();

    const {
        loading,
        hasErrors,
        responsePayload
    } = useSelector((state:RootStateOrAny) => state.auth);

    const onFinish = (values: any) => {
        dispatch(userLogin(values))
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return <AuthLayout isLoginPage>
        <Title level={2} style={{padding: 20}}>Login</Title>
        <Form
            {...style.formLayout}
            name='basic'
            size='large'
            style={{width: '30%'}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}>
            <Form.Item
                label="Email"
                name="email"
                rules={[{required: true, message: 'Please input your username!'}]}>
                <Input/>
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{required: true, message: 'Please input your password!'}]}
            >
                <Input.Password/>
            </Form.Item>

            <Form.Item {...style.tailLayout} >
                <Button type="primary"
                        htmlType="submit"
                        size='large'
                        loading={loading}
                        style={{width: '100%'}}>
                    Login
                </Button>
            </Form.Item>
        </Form>
    </AuthLayout>
};

export default LoginView;



