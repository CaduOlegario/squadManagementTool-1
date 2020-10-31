import React from 'react';
import MUIDataTable from "mui-datatables";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {
    createMuiTheme,
    MuiThemeProvider,
    withStyles
} from "@material-ui/core/styles";import Tooltip from "@material-ui/core/Tooltip";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import AddIcon from '@material-ui/icons/Add';
import useTheme from "@material-ui/core/styles/useTheme";

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
                    '&:hover h6': {
                        color: theme.palette.font.main
                    },
                    '&:hover .MuiSvgIcon-root': {
                        color: theme.palette.font.main
                    },
                    '&:hover': {
                       backgroundColor: theme.palette.background.light
                    }
                },
            },
            MUIDataTable: {
                paper: {
                    padding: "0 20px",
                    height: "100%"
                },
                responsiveScroll: {
                    maxHeight: 'none',
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
                    padding: "14px 16px 0 !important"
                }
            },
            MUIDataTableToolbar: {
              left: {
                  fontSize: "25px",
                  fontWeight: 600,
                  color: theme.palette.secondary.main
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
                root: {
                    padding: "5px 0",
                    minWidth: "40px",
                    borderRadius: "12px",
                    background: "linear-gradient(to bottom, " + theme.palette.primary.main + ", " + theme.palette.secondary.main + ")"
                },
                contained: {
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

const Table = (props) => {
    const {classes} = props;
    const theme = useTheme();

    const dataTableProps = {
        ...props,
        title: <div>
            {props.title}
        </div>,
        options: {
            rowsPerPage: 7,
            rowsPerPageOptions: [7],
            print: false,
            filter: false,
            download: false,
            search: false,
            viewColumns: false,
            rowHover: false,
            selectableRows: "none",
            responsive: "vertical",
            tableBodyHeight: `calc(100% - 117px)`,
            tableBodyMaxHeight: '100%',
            customRowRender: (data, dataIndex, rowIndex) => {
                return (
                    <TableRow className={classes.tableRow}>
                        <TableCell>
                            <Typography variant="subtitle2">{data[0]}</Typography>
                        </TableCell>
                        <TableCell>
                            <Box display="flex" flexDirection="row" alignItems="center">
                                <Box width="100%">
                                    <Typography variant="subtitle2" >{data[1]}</Typography>
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
            },
            customToolbar: ({displayData}) => {
              return <div>
                  <Button variant="contained">
                      <AddIcon style={{fontSize: "1.5rem"}}/>
                  </Button>
              </div>
            },
            ...props.options,
        }
    };

    return (
        <MuiThemeProvider theme={getMuiTheme(theme)}>
            <MUIDataTable {...dataTableProps} />
        </MuiThemeProvider>
    );
}

export default withStyles(styles)(Table);

// '&:hover h6': {MuiSvgIcon-root-93
//     color: "red"
// },