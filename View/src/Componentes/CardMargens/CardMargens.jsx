import { useState } from "react";
import { Box, Button, Typography } from "@material-ui/core";
import TextFieldEdited from "./TextFieldEdited";

export default function CardMargens({takeResult}) {

    const [receitaBruta, setReceitaBruta] = useState("");
    const [receitaLiquida, setReceitaLiquida] = useState("");
    const [lucroBruto, setlucroBruto] = useState("");
    const [lucroOperacional, setlucroOperacional] = useState("");
    const [lucroLiquido, setlucroLiquido] = useState("");


    function handleSendValues(){

        const data = {
            receitaBruta,
            receitaLiquida,
            lucroBruto,
            lucroOperacional,
            lucroLiquido
        }

        const optionsFetch = {
            method: "POST",
            headers: {
                'Accept': "application/json",
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }
        fetch("http://localhost:5050/calcular", optionsFetch)
            .then(resp => resp.json())
            .then(resp => takeResult(resp));

    }

    return (
        <Box sx={{ width: "300px", backgroundColor: "#f4f4f4", padding: "0px 20px", borderRadius: "10px 0px 0px 10px" , borderRight:"1px solid #c4c4c4", boxSizing: "border-box" }}>
            <Box sx={{ height: "500px", display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
                <Typography sx={{fontWeight:"lighter"}} variant="h5"> Digite os dados:</Typography>

                <TextFieldEdited value={receitaBruta} id={"receitaBruta"} label={"Digite a Receita Bruta"} 
                setField={setReceitaBruta}
                />
                <TextFieldEdited value={receitaLiquida} id={"receitaLiquida"} label={"Digite a Receita Líquida"} 
                setField={setReceitaLiquida}
                />
                
                <TextFieldEdited value={lucroBruto} id={"lucroBruto"} label={"Digite o Lucro Bruto"} 
                setField={setlucroBruto}
                />
                
                <TextFieldEdited value={lucroOperacional} id={"lucroOperacional"} label={"Digite o Lucro Operacional"} 
                setField={setlucroOperacional}
                />
                
                <TextFieldEdited value={lucroLiquido} id={"lucroLiquido"} label={"Digite a Lucro Liquido"} 
                setField={setlucroLiquido}
                />
                
                
                <Button 
                    sx={{ height: "56px" }} 
                    onClick={e => {
                        handleSendValues();
                        console.log("Enviado");
                    }}
                    color="success" 
                    variant="outlined">
                    Enviar
                </Button>
            </Box>
        </Box>

    )
}