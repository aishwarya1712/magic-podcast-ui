import React from "react";
import { Typography, Stack, Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <Stack direction="row" justifyContent={"space-between"} alignItems={"center"}>
            <Typography variant="h4" component="h1" sx={{ mb: 2, fontSize: "40px", fontWeight: 700, fontFamily: "Inter" }}>
                Nyous
            </Typography>
            <Link to="createpodcast"><Button variant="contained" startIcon={<AddCircleIcon/>}>New Podcast</Button></Link>
        </Stack>
    )
}

export default Home;