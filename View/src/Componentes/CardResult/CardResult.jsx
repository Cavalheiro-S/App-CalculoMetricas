import { Box } from "@material-ui/system";

export default function CardResult({margemBruta,margemOperacional,margemLiquida}){

    return(
        <Box sx={{width:"300px",backgroundColor:"#f4f4f4", display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
            <div>Margem Bruta: {margemBruta}%</div>
            <div>Margem Operacional: {margemOperacional}%</div>
            <div>Margem Líquida: {margemLiquida}%</div>
        </Box>
    )
}