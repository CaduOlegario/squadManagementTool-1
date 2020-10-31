import React from 'react';
import Table from "../layout/Table";

const TablePage = (props) => {

    const columns = [
        {
            name: "id",
            options: {
                display: 'excluded',
                viewColumns: "false"
            }
        }, {
            name: "name",
            label: "Name",
            options: {

            }
        }, {
            name: "description",
            label: "Description"
        }
    ];

    return (
        <Table
            title="My Teams"
            data={props.data}
            columns={columns}
        />
    );
};

export default TablePage;