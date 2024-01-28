import React, { useState, useEffect } from "react";
import { Stack, Button, Box, Typography } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link } from "react-router-dom";
import AudioTile from "./AudioTile";
import { useLocation } from 'react-router-dom';

const Home = () => {
    const [audioSrc, setAudioSrc] = useState('');
    const location = useLocation();
    // const [audioInfo, setAudioInfo] = useState();

    const useQuery = () => {
        return new URLSearchParams(location.search);
      };

      const query = useQuery();
      const someParam = query.get('query'); // Replace 'someParam' with your query parameter key
      console.log("Some param: ", someParam)
    
      const handlePostRequest = async () => {
        try {
          const response = await fetch('http://127.0.0.1:5000/x1', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ topics: topics, length: length }),
          });
    
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
    
          const blob = await response.blob();
          if(blob){
            const localUrl = URL.createObjectURL(blob);
            setAudioSrc(localUrl);
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

    //   useEffect(() => {
    //     fetch('http://127.0.0.1:5000/get_audio_data')
    //         .then(response => response.json())
    //         .then(data => setAudioInfo(data))
    //         .catch(error => console.error('Error fetching data:', error));
    // }, []);

      
    return (
        <Stack direction="row">
            <Stack spacing={4}>
                <Stack direction="row" justifyContent={"space-between"} alignItems={"center"}>
                    <Link to="createbriefing"><Button sx={{fontFamily: "Inter"}} variant="contained" startIcon={<AddCircleIcon/>}>New Briefing</Button></Link>
                </Stack>
                <Typography  sx={{fontFamily:"Inter",  color: "#FFFFFF",fontSize: "20px", fontWeight: 700, mb: "48px"}}>Today's Briefings</Typography>
                <Stack direction="row" spacing={2}>
                    <AudioTile title="Beyonce and Extreme Weather - Episode 1"/>
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
               
                <Typography  sx={{fontFamily:"Inter",  color: "#FFFFFF",fontSize: "20px", fontWeight: 600}}>AI and copyright news - Episode 2</Typography>
                <Typography  sx={{fontFamily:"Inter",  color: "#BEB9B5",fontSize: "14px", fontWeight: 400, mb: "48px"}}>27 Jan, 2024</Typography>

                <audio controls src={audioSrc}>
                    Your browser does not support the audio element.
                </audio>

                <Typography  sx={{fontFamily:"Inter",  color: "#FFFFFF",fontSize: "14px", fontWeight: 500, mb: "48px"}}>
                    The advent of advanced AI technologies has ushered in a new age of creativity and innovation. These AI systems, equipped with deep learning algorithms, can produce works that rival those created by humans in complexity and aesthetic appeal. However, this capability has sparked a contentious debate in the world of copyright law, which traditionally hinges on human authorship and originality.<br/><br/> At the heart of the debate is the question: Who owns the rights to works created by AI? This question challenges the very foundation of copyright law, which is built on the notion of human creativity and labor. Some argue that AI-generated works should be considered public domain, as they lack human authorship. Others contend that the creators or owners of the AI should hold the rights, as a recognition of their investment and the technology's role in the creative process. <br/><br/>The rise of AI in creative fields has also raised concerns about the impact on human artists and creators. While some view AI as a tool that can enhance human creativity, others fear it could devalue human-made art and lead to fewer opportunities for human artists. The challenge lies in finding a balance where AI can coexist with human creativity without undermining the value of human artistic expression. Legal Landscape and Future Directions Currently, the legal landscape surrounding AI and copyright is murky and varies significantly across different jurisdictions. <br/><br/>Some countries have started to explore legal frameworks to address these issues, but there is no international consensus. Moving forward, policymakers, legal experts, and the AI community must collaborate to develop guidelines that protect the rights of human creators while fostering innovation. Conclusion The intersection of AI and copyright law is a complex and evolving issue. It requires careful consideration of the balance between encouraging technological advancement and protecting the rights and livelihoods of human creators. As AI continues to advance, the need for clear, fair, and forward-thinking copyright laws becomes increasingly crucial.
                </Typography>
            </Stack>
        </Stack>
    )
}

export default Home;