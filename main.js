function tocaSom(idElementoAudio){

    document.querySelector(idElementoAudio).play();
}

const listadeTeclas = document.querySelectorAll('.tecla');


for (let contador = 0; contador < listadeTeclas.length; contador++){    

    const tecla = listadeTeclas[contador];
    const instrumento = tecla.classList[1];

    //para este tipo, seria necessário colocar no parametro da função abaixo a idAudio
    //dessa forma atribuindo o #som_${instrumento} com crase ao invés de aspas duplas
    //template string
    //const idAudio = `#som_${instrumento}`;

    console.log(instrumento);


    tecla.onclick = function(){
        
        tocaSom('#som_'+instrumento);
    }

    tecla.onkeydown = function(evento){
        console.log(evento);
        if(evento.code === "Enter" || evento.code === "Space" || evento.code === "NumpadEnter"){
            tecla.classList.add("ativa");
            console.log(evento.code);
        }
    }

    tecla.onkeyup = function(){
        tecla.classList.remove("ativa");
    }

}
