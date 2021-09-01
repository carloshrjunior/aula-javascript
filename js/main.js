function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar!";
}

function redirecionar() {
    // window.open("https://google.com");
    window.location.href = "https://google.com";
}

function trocar(elemento) {
    // document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento) {
    // document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load() {
    alert("Página carregada!");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}


// FUNÇÕES
//
// function soma(n1, n2) {
//     return n1 + n2;
// }
// alert(soma(5, 10));
//
// function validarIdade(idade) {
//     var validar;
//     if(idade >= 18) {
//         validar = true;
//     } else {
//         validar = false;
//     }
//     return validar;
// }
// var idade = prompt("Qual a sua idade?");
// console.log(validarIdade(idade));

// DATE
//
// var d = new Date();
// alert(d.getHours());
// alert(d.getMinutes());

// FOR
// 
// var count;
// for(count = 1; count <= 5; count++) {
//     console.log(count);
// }


// WHILE
//
// var count = 0;
// while(count < 5) {
//     console.log(count);
//     count++;
// }

// IF ELSE
//
// var idade = prompt("Qual sua idade?");
// if(idade >= 18) {
//     alert("Maior de idade");
// } else {
//     alert("Menor de idade");
// }



// DICIONÁRIO
//
// var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
// console.log(frutas);
// console.log(frutas[1].nome);

// ARRAY
// 
// var lista = ["maça", "pera", "laranja"];
// lista.push("uva");
// lista.pop();
// console.log(lista);
// console.log(lista.toString());
// console.log(lista.join(" | "));

// VARIÁVEIS, STRINGS
//
// var nome = "Carlos Junior";
// var n1 = 23;
// var n2 = 10;
// var frase = "Japão é o melhor time do mundo";
// alert(nome + " tem " + idade + "anos");
// alert(idade + idade2);
// console.log(nome);
// console.log(n1 * n2);
// console.log(frase.toLowerCase());
// alert(frase.replace("Japão", "Brasil"));