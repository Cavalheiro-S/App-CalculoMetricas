import { useState } from "react";
import { Box, Button } from "@material-ui/core";
import TextFieldEdited from "./TextFieldEdited";

export default function CardMargens({takeResult,validacao}) {

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
        <Box sx={{ width: "300px", backgroundColor: "#f4f4f4", padding: "0px 20px", borderRadius: "10px", boxSizing: "border-box" }}>
            <Box sx={{ height: "500px", display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
                <TextFieldEdited value={receitaBruta} id={"receitaBruta"} label={"Digite a Receita Bruta"} 
                validacao={validacao}
                setField={setReceitaBruta}
                />
                <TextFieldEdited value={receitaLiquida} id={"receitaLiquida"} label={"Digite a Receita Líquida"} 
                validacao={validacao}
                setField={setReceitaLiquida}
                />
                
                <TextFieldEdited value={lucroBruto} id={"lucroBruto"} label={"Digite o Lucro Bruto"} 
                validacao={validacao}
                setField={setlucroBruto}
                />
                
                <TextFieldEdited value={lucroOperacional} id={"lucroOperacional"} label={"Digite o Lucro Operacional"} 
                validacao={validacao}
                setField={setlucroOperacional}
                />
                
                <TextFieldEdited value={lucroLiquido} id={"lucroLiquido"} label={"Digite a Lucro Liquido"} 
                validacao={validacao}
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