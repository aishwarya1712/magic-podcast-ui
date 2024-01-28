import React, { useState, useEffect } from "react";
import { Typography, Stack, Button, Box } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link } from "react-router-dom";


const Home = () => {
    const [audioSrc, setAudioSrc] = useState('');
    
    async function fetchAudio(url) {
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return await response.blob();
        } catch (error) {
          console.error("Error fetching audio:", error);
        }
      }

    useEffect(() => {
        fetchAudio("http://127.0.0.1:5000/get_mp3").then(blob => {
          if (blob) {
            const localUrl = URL.createObjectURL(blob);
            console.log("LOCAL URL: ", localUrl)
            setAudioSrc(localUrl);
          }
        });
      }, []);

    return (
        <Stack>
        <Stack direction="row" justifyContent={"space-between"} alignItems={"center"}>
            <Typography variant="h4" component="h1" sx={{ mb: 2, fontSize: "40px", fontWeight: 700, fontFamily: "Inter" }}>
                Nyous
            </Typography>
            <Link to="createbriefing"><Button variant="contained" startIcon={<AddCircleIcon/>}>New Podcast</Button></Link>
        </Stack>
        <Box sx={{width: "480px", height: "480px", background: "#D9D9D9"}}/>
        <audio controls src={audioSrc}>
            Your browser does not support the audio element.
        </audio>
        </Stack>
    )
}

export default Home;