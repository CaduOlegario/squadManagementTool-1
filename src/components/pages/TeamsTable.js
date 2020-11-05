import React from 'react';
import Table from "components/layout/Table";

const TeamsTable = (props) => {

    const columns = [
        {
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

export default TeamsTable;