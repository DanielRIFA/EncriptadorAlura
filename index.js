function encriptar(){
    let texto=document.getElementById("texto").value;
    let titulomensaje=document.getElementById("titulo-mensaje");
    let parrafo=document.getElementById("parrafo");
    let munheco=document.getElementById("munheco");

    let textocifrado=texto
                
                .replace(/e/gi, "enter")
                .replace(/i/gi, "imes")
                .replace(/a/gi, "ai")
                .replace(/o/gi, "ober")
                .replace(/u/gi, "ufat");
    if (document.getElementById("texto").value.length !=0   ){
        document.getElementById("texto").value=textocifrado;
        titulomensaje.textContent="Texto encriptado con exito";
        parrafo.textContent="";
        munheco.src="./img/rammus.png";
    } else{
        munheco.src="./img/mono.png";
        titulomensaje.textContent= "Ningun mensaje fue encontrado";
        parrafo.textContent="Ingresa el texto que deseas encriptar o desencriptar"
        alert("debes ingresar algun texto")
    }
}   
function desencriptar(){
    let texto=document.getElementById("texto").value;
    let titulomensaje=document.getElementById("titulo-mensaje");
    let parrafo=document.getElementById("parrafo");
    let munheco=document.getElementById("munheco"); 
    
    let textocifrado=texto
        .replace(/ai/gi, "a")
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
    if (document.getElementById("texto").value.length !=0   ){
        document.getElementById("texto").value=textocifrado;
        titulomensaje.textContent="Texto desencriptado con exito";
        parrafo.textContent="";
        munheco.src="./img/rammus.png";
    } else{
        munheco.src="./img/mono.png";
        titulomensaje.textContent= "Ningun mensaje fue encontrado";
        parrafo.textContent="Ingresa el texto que deseas encriptar o desencriptar"
        alert("debes ingresar algun texto")
    }
}