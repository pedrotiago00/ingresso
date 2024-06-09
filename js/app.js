function comprar(){
    let quantidade = parseInt(document.getElementById('qtd').value);
    let tipo = document.getElementById('tipo-ingresso');
    
    if(tipo.value == 'pista'){
        comprarPista(quantidade);
    }
    if(tipo.value == 'superior'){
        comprarSuperior(quantidade);
    }else{
        comprarInferior(quantidade);
    }
}

function comprarPista(quantidade){
    let pista = parseInt(document.getElementById('qtd-pista').textContent);
    if(quantidade > pista){
        alert('ingresso indisponivel');
    }else{
        pista = pista - quantidade;
        document.getElementById('qtd-pista').textContent = pista;
        alert('Compra realizada com sucesso!');
    }
}

function comprarSuperior(quantidade){
    let superior = parseInt(document.getElementById('qtd-superior').textContent);
    if(quantidade > superior){
        alert('ingresso indisponivel');
    }else{
        superior = superior - quantidade;
        document.getElementById('qtd-superior').textContent = superior;
        alert('Compra realizada com sucesso!');
    }
}

function comprarInferior(quantidade){
    let inferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if(quantidade > inferior){
        alert('ingresso indisponivel');
    }else{
        inferior = inferior - quantidade;
        document.getElementById('qtd-inferior').textContent = inferior;
        alert('Compra realizada com sucesso!');
    }
}