import React, { useState, useEffect } from "react";
import { Stack, Button, Box, Typography } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link } from "react-router-dom";
import AudioTile from "./AudioTile";
import { useLocation } from 'react-router-dom';

const Home = () => {
    const [audioSrc, setAudioSrc] = useState('');
    const location = useLocation();
    const [audioInfo, setAudioInfo] = useState({summary:'', title:''});

    const useQuery = () => {
        return new URLSearchParams(location.search);
      };

      const query = useQuery();
      const someParam = [query.get('query')]; // Replace 'someParam' with your query parameter key
      console.log("Some param: ", someParam)
    
      const handlePostRequest = async () => {
        try {
          const response = await fetch('http://127.0.0.1:5000/x1', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ topics: someParam, length: 15 }),
          });
    
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
    
          const blob = await response.blob();
          if(blob){
            const localUrl = URL.createObjectURL(blob);
            setAudioSrc(localUrl);
            getAudioData();
          }
        } catch (error) {
          console.error('Error during fetch operation:', error.message);
        }
      };

      useEffect(() => {
        handlePostRequest();
      }, [])
    // async function fetchAudio(url) {
    //     try {
    //       const response = await fetch(url);
    //       if (!response.ok) {
    //         throw new Error(`HTTP error! Status: ${response.status}`);
    //       }
    //       return await response.blob();
    //     } catch (error) {
    //       console.error("Error fetching audio:", error);
    //     }
    //   }

    // useEffect(() => {
    //     fetchAudio("http://127.0.0.1:5000/get_mp3").then(blob => {
    //       if (blob) {
    //         const localUrl = URL.createObjectURL(blob);
    //         setAudioSrc(localUrl);
    //       }
    //     });
    //   }, []);

    const getAudioData = () => {
        fetch('http://127.0.0.1:5000/get_title')
        .then(response => response.json())
        .then(data => {
          console.log("DATA: ", data)
          setAudioInfo(data)})
        .catch(error => console.error('Error fetching data:', error));
    }

      
    return (
        <Stack direction="row">
            <Stack spacing={4}>
                <Stack direction="row" justifyContent={"space-between"} alignItems={"center"}>
                    <Link to="createbriefing"><Button sx={{fontFamily: "Inter"}} variant="contained" startIcon={<AddCircleIcon/>}>New Briefing</Button></Link>
                </Stack>
                <Typography  sx={{fontFamily:"Inter",  color: "#FFFFFF",fontSize: "20px", fontWeight: 700, mb: "48px"}}>Today's Briefings</Typography>
                <Stack direction="row" spacing={2}>
                    <AudioTile title={audioInfo.title}/>
                </Stack>
               

                <Typography  sx={{fontFamily:"Inter",  color: "#FFFFFF",fontSize: "20px", fontWeight: 700, mb: "48px"}}>News Series</Typography>
                <Stack direction="row" spacing={2}>
                    <AudioTile/>
                    <AudioTile/>
                    <AudioTile/>
                    <AudioTile/>
                </Stack>

                <Typography  sx={{fontFamily:"Inter",  color: "#FFFFFF",fontSize: "20px", fontWeight: 700, mb: "48px"}}>News Singles</Typography>
                <Stack direction="row" spacing={2}>
                    <AudioTile/>
                    <AudioTile/>
                    <AudioTile/>
                </Stack>
                
            </Stack>
            <Stack sx={{background: "#3A3531", width: "100%", p:1, m: 1}} alignItems={"center"} spacing={2}>
                <AudioTile size="240px" title="" style={{marginTop: "24px"}} />
               
                <Typography  sx={{fontFamily:"Inter",  color: "#FFFFFF",fontSize: "20px", fontWeight: 600}}>{audioInfo.title}</Typography>
                <Typography  sx={{fontFamily:"Inter",  color: "#BEB9B5",fontSize: "14px", fontWeight: 400, mb: "48px"}}>27 Jan, 2024</Typography>

                <audio controls src={audioSrc}>
                    Your browser does not support the audio element.
                </audio>

                <Typography  sx={{fontFamily:"Inter",  color: "#FFFFFF",fontSize: "14px", fontWeight: 500, mb: "48px"}}>
                    {audioInfo.summary}
                </Typography>
            </Stack>
        </Stack>
    )
}

export default Home;