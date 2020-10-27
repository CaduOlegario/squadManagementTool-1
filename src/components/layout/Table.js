import React from 'react';
import MUIDataTable from "mui-datatables";


const Table = (props) => {
    const dataTableProps = {
        ...props,
        options: {
            rowsPerPage: 7,
            rowsPerPageOptions: [7],
            print: false,
            filter: false,
            download: false,
            search: false,
            viewColumns: false,
            selectableRows: false,
            ...props.options
        }
    };

    return (
        <div>
            <MUIDataTable {...dataTableProps} />
        </div>
    );
};

export default Table;