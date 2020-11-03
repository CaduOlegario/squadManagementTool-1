import React, {useEffect, useState} from 'react';
import TeamsTable from "./TeamsTable";
import Grid from "@material-ui/core/Grid";
import LoadingSpinner from "../layout/LoadingSpinner";
import {useSnackbar} from 'react-simple-snackbar'
import defaultToastConfig from "../../utils/ToastUtils";
import PaperTitle from "../layout/PaperTitle";
import Paper from "@material-ui/core/Paper/Paper";
import PlayerPickRank from "./PlayerPickRank";

const Dashboard = () => {
    const [teams, setTeams] = useState([]);
    const [players, setPlayers] = useState([]);
    const [showLoadingSpinner, setShowLoadingSpinner] = useState(false);
    const [openSnackbar, closeSnackbar] = useSnackbar(defaultToastConfig);

    useEffect(() => {
        // setShowLoadingSpinner(true);
        // TeamApi.getTeams().then(response => {
        //     const responseData = response.data.response;
        //
        //     if(responseData) {
        //         const filteredData = responseData.map(item => ({
        //             id: item.team.id,
        //             name: item.team.name,
        //             description: item.team.name + " squad"
        //         }));
        //         setTeams(filteredData);
        //         setShowLoadingSpinner(false);
        //         openSnackbar('Teams recovered successfully');
        //     } else {
        //         setTeams([]);
        //         setShowLoadingSpinner(false);
        //         openSnackbar(responseData.errors.get(0));
        //     }
        // }).catch(() => {
        //     setShowLoadingSpinner(false);
        //     openSnackbar("Error when trying to recover teams");
        // })

        setTeams([
            {id: 1, name: "a", description: "a2"},
            {id: 2, name: "a", description: "a2"},
            {id: 3, name: "a", description: "a2"},
            {id: 4, name: "a", description: "a2"},
            {id: 5, name: "a", description: "a2"},
            {id: 6, name: "a", description: "a2"},
            {id: 7, name: "a", description: "a2"},
            {id: 8, name: "a", description: "a2"},
            {id: 9, name: "a", description: "a2"},
            {id: 12, name: "a", description: "a2"},
            {id: 13, name: "a", description: "a2"},
        ]);

        // setShowLoadingSpinner(true);
        // TeamApi.getPlayers().then(response => {
        //
        //     const responseData = response.data.response;
        //
        //     if(responseData) {
        //         const filteredData = responseData.map(item => ({
        //             id: item.player.id,
        //             name: item.player.name,
        //             appearances: item.statistics[0].games.appearences
        //         }));
        //         setPlayers(filteredData);
        //         setShowLoadingSpinner(false);
        //         openSnackbar('Teams recovered successfully');
        //     } else {
        //         setPlayers([]);
        //         setShowLoadingSpinner(false);
        //         openSnackbar(responseData.errors.get(0));
        //     }
        // }).catch(() => {
        //     setShowLoadingSpinner(false);
        //     openSnackbar("Error when trying to recover teams");
        // })


        setPlayers([
            {id: 1, name: "a b",appearences: 1},
            {id: 2, name: "a c",appearences: 9}

        ]);
    }, []);

    return (
        <React.Fragment>
            <Grid container justify="center" spacing={6} style={{height: "calc(100% + 48px)" }}>
                <Grid item xs={6} style={{maxHeight: "100%"}}>
                    <TeamsTable data={teams}/>
                </Grid>
                <Grid item xs={6} container direction="column" spacing={3} alignItems="stretch">
                    <Grid item style={{height: "60%"}}>
                        <Paper elevation={1} style={{height: "100%"}}>
                            <PaperTitle title="Top 5"/>
                        </Paper>
                    </Grid>
                    <Grid item style={{height: "40%"}}>
                        <PlayerPickRank data={players}/>
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
