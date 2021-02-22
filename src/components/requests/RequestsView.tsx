import React, {useEffect, useState} from 'react';
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import { Table, Button } from 'antd';
import {AppstoreAddOutlined} from '@ant-design/icons';
import InAppLayout from "../layouts/InAppLayout";
import {fetchCompanyRequests} from "../companies/company-redux-slice";
import LocalStorageHelper from '../../services/localstorage-helper';

const columns = [
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
    },
    {
        title: 'Duration',
        dataIndex: 'duration',
        key: 'duration',
    },
    {
        title: 'Created Date',
        dataIndex: 'created',
        key: 'created',
    },
    {
        title: 'Assigned To',
        dataIndex: 'assigned',
        key: 'assigned',
    },
    {
        title: 'Action',
        key: 'action',
        render: () => (
            <Button type="primary">
                Edit Request
            </Button>
        ),
    }
];

const data = [
    {
        key: '1',
        type: 'Breakdown',
        status: 'Created',
        duration: '10 mins ago',
        assigned: 'Doyin Olarewaju',
        created: '2 days ago',
    },
];

const RequestsView = () => {
    const dispatch = useDispatch();

    const [requests, setRequests] = useState([]);
    const {
        company,
    } = useSelector((state:RootStateOrAny) => state);

    useEffect(() => {
        const userData = LocalStorageHelper.getItem(LocalStorageHelper.localStoreKeys.userProfile);
        if (userData) {
            const user = JSON.parse(userData);
            dispatch(fetchCompanyRequests(user.company.companyId));
        }
    }, []);

    useEffect(() => {
        const {responsePayload, hasErrors} = company
        if (!hasErrors) {
            const requestsList = responsePayload.map(({id = '', type = '', status = '', statusCreatedDate = 0, assignedToUser = '' }) => ({
                key: id,
                id,
                type,
                status,
                statusCreatedDate,
                assignedToUser
            }));
            setRequests(requestsList)
        }
    }, [company]);

    return (
        <InAppLayout>
            <Button icon={<AppstoreAddOutlined />} style={{ marginBottom: 10 }}> Add New Request </Button>
            <Table columns={columns} dataSource={requests} />
        </InAppLayout>
    )
};

export default RequestsView;
