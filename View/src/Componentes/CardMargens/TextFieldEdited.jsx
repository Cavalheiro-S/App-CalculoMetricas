import { TextField } from "@material-ui/core"
import React,{ useState,useContext } from "react"
import Validation from "../../contexts/validation";

export default function TextFieldEdited({value,id,label,setField}){

    const [erro, setErro] = useState({value:false, message:""});
    const validacao = useContext(Validation);
    return(
        <TextField
            value={value}
            color="success"
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