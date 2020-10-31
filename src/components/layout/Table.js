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
                    '&:hover [class*="MuiTableCell-body"]': {
                        color: theme.palette.font.main,
                        backgroundColor: theme.palette.background.light
                    },
                },
            },
            MUIDataTable: {
                paper: {
                    padding: "0 20px",
                    height: "100%",
                    borderRadius: "14px"
                },
                responsiveScroll: {
                    maxHeight: 'none',
                }
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
            tableBodyHeight: `calc(100% - 141px)`,
            tableBodyMaxHeight: '100%',
            elevation: 1,
            title: <div>
                <Typography variant="h1"> {props.title} </Typography>
            </div>,
            customRowRender: (data) => customRowRenderLogic(data, classes),
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