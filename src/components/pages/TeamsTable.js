import React from 'react';
import Table from "components/layout/table/Table";
import Input from "components/layout/input/Input";
import PropTypes from "prop-types";

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
            showButton={true}
        />
    );
};

Input.propTypes ={
    data: PropTypes.array
};

export default TeamsTable;