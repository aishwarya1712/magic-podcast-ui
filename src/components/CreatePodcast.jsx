import { Typography } from "@mui/material";
import React from "react";
import {Stack} from "@mui/material";

const CreatePodcast = () => {
    return (
        <Stack>
            <Typography sx={{fontFamily:"Inter", fontSize: "32px", fontWeight: 700}}>Create your new podcast</Typography>
        </Stack>
        
    )
}

export default CreatePodcast;