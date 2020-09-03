// let nome = Number(prompt("Digite um numero?"));
// let n1 = 2
// let soma = nome + n1

// alert(`É um grande prazer ter você ${soma}`)


/* Testando o OPERADOR TERNARIO */
// let n1 = 1;
// let n2 = '1';
// let resultado = n1 === n2 ? 'LOGICO QUE NAO' : 'OPA é SIM';


/* ========== Testanto os SELETORES ========== */
// let p1 = document.getElementsByTagName('h1');
// document.write(`${p1.innerHTML} <=`)


/* ========== Testando EVENTOS ========== */
let a = document.getElementById('area');
a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)

function clicar() {
    a.innerText = 'Gosto do seu clique!'
    a.style.background = "var(--bg)"
}

function entrar() {
    a.innerHTML = "Oi Sumido!"
    a.style.background = "#618C8C";
}

function sair() {
    a.innerHTML = "Fica vai ter bolo!"
    a.style.background = "#72A68E";
    a.style.color = "var(--paragraph)";
}

/* ========== Testando OPERADORES ========== */

let button = document.getElementById('button');
button.addEventListener('click', somar);

function somar() {
    let tn1 = document.getElementById('txtn1');
    let tn2 = document.getElementById('txtn2');
    let tn3 = document.getElementById('txtn3');
    let n1 = Number(tn1.value);
    let n2 = Number(tn2.value);
    let n3 = Number(tn3.value);
    let soma = n1 + n2 - n3;

    let res = document.getElementById('res');
    res.innerHTML = `Soma total: <strong>${soma}</strong>`


    tn1.value = "";
    tn2.value = "";
    tn3.value = "";
}

/* ========== Testando CONDICOES ========== */

let botao = document.getElementById('medir');
botao.addEventListener('click', medir);

function medir() {

    let resultado = document.getElementById('vel');
    let velocidade = document.getElementById('velocidade').value;
        

    if (velocidade > 60) {
        resultado.innerHTML = `Velocidade de ${velocidade}Km/h <br> 
        Você está sendo <strong>MULTADO</strong> por excesso de velocidade!`
    } else {
        resultado.innerHTML = `Velocidade de ${velocidade}Km/h.`
    }

    velocidade.value = "";
}


