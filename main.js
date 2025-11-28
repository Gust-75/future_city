const MAX_WIDTH = 600;
let usuarios = [
    { nome: "Claudia", pontos: 0 },
    { nome: "Fátima", pontos: 0 },
    { nome: "João", pontos: 0 }
];
function atualizarRanking() {
    usuarios.sort((a, b) => b.pontos - a.pontos);
    atualizarPosicao(usuarios[0], "rank1", ".bar-x", ".label-x", "1° Lugar - Membro Ouro", 0);
    atualizarPosicao(usuarios[1], "rank2", ".bar-y", ".label-m", "2° Lugar - Membro Prata", 1);
    atualizarPosicao(usuarios[2], "rank3", ".bar-z", ".label-y", "3° Lugar - Membro Bronze", 2);
}
function atualizarPosicao(user, rankId, barClass, labelClass, titulo, index) {
    const card = document.getElementById(rankId);
    card.querySelector(".rank-title").innerText = `${titulo} - ${user.nome}`;
    card.querySelector(labelClass).innerText = `${user.pontos} PONTOS`;
    const maior = usuarios[0].pontos || 1;
    const barra = card.querySelector(barClass);
    let largura;
    if (index === 0) {
        largura = MAX_WIDTH;
    } else {
        largura = (user.pontos / maior) * MAX_WIDTH;
    }
    barra.style.width = largura + "px";
}
setInterval(() => {
    usuarios[0].pontos += Math.floor(Math.random() * 100);
    usuarios[1].pontos += Math.floor(Math.random() * 100);
    usuarios[2].pontos += Math.floor(Math.random() * 100);
    atualizarRanking();
}, 1000);
atualizarRanking();
