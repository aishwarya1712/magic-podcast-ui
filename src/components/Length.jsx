import React from "react";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const lengths = [
    {
        name: "5 mins",
        value: 5
    },
    {
        name: "15 mins",
        value: 15
    },
    {
        name: "30 mins",
        value: 30
    },
    {
        name: "1 hour",
        value: 60
    }
]
const Length = ({length, setLength}) => {

    const handleClick = (el) => {
        setLength(el.value)
    }
    return (
    <Stack sx={{mt: 2}} direction="row" spacing={1}>

    {lengths.map((el, key) => {
        return <Chip  sx={{backgroundColor: length == el.value ? "#1976d2" : "", color: length == el.value ? "#ffffff" : ""}} key={key} label={el.name} variant="outlined" onClick={() => handleClick(el)}/>
    })}
    </Stack>
    )
}

export default Length;