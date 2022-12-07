function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        //alert('Elemento não encontrado');
        console.log('Elemento não encontrado ou seletor inválido');
    }

}


const listaDeTeclas = document.querySelectorAll('.tecla');

//let contador = 0;

// para comentar varias linhas ao mesmo tempo ctrl +k e depois ctrl +c
//enquanto
// while(contador < listaDeTeclas.length){

//     const tecla = listaDeTeclas[contador];
//     const instrumento = tecla.classList[1];


//     //template string, dentro de duas crases para dinamizar as coisas
//     const idAudio = `#som_${instrumento}`;

//     tecla.onclick = function (){
//         tocaSom(idAudio);
//     }

//     contador += 1
// }

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space' || 'Enter') {
        tecla.classList.add('.ativa');
        }     
    }
    
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
      }
}
