const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const {margemBruta,margemOperacional,margemLiquida} = require("../Controller/Analise/index.js");

const app = express();

app.use(bodyParser({extended:true}));
app.use(cors());

app.post("/calcular", (req,res) =>{

    console.log(req.body);
    const margem1 = margemBruta(req.body.receitaLiquida,req.body.lucroBruto);
    const margem2 = margemOperacional(req.body.receitaLiquida,req.body.lucroOperacional);
    const margem3 = margemLiquida(req.body.receitaLiquida,req.body.lucroLiquido);

    res.json({margemBruta:margem1,margemOperacional:margem2,margemLiquida:margem3});
})

const port = 5050;

console.log(`Servidor escutando na porta ${port}`);

app.listen(port);