import { Box } from "@material-ui/system";
import React, { useState } from "react";
import CardMargens from "../CardMargens";
import CardResult from "../CardResult";


export default function CardMain(){

    const [margemBruta,setMargemBruta] = useState(0);
    const [margemOperacional, setMargemOperacional] = useState(0);
    const [margemLiquida, setMargemLiquida] = useState(0);


    function validacao(value){

        if(value.length <= 3){

            return [true,"Número de carácteres inválido"]
        }

        return [false,""]
    }


    function takeResult(result){

        setMargemBruta(result.margemBruta);
        setMargemOperacional(result.margemOperacional);
        setMargemLiquida(result.margemLiquida);
    }


    return(
        <Box sx={{height:"500px", display:"flex",alignItems:"center", justifyContent:"space-around"}}>
            <CardMargens validacao={validacao} takeResult={takeResult}/>
            <CardResult margemBruta={margemBruta}
            margemOperacional={margemOperacional}
            margemLiquida={margemLiquida}/>
        </Box>
    )
}