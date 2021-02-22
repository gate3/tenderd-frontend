import React from 'react';

import { Table, Button } from 'antd';
import InAppLayout from "../../components/layouts/InAppLayout.jsx";


const columns = [
    {
        title: '',
        dataIndex: 'sn',
        key: 'sn',
    },
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
        sn: 1,
        title: 'Breakdown',
        status: 'Created',
        duration: '10 mins ago',
        assigned: 'Doyin Olarewaju',
        created: '2 days ago',
    },
];

const RequestsView = () => {
    return (
        <InAppLayout>
            <Table columns={columns} dataSource={data} />
        </InAppLayout>
    )
};

export default RequestsView;
