function margemBruta(receitaLiquida,lucroBruto){

    const margem = lucroBruto/receitaLiquida;

    return (margem*100).toFixed(2); 
}

function margemOperacional(receitaLiquida,lucroOperacional){
    
    const margem = lucroOperacional/receitaLiquida;

    return (margem*100).toFixed(2);
}

function margemLiquida(receitaLiquida,lucroLiquido){

    const margem = lucroLiquido/receitaLiquida;

    return (margem*100).toFixed(2);
}


module.exports = {margemBruta,margemOperacional,margemLiquida}