//              INFORMAÇÕES
// Carne: 400g p/ pessoa - + de 6h: 650g
// Cerveja: 1200 ml p/ pessoa - + de 6h: 2000 ml
// Bebidas: 1000 p/ pessoa - + de 6h: 1500 ml

// Criança: vale por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2) * criancas;
    let qtdTotalCerveja = cervejaPP(duracao) * adultos; 
    let qtdTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2) * criancas;

    resultado.innerHTML  =  `<h2 class="result-info">Você vai precisar de:</h2>`

    resultado.innerHTML = `<div>
                                <img src="./imagens/bife.png">
                                <p>${Math.ceil(qtdTotalCarne / 1000)} kg de carne</p>
                           </div>`;
   
    resultado.innerHTML += `<div>
                                <img src="./imagens/cerveja.png">
                                <p>${Math.ceil(qtdTotalCerveja / 355)} latas de cerveja</p>
                            </div>`;
 
    resultado.innerHTML += `<div>
                                <img src="./imagens/lata.png">
                                <p>${Math.ceil(qtdTotalBebidas/ 2000)} pet's de bebidas</p>
                            </div>`;
}



function carnePP(duracao) {
    // se duracao for igula ou maior
    if (duracao >= 6) {
    // retornar
        return 650;
    }

    else{
    // se não, retornar
        return 400;
    }
}

function cervejaPP(duracao) {
    // se duracao for igula ou maior
    if (duracao >= 6) {
    // retornar
        return 2000;
    }

    else{
    // se não, retornar
        return 1200;
    }
}

function bebidasPP(duracao) {
    // se duracao for igula ou maior
    if (duracao >= 6) {
    // retornar
        return 1500;
    }

    else{
    // se não, retornar
        return 1000;
    }
}




// As variaveis recebem o id do input (document.get.ElementById), incluindo a div resultado

// a funcao calcular: variaveis com o nome do input, recebe o valor de cada input

// as variaveis com qtd total de cada elemento, recebem a funcao de cada elemento p/ pessoa
// e fazem as operacoes matematicas (quantidade de elemento por pessoa, vezes(*) o numero de adultos,
// + quantidade por pessoa dividido(/) por 2 (pq criancas valm 0,5) vezes(*) o numero de criancas)

// resultado.innerHTML recebe o metodo para para colocar na tela os paragrafos (`<p>${}</p>` e Math.ceil e +=)


// cada elemento recebe uma funcao com a quantidade por pessoa 


