import { Box } from "@material-ui/system";
import { Component } from "react";

export default class CardResult extends Component{


    render(){

        return(
            <Box sx={{width:"300px",backgroundColor:"#f4f4f4", display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                <div>Margem Bruta: {this.props.margemBruta}%</div>
                <div>Margem Operacional: {this.props.margemOperacional}%</div>
                <div>Margem Líquida: {this.props.margemLiquida}%</div>
            </Box>
        )
    }
}