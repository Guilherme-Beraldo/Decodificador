
var textA = document.getElementById("textA");
var botaoCripto = document.getElementById("botaoCripto");
var botaoDescripto = document.getElementById("botaoDescripto");
var mensagemCopia = document.getElementById("mensagemCopia");
var botaoColar = document.getElementById("botaoColar");

function clear (texto) {
    texto.innerHTML = "";
};

textA.onclick = function () {
    clear(textA);
};

botaoCripto.onclick = () => {
    var botao = mensagemCopia.removeChild(botaoColar);
    var texto = criptografar();
    mensagemCopia.innerHTML="";
    var textElement = document.createElement("p");
    textElement.textContent = texto;
    textElement.classList.add("textoCopia");
    mensagemCopia.appendChild(textElement);
    mensagemCopia.appendChild(botao);
    botaoColar.hidden = false;
}

botaoDescripto.onclick = () => {
    var botao = mensagemCopia.removeChild(botaoColar);
    var texto = descriptografar();
    mensagemCopia.innerHTML="";
    var textElement = document.createElement("p");
    textElement.textContent = texto;
    textElement.classList.add("textoCopia");
    mensagemCopia.appendChild(textElement);
    mensagemCopia.appendChild(botao);
    botaoColar.hidden = false;
}

function criptografar () {
    var conteudo = textA.value.toLowerCase();
    var textoCriptografado = "";
    for (i = 0; i <= conteudo.length; i++ ) {
        if (conteudo.charAt(i) == "e") {
            textoCriptografado += "enter";
        }
        else if (conteudo.charAt(i) == "i") {
            textoCriptografado += "imes";
        }
        else if (conteudo.charAt(i) == "a") {
            textoCriptografado += "ai";
        }
        else if (conteudo.charAt(i) == "o") {
            textoCriptografado += "ober";
        }
        else if (conteudo.charAt(i) == "u") {
            textoCriptografado += "ufat";
        }
        else {
            textoCriptografado += conteudo.charAt(i);
        }
    }
    return textoCriptografado;
}

function descriptografar () {
    var conteudo = textA.value.toLowerCase();
    var textodescriptografado = "";
    for (i = 0; i < conteudo.length; i++ ) {
        if (conteudo.charAt(i) == "e" && conteudo.charAt(i + 1) == "n" && conteudo.charAt(i +2) == "t" && conteudo.charAt(i + 3) == "e" && conteudo.charAt(i + 4) == "r") {
            textodescriptografado += "e";
            i += 4;
        }
        else if (conteudo.charAt(i) == "i" && conteudo.charAt(i + 1) == "m" && conteudo.charAt(i + 2) == "e" && conteudo.charAt(i + 3) == "s") {
            textodescriptografado += "i";
            i += 3;
        }
        else if (conteudo.charAt(i) == "a" && conteudo.charAt(i + 1) == "i") {
            textodescriptografado += "a";
            i += 1;
        }
        else if (conteudo.charAt(i) == "o" && conteudo.charAt(i + 1) == "b" && conteudo.charAt(i + 2) == "e" && conteudo.charAt(i + 3) == "r") {
            textodescriptografado += "o";
            i += 3;
        }
        else if (conteudo.charAt(i) == "u" && conteudo.charAt(i + 1) == "f" && conteudo.charAt(i + 2) == "a" && conteudo.charAt(i + 3) == "t") {
            textodescriptografado += "u";
            i += 3;
        }
        else {
            textodescriptografado += conteudo.charAt(i);
        }
    }
    return textodescriptografado;
}

document.getElementById("botaoColar").addEventListener("click", function () {
    var texto = mensagemCopia.querySelector("p").innerHTML;

    navigator.clipboard.writeText(texto)
    .then(function() {
        alert("Texto copiado com sucesso");
    })
    .catch(function() {
        alert("Erro ao copiar o texto: ", error);
    });
});
