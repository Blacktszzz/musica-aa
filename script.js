let musicas =[
    {titulo:'Gojo' , artista:'Billie Eilish' , src:'musicas/billie-eilish-sped-up.mp3',img:'imagens/Gojo.jpg'},
    {titulo:'Sasuke' , artista:'The Weeknd x Lana Del Rey x Doja Cat' , src:'musicas/streets-one-of-the-girls-white-mustang-sped-up.mp3',img:'imagens/Sasuke.jpg'},
    {titulo:'Yuta' , artista:'valorant' , src:'musicas/ticking-away-ft-grabbitz-and-bbno-official-music-video-valorant-champions-2023-anthem.mp3',img:'imagens/Yuta.jpg'},
];


let musica = document.querySelector('audio');
let indexMusica =0;
let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');
renderizarMusica(indexMusica)


document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-stop').addEventListener('click' , pausarMusica)

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    if (indexMusica < 0) {
        indexMusica = 2;
    }
    renderizarMusica(indexMusica);
});
    document.querySelector('.proxima').addEventListener('click', () => {
        indexMusica++;
        if (indexMusica > 2){
            indexMusica = 0;
        }
        renderizarMusica(indexMusica);
});


function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
}

function tocarMusica(){
    musica.play();
    document.querySelector('.botao-stop').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}
function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-stop').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if(campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }
    return campoMinutos + ':' + campoSegundos;
}
