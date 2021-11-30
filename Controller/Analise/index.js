function margemBruta(receitaLiquida,lucroBruto){

    const margem = lucroBruto/receitaLiquida;

    return margem*100; 
}

function margemOperacional(receitaLiquida,lucroOperacional){
    
    const margem = lucroOperacional/receitaLiquida;

    return margem*100;
}

function margemLiquida(receitaLiquida,lucroLiquido){

    const margem = lucroLiquido/receitaLiquida;

    return margem*100;
}


module.exports = {margemBruta,margemOperacional,margemLiquida}