import React from 'react';
import MUIDataTable from "mui-datatables";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {createMuiTheme, MuiThemeProvider, withStyles} from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Box from "@material-ui/core/Box";
import AddIcon from '@material-ui/icons/Add';
import useTheme from "@material-ui/core/styles/useTheme";
import {useHistory} from "react-router-dom";
import PropTypes from "prop-types";
import Button from "../button/Button";

const getMuiTheme = (theme) =>
    createMuiTheme({
        ...theme,
        overrides: {
            MuiTable: {
                root: {
                    padding: "0 10px"
                }
            },
            MuiTableCell: {
                root: {
                    '&:hover': {
                        display: true,
                    }
                }
            },
            MuiTableRow: {
                root: {
                    '&:hover [class*="MuiTableCell-body"]': {
                        color: theme.palette.font.main,
                        backgroundColor: theme.palette.background.light
                    },
                },
            },
            MUIDataTable: {
                paper: {
                    height: "100%",
                    borderRadius: "14px"
                },
                responsiveBase: {
                    padding: "0 20px",
                    height: "82% !important",
                    overflowY: "auto",
                    '&::-webkit-scrollbar': {
                        width: '0'
                    },
                    '&::-webkit-scrollbar-track': {
                        boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
                        webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: 'rgba(0,0,0,.1)',
                        outline: '1px solid slategrey'
                    }
                },
            },
            MuiTableHead: {
                root: {
                    '&:hover .MuiTableCell-head': {
                        color: "black !important"
                    }
                }
            },
            MUIDataTableHeadCell: {
                data: {
                    fontWeight: 600
                }
            },
            MuiToolbar: {
                root: {
                    padding: "9px 35px 13px !important",
                    borderBottom: "1px solid #ececec",
                }
            },

            MuiTypography: {
                subtitle2: {
                    fontWeight: 600
                }
            },
            MuiSvgIcon: {
                root: {
                    padding: "3px",
                    fontSize: "1.2rem"
                }
            },
            MuiButton: {
                text: {
                    padding: "5px 0",
                    minWidth: "40px",
                    borderRadius: "12px",
                    background: "linear-gradient(to bottom, " + theme.palette.primary.main + ", " + theme.palette.secondary.main + ")"
                },
                label: {
                    color: "white",
                    fontSize: "1.7rem"
                }
            }
        }
    });

const styles = {
    tableRow: {
        '&:hover': {
            '& $actions': {
                opacity: 1
            }
        }
    },
    actions: {
        opacity: 0,
        cursor: "pointer"
    },
};

/** Custom logic to render each row with actions */
const customRowRenderLogic = (data, classes) => {
    return (
        <TableRow className={classes.tableRow}>
            <TableCell>
                <Typography variant="subtitle2">{data[0]}</Typography>
            </TableCell>
            <TableCell>
                <Box display="flex" flexDirection="row" alignItems="center">
                    <Box width="100%">
                        <Typography variant="subtitle2" component="span" >{data[1]}</Typography>
                    </Box>
                    <Box display="flex" className={classes.actions} alignItems="center">
                        <Tooltip title="Delete" placement="top" aria-label="delete">
                            <DeleteIcon className={classes.actionIcon}></DeleteIcon>
                        </Tooltip>
                        <Tooltip title="Edit" placement="top" aria-label="Edit">
                            <EditIcon className={classes.actionIcon}></EditIcon>
                        </Tooltip>
                    </Box>
                </Box>
            </TableCell>
        </TableRow>
    );
};

/** Table component aligned with prototype styling.  Accepts the same props from [MUI-Datatables](https://github.com/gregnb/mui-datatables) */
const Table = (props) => {
    const {classes, title, options, showButton, ...dataTablePropsRest} = props;
    const theme = useTheme();
    const history = useHistory();


    const dataTableProps = {
        ...dataTablePropsRest,
        title: <div>
            <Typography variant="h1"> {title} </Typography>
        </div>,
        options: {
            print: false,
            filter: false,
            download: false,
            search: false,
            viewColumns: false,
            rowHover: false,
            pagination: false,
            selectableRows: "none",
            responsive: "standard",
            fixedHeader: true,
            elevation: 1,
            customRowRender: (data) => customRowRenderLogic(data, classes),
            customToolbar: ({displayData}) => {
                return <div>
                    {showButton && <Button variant="contained" onClick={() => history.push("/form")}>
                        <AddIcon style={{fontSize: "1.5rem"}}/>
                    </Button>}
                    {/*<Link component={Button} to="/form">*/}
                    {/*    <AddIcon style={{fontSize: "1.5rem"}}/>*/}
                    {/*</Link>*/}
                </div>
            },
            ...options,
        }
    };

    return (
        <MuiThemeProvider theme={getMuiTheme(theme)}>
            <MUIDataTable {...dataTableProps} />
        </MuiThemeProvider>
    );
};

Table.propTypes = {
    /** Table's title */
    title: PropTypes.string.isRequired,
    /** Data to be displayed on the table */
    data: PropTypes.array,
    /** Columns of data to be displayer */
    columns: PropTypes.array,
    /** Define if table will contain the button to redirect to a register page */
    showButton: PropTypes.bool,
    /** @ignore */
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Table);