import { Component } from "react";
import {TextField,Box, Button} from "@material-ui/core"
export default class CardMargens extends Component{

    constructor(props){
        super(props)

        this.receitaLiquida = null;
        this.receitaBruta = null;
        this.lucroBruto = null;
        this.lucroOperacional = null;
        this.lucroLiquido = null;


    }

    handleSendValues(){
        this.receitaBruta = document.querySelector("#receitaBruta").value;
        this.receitaLiquida = document.querySelector("#receitaLiquida").value;
        this.lucroBruto = document.querySelector("#lucroBruto").value;
        this.lucroOperacional = document.querySelector("#lucroOperacional").value;
        this.lucroLiquido = document.querySelector("#lucroLiquido").value;

        const data = {
            receitaBruta: this.receitaBruta,
            receitaLiquida: this.receitaLiquida,
            lucroBruto: this.lucroBruto,
            lucroOperacional: this.lucroOperacional,
            lucroLiquido: this.lucroLiquido
        }


        const optionsFetch = {
            method:"POST",
            headers:{
                'Accept': "application/json",
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(data)
        }
        fetch("http://localhost:5050/calcular",optionsFetch)
        .then(resp => resp.json())
        .then(resp => this.props.takeResult(resp));

    }

    render(){

        return(
            <Box sx={{width:"300px",backgroundColor:"#f4f4f4", padding:"0px 20px",borderRadius:"10px", boxSizing:"border-box"}}>
                <Box sx={{height:"500px", display:"flex", flexDirection:"column", justifyContent:"space-around"}}>
                    <TextField type="number" id="receitaBruta" label="Digite a Receita Bruta"></TextField>
                    <TextField id="receitaLiquida" label="Digite a Receita Líquida"></TextField>
                    <TextField id="lucroBruto" label="Digite o Lucro Bruto"></TextField>
                    <TextField id="lucroOperacional" label="Digite a Lucro Operacional"></TextField>
                    <TextField id="lucroLiquido" label="Digite a Lucro Líquido"></TextField>
                    <Button sx={{height:"56px"}} onClick={e => this.handleSendValues()} color="success" variant="outlined">Enviar</Button>
                </Box>
            </Box>

        )
    }
}