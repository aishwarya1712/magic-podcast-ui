import React, { useState, useEffect } from "react";
import { Box, TextField, Typography } from "@mui/material";
import {Stack} from "@mui/material";
import Topics from "./Topics";
import {Button} from "@mui/material";
import Length from "./Length";
import Format from "./Format";
import Frequency from "./Frequency";

const CreateBriefing = () => {
    const [topics, setTopics] = useState([""]);
    const [length, setLength] = useState(5);
    const [format, setFormat] = useState("Series");
    const [frequency, setFrequency] = useState("Daily");
    const [dayOfWeek, setDayOfWeek] = useState("Sunday");
    const [time, setTime] = useState("");
    const [listenUntil, setListenUntil] = useState("");
    const [currentTime, setCurrentTime] = useState(0);
    const [data, setData] = useState(null);
    const [responseMessage, setResponseMessage] = useState('');

    const handlePostRequest = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/post_example', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ topics: topics, length: length }),
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const data = await response.json();
        setResponseMessage(data.message);
      } catch (error) {
        console.error('Error during fetch operation:', error.message);
      }
    };

    // useEffect(() => {
    //   fetch('/time').then(res => res.json()).then(data => {
    //     setCurrentTime(data.time);
    //   });
    // }, []);


    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/data').then(res => res.json()).then(data => {
          console.log("DATA:", data)
          setData(data.message)
        });
      }, []);
    const handleSubmit = () => {
        console.log("Selected topics: ", topics)
        console.log("Selected length: ", length)
        console.log("Selected format: ", format)
        console.log("Selected frequency: ", frequency)
        console.log("Selected day of week: ", dayOfWeek)
        console.log("Selected time: ", time)
        console.log("Selected listen until: ", listenUntil)
        handlePostRequest();
        /* Call API */

    }

    return (
        <Stack direction="row" spacing={5}>
            <Stack>
                <Typography sx={{fontFamily:"Inter", fontSize: "32px", fontWeight: 700, mb: "48px"}}>Create your new briefing</Typography>
                <Typography sx={{fontFamily: "Inter", fontSize: "16px", fontWeight: 700}}>What do you want to hear about?</Typography>
                <Topics formValues={topics} setFormValues={setTopics} />

                <Typography sx={{fontFamily: "Inter", fontSize: "16px", fontWeight: 700, mt: "48px"}}>Length</Typography>
                <Length length={length} setLength={setLength}/>

                <Typography sx={{fontFamily: "Inter", fontSize: "16px", fontWeight: 700, mt: "48px"}}>Format</Typography>
                <Format format={format} setFormat={setFormat}/>
            

                <Typography sx={{fontFamily: "Inter", fontSize: "16px", fontWeight: 700, mt: "48px"}}>Frequency</Typography>
                <Frequency frequency={frequency} setFrequency={setFrequency} dayOfWeek={dayOfWeek} setDayOfWeek={setDayOfWeek}/>

                <Stack sx={{mt: "48px"}} direction="row" spacing={2} alignItems="center">
                    <Typography sx={{fontFamily: "Inter", fontSize: "16px", fontWeight: 700, mt: "48px"}}>Time of Day</Typography>
                    <TextField value={time} onChange={(e) => setTime(e.target.value)} sx={{width: "131px"}} size="small" />
                </Stack>

                <Stack sx={{mt: "48px"}} direction="row" spacing={2} alignItems="center">
                    <Typography sx={{fontFamily: "Inter", fontSize: "16px", fontWeight: 700, mt: "48px"}}>Listen Until</Typography>
                    <TextField value={listenUntil} onChange={(e) => setListenUntil(e.target.value)} sx={{width: "131px"}} size="small"/>
                </Stack>

                <Button sx={{fontFamily: "Inter", mt: "48px",width: "640px"}} variant="contained" onClick={handleSubmit}>Create Briefing</Button>
            </Stack>
            <Stack justifyContent={"center"} alignItems={"center"}>
                <Box sx={{width: "480px", height: "480px", background: "#D9D9D9"}}/>
                <Typography sx={{mt: 3, fontFamily: "Inter", fontSize: "24px", fontWeight: 700}}>AI Rights and Crypto in China</Typography>
            </Stack>
        </Stack>
        
    )
}

export default CreateBriefing;