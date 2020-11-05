import React, {useEffect, useState} from 'react';
import TeamsTable from "./TeamsTable";
import Grid from "@material-ui/core/Grid";
import LoadingSpinner from "components/layout/loadingSpinner/LoadingSpinner";
import {useSnackbar} from 'react-simple-snackbar'
import defaultToastConfig from "utils/ToastUtils";
import PaperTitle from "components/layout/paperTitle/PaperTitle";
import Paper from "@material-ui/core/Paper/Paper";
import PlayerPickRank from "components/pages/PlayerPickRank";
import TeamApi from "api/TeamApi";
import {HandleApi} from "utils/apiUtils";

const getTeamsFromApi = (setData, setLoading, openSnackbar) => {
    const saveFormattedTeams = (data) => {
        const filteredData = data.map(item => ({
            id: item.team.id,
            name: item.team.name,
            description: item.team.name + " squad"
        }));
        setData(filteredData);
    };

    const handleNotification = isSuccess => openSnackbar("teams", isSuccess);

    HandleApi(TeamApi.getTeams, setLoading, saveFormattedTeams, handleNotification);
};

const getPlayersFromApi = (setData, setLoading, openSnackbar) => {
    const saveFormattedPlayers = (data) => {
        const filteredData = data.map(item => ({
            id: item.player.id,
            name: item.player.name,
            appearances: item.statistics.length
        }));
        setData(filteredData);
    };

    const handleNotification = isSuccess => openSnackbar("players", isSuccess);

    HandleApi(TeamApi.getPlayers, setLoading, saveFormattedPlayers, handleNotification);
};


const Dashboard = () => {
    const [teams, setTeams] = useState([]);
    const [players, setPlayers] = useState([]);
    const [teamsApiLoading, setTeamsApiLoading] = useState(false);
    const [playersApiLoading, setPlayersApiLoading] = useState(false);
    const [deleteApiLoading, setDeleteApiLoading] = useState(false);
    const [openSnackbar] = useSnackbar(defaultToastConfig);

    useEffect(() => {
        const results = {
            teams: null,
            players: null
        };

        const openSnackbarMultiple = (type, boolean) => {
            results[type] = boolean;
            if(results.teams === null || results.players === null ) {
                return;
            };
            openSnackbar(results.teams && results.players ? "Squads data retrieved successfully" : "Error retrieving squads data");
        };

        getTeamsFromApi(setTeams, setTeamsApiLoading, (...props) => openSnackbarMultiple(...props));
        getPlayersFromApi(setPlayers, setPlayersApiLoading, (...props) => openSnackbarMultiple(...props));
    }, []);

    return (
        <React.Fragment>
            <Grid container justify="center" spacing={6} style={{height: "calc(100% + 48px)" }}>
                <Grid item xs={12} lg={6} style={{maxHeight: "100%"}}>
                    <TeamsTable data={teams} loader={setDeleteApiLoading}/>
                </Grid>
                <Grid item xs={12} lg={6} container direction="column" alignItems="stretch" style={{minHeight: "100%"}}>
                    <Grid item style={{height: "60%", paddingBottom: "3%"}}>
                        <Paper elevation={1} style={{height: "100%", borderRadius: "14px"}}>
                            <PaperTitle title="Top 5"/>
                        </Paper>
                    </Grid>
                    <Grid item style={{height: "40%"}}>
                        <PlayerPickRank data={players} teamCount={teams.length}/>
                    </Grid>
                </Grid>
            </Grid>
            <LoadingSpinner visible={teamsApiLoading || playersApiLoading || deleteApiLoading} />
        </React.Fragment>
    )
};

export default Dashboard;