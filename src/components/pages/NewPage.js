import React, {useState} from 'react';
import Input from "../layout/Input";
import Box from "@material-ui/core/Box";
import TablePage from "./TablePage";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import StringUtils from "../../utils/StringUtils";

const NewPage = () => {
    const [radio, setRadio] = useState("female");

    const data = [
        {id: 1, name: "Jose", cnpj: "123"}
    ];

    return (
        <Box p={8}>
            <Input
                placeholder="Maximum 10 digits"
                label="Nome"
            />
            <p>{StringUtils.getNameInitials("Marcio Cavalcantes Limeira")}</p>
            <TablePage data={data}/>
            <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={radio} onChange={setRadio}>
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
            </FormControl>
        </Box>
    )
};

export default NewPage;