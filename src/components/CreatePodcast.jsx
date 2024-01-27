import React, { useState } from "react";
import { Typography } from "@mui/material";
import {Stack} from "@mui/material";
import Topics from "./Topics";
import {Button} from "@mui/material";
import Length from "./Length";

const CreatePodcast = () => {
    const [topics, setTopics] = useState([""]);
    const [length, setLength] = useState(null);

    const handleSubmit = () => {
        console.log("Selected topics: ", topics)
        console.log("Selected length: ", length)
    }

    return (
        <Stack>
            <Typography sx={{fontFamily:"Inter", fontSize: "32px", fontWeight: 700, mb: "48px"}}>Create your new podcast</Typography>
            <Typography sx={{fontFamily: "Inter", fontSize: "16px", fontWeight: 700}}>What do you want to hear about?</Typography>
            <Topics formValues={topics} setFormValues={setTopics} />

            <Typography sx={{fontFamily: "Inter", fontSize: "16px", fontWeight: 700, mt: "48px"}}>Length</Typography>
            <Length length={length} setLength={setLength}/>

            <Button onClick={handleSubmit}>Submit</Button>
            
        </Stack>
        
    )
}

export default CreatePodcast;