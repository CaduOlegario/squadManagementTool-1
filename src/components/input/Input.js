import React, {useState} from 'react';
import {Typography, TextField} from "@material-ui/core";

const Input = (props) => {
    const [isFocused, setFocused] = useState(false);

    return (
        <div>
            <Typography variant="subtitle1" color={isFocused ? "primary" : ""}>
                Nome
            </Typography>
            <TextField
                {...props}
                variant="outlined"
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)} />
        </div>

    )
};

export default Input;