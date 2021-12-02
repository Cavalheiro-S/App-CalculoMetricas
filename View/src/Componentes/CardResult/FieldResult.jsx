import React from 'react'
import { Box } from '@material-ui/system'

export default function FieldResult({title,value}){

    return (
        <Box 
            sx={{
                height:"50px",
                width:"50%",
                color:"green",
                border:"1px solid green",
                borderRadius:"10px",
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                fontSize:"1.3em",
                margin:"auto"
                }}
        >
            <span>{title}: {value}%</span>
        </Box>
    )
    
}