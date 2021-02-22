import React, {useEffect} from 'react';
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import AuthLayout from '../layouts/AuthLayout';
import { Form, Input, Button, Typography, Select} from 'antd';
import {fetchCompanies} from "../companies/company-redux-slice";
import {userSignUp} from "./auth-redux-slice";
const { Title } = Typography;
const { Option } = Select;

const style = {
    formLayout: {
        labelCol: { span: 8 },
        wrapperCol: { span: 20 },
    },
    tailLayout: {
        wrapperCol: { offset: 8, span: 16 },
    }
};

const SignUpView = () => {
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(fetchCompanies());
    }, []);

    const {
        loading,
        hasErrors,
        responsePayload
    } = useSelector((state:RootStateOrAny) => state.company);

    const onFinish = (values: any) => {
        let data = values;
        if (data.company != null) {
            const company = JSON.parse(values.company);
            data = {
                ...values,
                company: {
                    companyName: company.name,
                    companyId: company.id
                }
            }
        }
        dispatch(userSignUp(data))
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return <AuthLayout isLoginPage={false}>
        <Title level={2} style={{padding: 20}}>Create an Account</Title>
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
                rules={[
                    {required: true, message: 'Please input your email!'},
                    {type: 'email', message: 'The input is not valid E-mail!'},
                ]}>
                <Input/>
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{required: true, message: 'Please input your password!'}]}
            >
                <Input.Password/>
            </Form.Item>

            <Form.Item
                label="Full Name"
                name="name"
                rules={[{required: true, message: 'Please input your full name!'}]}>
                <Input/>
            </Form.Item>

            <Form.Item
                label="Companies"
                name="company"
                rules={[{required: true, message: 'Please select a company!'}]}>
                <Select>
                    {
                        responsePayload.map((company:any) => (
                            <Option value={JSON.stringify(company)} key={company.id}>{company.name}</Option>
                        ))
                    }
                </Select>
            </Form.Item>

            <Form.Item {...style.tailLayout} >
                <Button type="primary" htmlType="submit" size='large' style={{width: '100%'}} loading={loading}>
                    Signup
                </Button>
            </Form.Item>
        </Form>
    </AuthLayout>
};

export default SignUpView;
