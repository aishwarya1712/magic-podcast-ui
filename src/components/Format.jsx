import React from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import FilterNoneIcon from '@mui/icons-material/FilterNone';

const formats = [
    {
        name: "Series",
        icon: <FilterNoneIcon/>
    },
    {
        name: "Single",
        icon: <StarBorderIcon/>
    }
]
const Format = ({format, setFormat}) => {
    return (
        <Stack direction="row" spacing={2}>
            {formats.map((el, key) => {
                return (
                    <Button onClick={() => setFormat(el.name)} key={key} sx={{width: "240px", fontFamily: "Inter"}} variant={format == el.name ? "contained" : "outlined"} startIcon={el.icon}>{el.name}</Button>
                )
            })}
        </Stack>
    )
}

export default Format;