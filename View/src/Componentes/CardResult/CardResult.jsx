import { Box } from "@material-ui/system";
import { Button, ButtonGroup, Typography } from "@material-ui/core";
import FieldResult from "./FieldResult.jsx";
import { useState } from "react";

export default function CardResult({margemBruta,margemOperacional,margemLiquida}){

    const [step, setStep] = useState(0);

    function changeStep(value){

        switch(value){
            case 0:
                return <> </>
            case 1:
                return <FieldResult title="Margem Bruta" value={margemBruta}/>
            case 2:
                return <FieldResult title="Margem Operacional" value={margemOperacional}/>
            case 3:
                return <FieldResult title="Margem Líquida" value={margemLiquida}/>
            default:
                return <> </>
        }
    
    }

    return(
        <Box sx={{height:"500px",width:"600px",boxSizing:"border-box",backgroundColor:"#f4f4f4", padding:"10px",borderRadius:"0px 10px 10px 0px"}}>
            
            <Typography margin="20px 0px" component="h2" variant="h4" sx={{fontWeight:"lighter"}}> RESULTADOS</Typography>
            <ButtonGroup fullWidth={true} color="success" sx={{margin:"50px 0px"}}> 
                <Button variant="contained" onClick={e => setStep(1)}>
                    Margem Bruta 
                </Button>
                <Button variant="contained" onClick={e => setStep(2)}>
                    Margem Operacional 
                </Button>

                <Button variant="contained" onClick={e => setStep(3)}>
                    Margem Líquida
                </Button>
            </ButtonGroup>
            {changeStep(step)}
        </Box>
    )
}

