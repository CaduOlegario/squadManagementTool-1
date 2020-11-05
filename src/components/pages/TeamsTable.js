import React from 'react';
import Table from "components/layout/table/Table";
import Input from "components/layout/input/Input";
import PropTypes from "prop-types";

const TeamsTable = (props) => {
    const {data, loader} = props;

    const columns = [
        {
            name: "id",
            options: {
                display: 'excluded',
                viewColumns: "false"
            }
        },
        {
            name: "name",
            label: "Name",
        }, {
            name: "description",
            label: "Description"
        }
    ];

    return (
        <Table
            title="My Teams"
            data={data}
            columns={columns}
            showButton={true}
            loader={loader}
        />
    );
};

Input.propTypes = {
    data: PropTypes.array,
    loader: PropTypes.func
};

export default TeamsTable;