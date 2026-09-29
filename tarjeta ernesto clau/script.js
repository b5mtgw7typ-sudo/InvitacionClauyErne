function abrirSobre(){

    const sobre = document.getElementById("sobre");
    const musica = document.getElementById("musica");


    if(musica){

        musica.play();

    }


    sobre.style.opacity = "0";


    setTimeout(function(){

        sobre.style.display = "none";

    },1000);


}




const fechaCasamiento = new Date("November 28, 2026 12:00:00").getTime();



setInterval(function(){


    let ahora = new Date().getTime();

    let diferencia = fechaCasamiento - ahora;



    let dias = Math.floor(
        diferencia / (1000 * 60 * 60 * 24)
    );


    let horas = Math.floor(
        (diferencia % (1000 * 60 * 60 * 24))
        /(1000 * 60 * 60)
    );


    let minutos = Math.floor(
        (diferencia % (1000 * 60 * 60))
        /(1000 * 60)
    );


    let segundos = Math.floor(
        (diferencia % (1000 * 60))
        /1000
    );



    document.getElementById("dias").innerHTML = dias;

    document.getElementById("horas").innerHTML = horas;

    document.getElementById("minutos").innerHTML = minutos;

    document.getElementById("segundos").innerHTML = segundos;


},1000);