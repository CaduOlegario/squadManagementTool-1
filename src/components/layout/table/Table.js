import React, {useState} from 'react';
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
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import {default as MaterialButton} from "@material-ui/core/Button";
import {useSnackbar} from "react-simple-snackbar";
import defaultToastConfig from "utils/ToastUtils";
import {HandleDeleteApi} from "utils/apiUtils";
import TeamApi from "api/TeamApi";


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
const customRowRenderLogic = (data, classes, setDeleteDialogOpen, setSelectedTableData) => {
    return (
        <TableRow className={classes.tableRow}>
            <TableCell>
                <Typography variant="subtitle2">{data[1]}</Typography>
            </TableCell>
            <TableCell>
                <Box display="flex" flexDirection="row" alignItems="center">
                    <Box width="100%">
                        <Typography variant="subtitle2" component="span" >{data[2]}</Typography>
                    </Box>
                    <Box display="flex" className={classes.actions} alignItems="center">
                        <Tooltip title="Delete" placement="top" aria-label="delete">
                            <DeleteIcon
                                className={classes.actionIcon}
                                onClick={() => {
                                    setSelectedTableData(data);
                                    setDeleteDialogOpen(true);
                                }}
                            ></DeleteIcon>
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

/** Function to call delete api */
const deleteTeamApi = (id, openSnackbar, loader) => {
    const handleOpenSnackbar = (isApiSuccess) => {
        if(isApiSuccess) {
            openSnackbar("Team deleted successfully");
        } else {
            openSnackbar("Team couldn't be deleted");
        }
    };
    return HandleDeleteApi(TeamApi.deleteTeam, id, loader, handleOpenSnackbar);
};

/** Dialog for deleting a team */
const deleteDialog = (selectedTableData, isDeleteDialogOpen, setDeleteDialogOpen, openSnackbar, loader) => {

    if(!selectedTableData) return;

    const handleClose = () => setDeleteDialogOpen(false);

    return (
        <Dialog
            open={isDeleteDialogOpen}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">Team delete</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Are you sure you wish to delete {selectedTableData[1]}'s team?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <MaterialButton onClick={handleClose}>
                    Cancel
                </MaterialButton>
                <MaterialButton onClick={() => {
                    deleteTeamApi(selectedTableData[0], openSnackbar, loader);
                    handleClose();
                }} color="primary" autoFocus>
                    Delete
                </MaterialButton>
            </DialogActions>
        </Dialog>
    )
};

/** Table component aligned with prototype styling.  Accepts the same props from [MUI-Datatables](https://github.com/gregnb/mui-datatables) */
const Table = (props) => {
    const {classes, title, options, showButton, loader, ...dataTablePropsRest} = props;
    const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [selectedTableData, setSelectedTableData] = useState(null);
    const [openSnackbar] = useSnackbar(defaultToastConfig);
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
            customRowRender: (data) => customRowRenderLogic(data, classes, setDeleteDialogOpen, setSelectedTableData),
            customToolbar: ({displayData}) => {
                return <div>
                    {showButton && <Button variant="contained" onClick={() => history.push("/form")}>
                        <AddIcon style={{fontSize: "1.5rem"}}/>
                    </Button>}
                </div>
            },
            ...options,
        }
    };

    return (
        <MuiThemeProvider theme={getMuiTheme(theme)}>
            <MUIDataTable {...dataTableProps} />
            {deleteDialog(selectedTableData, isDeleteDialogOpen, setDeleteDialogOpen, openSnackbar, loader)}
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