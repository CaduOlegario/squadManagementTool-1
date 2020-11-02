import React, {useEffect, useState} from 'react';
import TeamsTable from "./TeamsTable";
import Grid from "@material-ui/core/Grid";
import TopList from "./TopList";
import TeamApi from "../../api/TeamApi";
import LoadingSpinner from "../layout/LoadingSpinner";
import { useSnackbar } from 'react-simple-snackbar'
import defaultToastConfig from "../../utils/ToastUtils";
import PaperTitle from "../layout/PaperTitle";
import Paper from "@material-ui/core/Paper/Paper";

const Dashboard = () => {
    const [teams, setTeams] = useState([]);
    const [showLoadingSpinner, setShowLoadingSpinner] = useState(false);
    const [openSnackbar, closeSnackbar] = useSnackbar(defaultToastConfig);

    useEffect(() => {

        setShowLoadingSpinner(true);
        TeamApi.getTeams().then(response => {
            const api = response.api;
            if(api.teams) {
                const filteredData = api.teams.map(item => ({
                    id: item.team_id,
                    name: item.name,
                    description: item.name + " Squad"
                }));
                setTeams(filteredData);
                setShowLoadingSpinner(false);
                openSnackbar('Teams recovered successfully');
            } else if(api.error) {
                setTeams([]);
                setShowLoadingSpinner(false);
                openSnackbar(api.error);
            }
        }).catch(() => {
            setShowLoadingSpinner(false);
            openSnackbar("Error when trying to recover teams");
        })
    }, []);

    return (
        <React.Fragment>
            <Grid container justify="center" spacing={6} style={{height: "calc(100% + 48px)" }}>
                <Grid item xs={6}>
                    <TeamsTable data={teams}/>
                </Grid>
                <Grid item xs={6} container direction="column" spacing={6} alignItems="stretch">
                    <Grid item style={{height: "50%"}}>
                        <Paper elevation={1} style={{height: "100%"}}>
                            <PaperTitle title="Top 5"/>
                        </Paper>
                    </Grid>
                    <Grid item style={{height: "50%"}}>
                        <Paper elevation={1} style={{height: "100%"}}>
                            <PaperTitle title="Picked Players"/>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
            <LoadingSpinner visible={showLoadingSpinner} />
        </React.Fragment>
    )
};

export default Dashboard;


{/*<Box p={8}>*/}
{/*    <Input*/}
{/*        placeholder="Maximum 10 digits"*/}
{/*        label="Nome"*/}
{/*    />*/}
{/*    <p>{StringUtils.getNameInitials("Marcio Cavalcantes Limeira")}</p>*/}
{/*    <FormControl component="fieldset">*/}
{/*        <FormLabel component="legend">Gender</FormLabel>*/}
{/*        <RadioGroup aria-label="gender" name="gender1" value={radio} onChange={setRadio}>*/}
{/*            <FormControlLabel value="female" control={<Radio />} label="Female" />*/}
{/*            <FormControlLabel value="male" control={<Radio />} label="Male" />*/}
{/*            <FormControlLabel value="other" control={<Radio />} label="Other" />*/}
{/*        </RadioGroup>*/}
{/*    </FormControl>*/}
{/*</Box>*/}
