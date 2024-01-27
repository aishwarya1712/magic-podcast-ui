import React, { useState } from "react";
import { TextField, Typography } from "@mui/material";
import {Stack} from "@mui/material";
import Topics from "./Topics";
import {Button} from "@mui/material";
import Length from "./Length";
import Format from "./Format";
import Frequency from "./Frequency";
import Time from "./Time";
import ListenUntil from "./ListenUntil";

const CreatePodcast = () => {
    const [topics, setTopics] = useState([""]);
    const [length, setLength] = useState(5);
    const [format, setFormat] = useState("Series");
    const [frequency, setFrequency] = useState("Daily");
    const [dayOfWeek, setDayOfWeek] = useState("Sunday");
    const [time, setTime] = useState("");
    const [listenUntil, setListenUntil] = useState("");

    const handleSubmit = () => {
        console.log("Selected topics: ", topics)
        console.log("Selected length: ", length)
        console.log("Selected format: ", format)
        console.log("Selected frequency: ", frequency)
        console.log("Selected day of week: ", dayOfWeek)
        console.log("Selected time: ", time)
        console.log("Selected listen until: ", listenUntil)

    }

    return (
        <Stack>
            <Typography sx={{fontFamily:"Inter", fontSize: "32px", fontWeight: 700, mb: "48px"}}>Create your new podcast</Typography>
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

            <Button sx={{fontFamily: "Inter", mt: "48px",width: "640px"}} variant="contained" onClick={handleSubmit}>Create Podcast</Button>
        </Stack>
        
    )
}

export default CreatePodcast;