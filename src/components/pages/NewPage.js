import React from 'react';
import Input from "../input/Input";
import Box from "@material-ui/core/Box";

const NewPage = () => {
    return (
        <Box p={8}>
            <Input placeholder="Maximum 10 digits" />
        </Box>
    )
};

export default NewPage;