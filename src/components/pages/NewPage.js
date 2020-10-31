import React from 'react';
import TablePage from "./TablePage";
import Grid from "@material-ui/core/Grid";

const NewPage = () => {
    const data = [
        {id: 1, name: "Jose", description: "Tester da Venturus"},
        {id: 2, name: "Miguel", description: "Jogador famosão do Flamengo"}
    ];

    return (
        <Grid container justify="center" spacing={6} style={{height: "calc(100% + 48px)" }}>
            <Grid item xs={6}>
                <TablePage data={data}/>
            </Grid>
            <Grid item xs={6}>
                <TablePage data={data}/>
            </Grid>
        </Grid>
    )
};

export default NewPage;


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
