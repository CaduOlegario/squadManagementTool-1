import React, {useState} from 'react';
import {Typography, TextField} from "@material-ui/core";

const Input = (props) => {
    const [isFocused, setFocused] = useState(false);

    return (
        <div>
            <Typography variant="subtitle1" color={isFocused ? "primary" : ""}>
                {props.label}
            </Typography>
            <TextField
                {...props}
                label=""
                variant="outlined"
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)} />
        </div>

    )
};

export default Input;