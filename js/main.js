/*var nome = "Jailson Melo"
var idade = 31;
var anoAtual = 2021;
alert("Seu nome é: " + nome + " e nasceu no ano:" + (anoAtual-idade));

// Declarando uma lista.
var lista = ["banana", "manga", "abacate"];
console.log(lista[1]);

// Adiciona um elemento na lista.
lista.push("laranja");
console.log(lista);

// Retira o último elemento da lista.
lista.pop();
console.log(lista);

// Traz o tamanho da lista (indíce começa mo zero, 0,1,2,3,4).
console.log(lista.length);

// Traz a lista ao contrário.
console.log(lista.reverse());

// Traz a lista como string "abacate,manga,banana"
console.log(lista.toString());

// Troca a vírgula por "/".
console.log(lista.join("/"));

// Lista de array dicionário tipoo JSON.
var frutas = [{nome:"banana", cor:"amarela"},{nome:"abacate",cor:"verde"}];
console.log(frutas);
console.log(frutas[0].nome);

// Função condicional com if.
var idade = prompt("Qual sua idade?")
if(idade >= 18){
    console.log("Você já é maior de idade!");
}else{
    console.log("Você ainda é menor de idade!")
};

// Laço de repetição while.
var count = 0;
while(count <= 5){
    count ++;
    console.log(count);
};

// Laço de repetição for.
var count;
for(count = 0; count <=5; count++){
    console.log(count);
}

// Buscando data atual
var d = new Date()
console.log(d);

// Crinado função.
function soma(num1,num2){
    return num1 + num2;
}
console.log(soma(45,55));

// Função de validação.
var validar =0;
function validarIdade(idade){
    if(idade >=18){
        validar = true
    }else{
        validar = false
    }
}
var idade = prompt("qual sua idade?");
validarIdade(idade)
console.log(validar);

// Função de Validação de Password.
var validar = 0;
function validarPassword(){
    if(pass1 != pass2){
        validar = ("Password Inválido")
    }else{
        validar = ("Concluido")
    }
    return validar;
}
var pass1 = prompt("Digite o password");
var pass2 = prompt("Repita o password");
validarPassword()
console.log(validar);
*/
// Criando evento de click
function clik(){
    document.getElementById("agradecimento")
    .innerHTML = "Bem vindo! click em entrar para ir pro site.";
}
function entrar(){
    // Abre nova janela.
    window.open("https://www.google.com/");
    // Abre na mesma janela.
    window.location.href = "https://www.google.com/";
}

// Criando evento de passar o mouse.
function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";
}
function voltar(elemento){
    elemento.innerHTML ="Passe o mouse aqui";
}

// Traz um alerta quando a página carrega."body"
function load(){
    alert("Página carregada.");
}

// Coleta o valor de um combo de opções. "select"
function funcaochange(elemento){
    console.log(elemento.value);
}

