import React, {useState} from 'react';
import Paper from "@material-ui/core/Paper/Paper";
import PaperTitle from "components/layout/paperTitle/PaperTitle";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Input from "components/layout/input/Input";
import {Typography} from "@material-ui/core";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Tags from "components/layout/tags/Tags";
import Button from "components/layout/button/Button";
import defaultToastConfig from "utils/ToastUtils";
import {Controller, useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import LoadingSpinner from "components/layout/loadingSpinner/LoadingSpinner";
import StringUtils from "utils/StringUtils";
import TeamApi from "api/TeamApi";
import {useSnackbar} from 'react-simple-snackbar'

const TeamForm = () => {
    const [showLoadingSpinner, setShowLoadingSpinner] = useState(false);
    const history = useHistory();
    const [openSnackbar] = useSnackbar(defaultToastConfig);
    const {register, handleSubmit, control, errors, reset} = useForm({shouldFocusError: false});


    const saveTeam = (value) => {
        setShowLoadingSpinner(true);

        TeamApi.saveTeam(value).then(response => {
            if (response.success) {
                openSnackbar(response.message);
                setShowLoadingSpinner(false);
                reset();
                setTimeout(() => history.push("/"), 2000);
            } else {
                openSnackbar(response.message);
            }
        }, error => {
            openSnackbar("Error when trying to save team");
        });
    };


    return (
        <React.Fragment>
            <Paper elevation={1} style={{height: "100%"}}>
                <PaperTitle title="Create your team"/>
                <Box mr={11} ml={11}>
                    <Box p={4} mb={3} textAlign="center" fontWeight={600} style={{color: "rgb(149,149,149)"}}>
                        TEAM INFORMATION
                    </Box>
                    <form onSubmit={handleSubmit((value) => {
                        saveTeam(value)
                    })}>
                        <Grid container spacing={4} justify="space-evenly">
                            <Grid item container direction="column" spacing={2} xs={5}>
                                <Grid item>
                                    <Input
                                        inputRef={register({
                                            required: true
                                        })}
                                        placeholder="Insert team name"
                                        label="Team name"
                                        name="name"
                                        error={!!errors.name}
                                    />
                                </Grid>
                                <Grid item>
                                    <Input
                                        label="Description"
                                        name="description"
                                        multiline
                                        rows={11}
                                        inputRef={register}
                                    />
                                </Grid>
                            </Grid>
                            <Grid item container direction="column" spacing={2} xs={5}>
                                <Grid item>
                                    <Input
                                        label="Team website"
                                        name="website"
                                        error={!!errors.website}
                                        inputRef={register({
                                            required: true,
                                            validate: value => StringUtils.validateUrl(value)
                                        })}
                                        placeholder="http://myteam.com"
                                    />
                                </Grid>
                                <Grid item>
                                    <Box mb={0.5}>
                                        <Typography
                                            variant="subtitle1"
                                            color={!!errors.type ? "primary" : undefined}>
                                            Team type
                                        </Typography>
                                    </Box>
                                    <Controller
                                        as={
                                            <RadioGroup row>
                                                <FormControlLabel
                                                    value="real"
                                                    control={<Radio/>}
                                                    label="Real"/>
                                                <FormControlLabel
                                                    value="fantasy"
                                                    control={<Radio/>}
                                                    label="Fantasy"/>
                                            </RadioGroup>
                                        }
                                        rules={{required: true}}
                                        name="type"
                                        control={control}
                                    />
                                </Grid>
                                <Grid item>
                                    <Tags
                                        label="Tags"
                                        name="tags"
                                        placeholder="Fill with you team's tags"
                                        inputRef={register}
                                    />
                                </Grid>
                                <Grid item>
                                    <Button type="submit" fullWidth>
                                        <Typography variant="subtitle1">
                                            Save
                                        </Typography>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Paper>
            <LoadingSpinner visible={showLoadingSpinner}/>
        </React.Fragment>
    )
};

export default TeamForm;