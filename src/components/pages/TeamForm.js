import React, {Component} from 'react';
import Paper from "@material-ui/core/Paper/Paper";
import PaperTitle from "../layout/PaperTitle";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Input from "../layout/Input";
import {Typography} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Tags from "../layout/Tags";
import Button from "../layout/Button";
import { withSnackbar } from 'react-simple-snackbar'
import defaultToastConfig from "../../utils/ToastUtils";

class TeamForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showLoadingSpinner: false,
            team: {
                name: "",
                website: "",
                description: "",
                type: null,
                tags: []
            }
        };
    }

    handleInputChange = (event, type) => {
        const value = event.target.value
        this.handleFormChange(value, type);
    };

    handleFormChange = (value, type) => {
        this.setState({
            ...this.state,
            team: {
                ...this.state.team,
                [type]: value,
            }
        })
    };

    validateSave = () => {
        const { openSnackbar } = this.props;
        const {name, website, type} = this.state.team;
        if (!name || !website || !type) {
            openSnackbar("Name and Website are required")
        }

    };

    render() {
        const {name, website, description, type, tags} = this.state.team;

        return (
            <React.Fragment>
                <Paper elevation={1} style={{height: "100%"}}>
                    <PaperTitle title="Create your team"/>
                    <Box mr={11} ml={11}>
                        <Box p={4} mb={3} textAlign="center" fontWeight={600} style={{color: "rgb(149,149,149)"}}>
                            TEAM INFORMATION
                        </Box>
                        <Grid container spacing={4} justify="space-evenly">
                            <Grid item container direction="column" spacing={2} xs={5}>
                                <Grid item>
                                    <Input
                                        placeholder="Insert team name"
                                        label="Team name"
                                        required
                                        validator
                                        value={name}
                                        onChange={e => this.handleInputChange(e, 'name')}
                                    />
                                </Grid>
                                <Grid item>
                                    <Input
                                        label="Description"
                                        multiline
                                        rows={11}
                                        value={description}
                                        onChange={e => this.handleInputChange(e, 'description')}
                                    />
                                </Grid>
                            </Grid>
                            <Grid item container direction="column" spacing={2} xs={5}>
                                <Grid item>
                                    <Input
                                        label="Team website"
                                        required
                                        validate="website"
                                        value={website}
                                        placeholder="http://myteam.com"
                                        onChange={e => this.handleInputChange(e, 'website')}
                                    />
                                </Grid>
                                <Grid item>
                                    <FormControl component="fieldset">
                                        <Box mb={0.5}>
                                            <Typography variant="subtitle1">
                                                Team type
                                            </Typography>
                                        </Box>
                                        <RadioGroup row aria-label="gender" name="gender1"
                                                    value={type}
                                                    onChange={e => this.handleInputChange(e, 'type')}
                                        >
                                            <FormControlLabel
                                                value="real"
                                                control={<Radio />}
                                                label={<div>
                                                    Real
                                                </div>} />
                                            <FormControlLabel
                                                value="fantasy"
                                                control={<Radio />}
                                                label={<div>
                                                    Fantasy
                                                </div>} />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                                <Grid item>
                                    <Tags
                                        label="Tags"
                                        placeholder="Fill with you team's tags"
                                        value={tags}
                                        onChange={(e, values) => this.handleFormChange(values, 'tags')}
                                    />
                                </Grid>
                                <Grid item>
                                    <Button variant="contained" fullWidth onClick={() => this.validateSave()}>
                                        <Typography variant="subtitle1">
                                            Save
                                        </Typography>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
            </React.Fragment>
        )
    }

}

export default withSnackbar(TeamForm, defaultToastConfig);