import React from 'react'
import InputBase from '@mui/material/InputBase';
import { Box } from '@mui/material';
import { ReactComponent as IdeaIcon } from "../idea.svg";
import {SvgIcon} from '@mui/material';
import {Stack} from '@mui/material';
import {Button} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

const Topics = ({formValues, setFormValues}) => {

    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i] = e.target.value;
        setFormValues(newFormValues);
      }
    
    let addFormFields = () => {
        setFormValues([...formValues, ""])
    }

    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }
    

    return (
        <Stack>
          {formValues.map((element, index) => (
            
            <span key={index}>
                <Stack direction="row" alignItems="center">
                <Box sx={{marginTop: "14px", p: 0.5, maxWidth: "640px", background: "#D9D9D9", borderRadius: "8px"}}>
                    <Stack direction="row" alignItems={"center"} spacing={1}>
                        <SvgIcon sx={{p: 0.5}}>
                            <IdeaIcon />
                        </SvgIcon>
                        <InputBase placeholder="Enter a topic..." sx={{fontFamily:"Inter", width: "640px", background: "#FFFFFF", pl: 1}} id="topic-input" name="topic" value={element || ""} onChange={e => handleChange(index, e)}/>
                        
                    </Stack>
                  
                </Box>
                { index ?  <IconButton sx={{mt: 2}} onClick={() => removeFormFields(index)} aria-label="delete"> <DeleteIcon sx={{color: "#FFFFFF"}} /></IconButton>: null }
              </Stack>
              
              
            </span>
          ))}
          <Button onClick={addFormFields} sx={{fontFamily: "Inter", width: "140px", height: "38px", mt: 2}} variant="contained" startIcon={<AddCircleIcon/>}>Add Topic</Button>
      </Stack>
    )
}

export default Topics;