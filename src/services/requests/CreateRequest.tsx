import React from 'react';

import {
    Form,
    Input,
    Select,
    Upload,
    Button,
    Typography,
    Row
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import InAppLayout from "../../components/layouts/InAppLayout";
const {Option} = Select;
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

const Types = [
    {
        label: 'Breakdown',
        value: 'breakdown',
    },
    {
        label: 'Maintenance',
        value: 'maintenance',
    },
    {
        label: 'Replacement',
        value: 'replacement',
    },
    {
        label: 'Demobilisation',
        value: 'demobilisation',
    },
];

const normFile = (e: any) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
        return e;
    }
    return e && e.fileList;
};

const CreateRequest = () => {
    return (
        <InAppLayout>
            <Row justify="center">
                <Title level={3}> Create New Request </Title>
            </Row>
            <Form {...formItemLayout}
                name="request"
                scrollToFirstError>

                <Form.Item
                    name="type"
                    label="Type"
                    rules={[
                        { type: 'string', required: true, message: 'Please select request type!' },
                    ]}
                >
                    <Select defaultValue="Select Type">
                        {
                            Types.map(({label, value}) =>(
                                <Option value={value}>{label}</Option>
                            ))
                        }
                    </Select>
                </Form.Item>

                <Form.Item name={['user', 'introduction']} label="description">
                    <Input.TextArea />
                </Form.Item>

                <Form.Item
                    name="upload"
                    label="Upload"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                >
                    <Upload name="logo" action="/upload.do" listType="picture">
                        <Button icon={<UploadOutlined />}>Click to upload</Button>
                    </Upload>
                </Form.Item>

                <Form.Item
                    name="company"
                    label="Assign Company"
                    rules={[
                        { type: 'string', required: true, message: 'Please select request type!' },
                    ]}
                >
                    <Select defaultValue="Select Company">
                    </Select>
                </Form.Item>

                <Form.Item
                    name="employee"
                    label="Assign Employee"
                    rules={[
                        { type: 'string', required: true, message: 'Please select request type!' },
                    ]}
                >
                    <Select defaultValue="Select Employee">
                    </Select>
                </Form.Item>

                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit" size='large' style={{ width: '100%' }}>
                        Create Request
                    </Button>
                </Form.Item>

            </Form>
        </InAppLayout>
    )
};

export default CreateRequest;
