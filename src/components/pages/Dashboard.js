import React from 'react';
import TeamsTable from "./TeamsTable";
import Grid from "@material-ui/core/Grid";
import TopList from "./TopList";

const Dashboard = () => {
    const data = [
        {id: 1, name: "Jose", description: "Tester da Venturus"},
        {id: 2, name: "Miguel", description: "Jogador famosão do Flamengo"}
    ];

    return (
        <Grid container justify="center" spacing={6} style={{height: "calc(100% + 48px)" }}>
            <Grid item xs={6}>
                <TeamsTable data={data}/>
            </Grid>
            <Grid item xs={6} container direction="column" spacing={6} alignItems="stretch">
                <Grid item style={{height: "50%"}}>
                    <TopList/>
                </Grid>
                <Grid item style={{height: "50%"}}>
                    <TopList/>
                </Grid>
            </Grid>
        </Grid>
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
