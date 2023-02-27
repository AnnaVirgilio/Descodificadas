var abriu = false;
var tamanhooriginal = 0;
function abreimagem(element) {
    if (!abriu) {
        element.style.position = "fixed";
        element.style.top = "20px";
        element.style.left = "30%";
        element.style.background = "white";
        tamanhooriginal = element.clientWidth;
        element.style.width = "50%";
        abriu = true;
    }
    else {
        element.style.position = "static";
        element.style.background = "transparent";
        element.style.width = tamanhooriginal + "px";
        abriu = false;
    }

}