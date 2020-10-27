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
            label: "Nome"
        }, {
            name: "cnpj",
            label: "CNPJ",
            options: {
                customBodyRender: value => <div>{value}</div>
            }
        }
    ];

    return (
        <Table
            title="List of players?"
            data={props.data}
            columns={columns}
        />
    );
};

export default TablePage;