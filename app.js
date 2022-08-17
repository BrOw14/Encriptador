if (!window.isSecureContext) document.getElementById('copiar').style.display = 'none'
const soloMinusculas = new RegExp(/^[a-z\s]+$/);
const textoDesencriptado = document.getElementById('textoDesencriptado');
const textoEncriptado = document.getElementById('textoEncriptado');
const muestra = document.getElementById('muestra');
const divError = document.getElementById('error');
const exito = document.getElementById('exito');
const mostrarTexto = document.getElementById("mostrarTexto");

function error() {
    textoDesencriptado.style.display = 'none';
    muestra.style.display = 'none';
    divError.style.display = 'flex';
}

function mostrar(){
    exito.style.display = 'none';
    divError.style.display = 'none';
    muestra.style.display = 'none';
    textoDesencriptado.style.display = 'flex';
}

function reset() {
    divError.style.display = 'none';
    textoDesencriptado.style.display = 'none';
    muestra.style.display = 'flex';
    textoEncriptado.value = '';
    
}

function validar(){
    let input = textoEncriptado.value;
    let isValid = soloMinusculas.test(input);

    if (isValid) {
        return input;
    }
    else {
        error();
        return '' 
    }
}

function encriptar() {
    const input = validar();
    if (input === '') return;
    let encriptado = input.replace(/e/g,'enter')
    .replace(/o/g, 'ober')
    .replace(/i/g,'imes')
    .replace(/a/g,'ai')
    .replace(/u/g,'ufat');
    mostrar();
    mostrarTexto.innerText= encriptado;
    return encriptado
}

function desencriptar(){
    const texto = validar();
    if (texto === '') return;
    let desencriptado = texto.replace(/ufat/g,'u')
    .replace(/ai/g,'a')
    .replace(/imes/g,'i')
    .replace(/ober/g,'o')
    .replace(/enter/g,'e');
    mostrar();
    mostrarTexto.innerText= desencriptado;
    return desencriptado
}

function copiar() {
    let copia = mostrarTexto.value;
    navigator.clipboard.writeText(copia);
    setTimeout(() => {
        exito.style.display = 'block'
    }, 10);
    setTimeout(() => {
        exito.style.display = 'none'
    }, 2000);
}