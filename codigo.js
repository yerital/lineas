alert("cuidado con el virus")

var tablero = document.getElementById("cuadrito")
var pizarra = tablero.getContext("2d")

var limpiar = document.getElementById("borrar")
limpiar.addEventListener("click", limpiareltablero)

var iniciar = document.getElementById("iniciar")
iniciar.addEventListener("click", empezardibujo) 


dibujarlineas(300, 0, 300, 300, "pink")
dibujarlineas(0, 300, 300, 300, "green")
dibujarlineas(0, 0, 300, 0, "purple")
dibujarlineas(0, 300, 0, 0, "yellow")


function dibujarlineas(xini, yini, xfin, yfin, color){

pizarra.beginPath()
pizarra.strokeStyle = color
pizarra.moveTo(xini, yini)
pizarra.lineTo(xfin, yfin)
pizarra.stroke()
pizarra.closePath()
}

function limpiareltablero(){
    pizarra.clearRect(1, 1, 298, 298)
}

function empezardibujo(){
 

    var color1 = document.getElementById("izqsup").value 
    var color2 = document.getElementById("dersup").value 
    var color3 = document.getElementById("izqinf").value
    var color4 = document.getElementById("derinf").value

    var numlineas = document.getElementById("ndl")  
    var nl = parseInt(numlineas.value)
    var espacio = 300/nl

    

    for(l=0; l<nl; l++){
        dibujarlineas(0, l*espacio, espacio+l*espacio, 300, color3)
        dibujarlineas(l*espacio, 0, 300, espacio+l*espacio, color2)
        dibujarlineas(0, espacio + l*espacio, 300-l*espacio, 0, color1)
        dibujarlineas(300, l*espacio, 300- espacio - l*espacio, 300, color4)
    }
}


  
