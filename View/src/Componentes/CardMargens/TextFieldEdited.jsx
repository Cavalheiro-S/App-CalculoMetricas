import { TextField } from "@material-ui/core"
import React,{ useState } from "react"

export default function TextFieldEdited({value,id,label,validacao,setField}){

    const [erro, setErro] = useState({value:false, message:""});
    return(
        <TextField
            value={value} 
            id={id}
            label={label}
            error={erro.value}
            helperText={erro.message}
            size="medium"
            onChange={e => {
                setField(e.target.value)
            }}
            onBlur={e => {
                const [valido,message] = validacao(e.target.value)
                
                setErro({
                    value:valido,
                    message:message
                })
            }}
        />
    )
}