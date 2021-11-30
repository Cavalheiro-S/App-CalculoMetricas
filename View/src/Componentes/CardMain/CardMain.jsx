import { Component } from "react";
import { Box } from "@material-ui/system";
import CardMargens from "../CardMargens";
import CardResult from "../CardResult";


export default class CardMain extends Component{

    constructor(props){
        super(props)

        this.margemBruta = null;
        this.margemOperacional = null;
        this.margemLiquida = null;

        this.state = {
            margemBruta:this.margemBruta,
            margemOperacional:this.margemOperacional,
            margemLiquida:this.margemLiquida,
        }
    }


    takeResult(result){

        this.margemBruta = result.margemBruta.toFixed(2);
        this.margemOperacional = result.margemOperacional.toFixed(2);
        this.margemLiquida = result.margemLiquida.toFixed(2);

        this.setState({
            margemBruta:this.margemBruta,
            margemOperacional:this.margemOperacional,
            margemLiquida:this.margemLiquida,
        })

    }

    render(){

        return(
            <Box sx={{height:"500px",width:"50%", display:"flex",alignItems:"center", justifyContent:"space-around"}}>
                <CardMargens takeResult={this.takeResult.bind(this)}/>
                <CardResult margemBruta={this.margemBruta}
                margemOperacional={this.margemOperacional}
                margemLiquida={this.margemLiquida}/>
            </Box>
        )
    }
}