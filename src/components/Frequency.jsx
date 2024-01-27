import React from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';

const frequencies = [
    {
        name: "Daily"
    },
    {
        name: "Weekly"
    }
]

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const Frequency = ({frequency, setFrequency, dayOfWeek, setDayOfWeek}) => {
    return (
        <Stack direction="row" spacing={2} alignItems={"center"}>
            {frequencies.map((el, key) => {
                return (
                    <Button onClick={() => setFrequency(el.name)} key={key} sx={{width: "240px", fontFamily: "Inter"}} variant={frequency == el.name ? "contained" : "outlined"}>{el.name}</Button>
                )
            })}

            {frequency == "Weekly" && days.map((el, key) => {
                return (
                    <Avatar onClick={() => setDayOfWeek(el)} sx={{fontFamily: "Inter", backgroundColor: el == dayOfWeek ? "#1976d2" : "#ffffff", color: el == dayOfWeek ? "#ffffff" : "#000000", border: el == dayOfWeek ? "1px solid #1976d2" : "1px solid #bdbdbd", width: 24, height: 24, fontSize: "10px"}} key={key}>{el[0]}</Avatar>
                )
            })}
        </Stack>
    )
}

export default Frequency;