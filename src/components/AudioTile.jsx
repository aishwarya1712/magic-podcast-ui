import React from "react";
import { Box, Typography } from "@mui/material";

const AudioTile = ({size="160px", title="Episode", style}) => {
    return (
        <div style={style}>
            <Box sx={{width:size, height: size, background: "#444444"}}/>
            <Typography sx={{width: size, fontFamily:"Inter",  color: "#FFFFFF",fontSize: "14px", fontWeight: 400}}>{title}</Typography>
        </div>
    )
}

export default AudioTile;