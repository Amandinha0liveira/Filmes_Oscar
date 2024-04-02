// Tratamento de eventos
document.querySelector("#paginas").addEventListener("input", calcular);
document.querySelector("#tipo").addEventListener("change", calcular);
document.querySelector("#prototipo_sim").addEventListener("change", calcular);
document.querySelector("#prototipo_nao").addEventListener("change", calcular);

document.querySelector("#prazo").addEventListener("input", function() {
    const nota = document.querySelector("#prazo").value;
    document.querySelector("label[for=prazo]").innerText = "Nota: " + nota;
    avaliarFilme(nota);
});

//DOM - Document Object Model 
document.querySelector("#btnEnviar").addEventListener("click", registro);


function calcular() {
    const qtdeDeVezes = parseInt(document.querySelector("#paginas").value);
    const NomeFilme = document.querySelector('#tipo').value;
    let minutosDoFilme = 0;

    switch (NomeFilme) {
            case '0':
                break
            case '1': 
                minutosDoFilme = 141
                break
            case '2':
                minutosDoFilme = 180
                break
            case '3':
                minutosDoFilme = 111
                break
            case '4':
                minutosDoFilme = 152
                break       
            case '5':
                minutosDoFilme = 129
                break
            case '6':
                minutosDoFilme = 106
                break
            case '7':
                minutosDoFilme = 106
                break
            case '8':
                minutosDoFilme = 133
                break
            case '9':
                minutosDoFilme = 206
                break
            case '10':
                minutosDoFilme = 117
                break
            default:
                break
        }
    
    }

    const valorTotalMinutos = qtdeDeVezes * minutosDoFilme;
    const horas = valorTotalMinutos / 60;
    document.querySelector("#resultado").innerText = `O total de horas assistidas é: ${horas.toFixed(2)} horas`;


function avaliarFilme(nota) {
    let avaliacao = ''; 

    if (nota >= 8) {
        avaliacao = 'Excelente!';
    } else if (nota >= 6 && nota < 8) {
        avaliacao = 'Bom filme.';
    } else if (nota >= 4 && nota < 6) {
        avaliacao = 'Mediano.';
    } else if (nota >= 2 && nota < 4) {
        avaliacao = 'Fraco.';
    } else {
        avaliacao = 'Muito ruim.';
    }

    document.querySelector("#avaliacao-filme").innerText = `Avaliação: ${avaliacao}`;
}


function registro() {
    const filmes = {
        '0': "",
        '1': 'Pobres Criaturas',
        '2': 'Oppenheimer',
        '3': 'Barbie',
        '4': 'Anatomia de uma Queda',
        '5': 'Maestro',
        '6': 'Vidas Passadas',
        '7': 'Zona de Interesse',
        '8': 'Os Rejeitados',
        '9': 'Assassinos da Lua das Flores',
        '10': 'American Fiction'
    };

    const tipoFilme = filmes[document.querySelector("#tipo").value];
    const vezesAssistido = document.querySelector("#paginas").value;
    const localAssistido = document.querySelector("#nome").value;
    const prototipo = document.querySelector("#prototipo_sim").checked;
    const notaFilme = document.querySelector("#prazo").value;
    const recomendaria = document.querySelector("#js").checked ? 'sim' : 'não';

    let escolha;

    if (prototipo) {
        escolha = 'Sim, eu vi';
    } else {
        escolha = 'Não, não vi';
    }

    const resumo = `
        Resumo das informações:
        - Filme: ${tipoFilme}
        - Quantidade de vezes assistido: ${vezesAssistido}
        - Local onde assistiu: ${localAssistido}
        - Assistiu antes da premiação do Oscar? ${escolha}
        - Nota dada ao filme: ${notaFilme}
        - Recomendaria para amigos e familiares? ${recomendaria}
    `;

    console.log(resumo);

    alert(resumo)
}