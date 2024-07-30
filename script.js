const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está em uma viagem intergaláctica e seu primeiro destino é um planeta desconhecido. O que você faz ao aterrissar?",
        alternativas: [
            {
                texto: "Explorar a paisagem alienígena.",
                afirmacao: "Você descobre plantas e criaturas exóticas durante a exploração."
            },
            {
                texto: "Configurar um acampamento base.",
                afirmacao: "Você monta um acampamento seguro para futuras explorações."
            }
        ]
    },
    {
        enunciado: "Durante a exploração, você encontra uma caverna misteriosa. Qual é sua escolha?",
        alternativas: [
            {
                texto: "Entrar na caverna para investigar.",
                afirmacao: "Dentro da caverna, você encontra cristais brilhantes e uma tecnologia antiga."
            },
            {
                texto: "Ignorar a caverna e continuar explorando a superfície.",
                afirmacao: "Você decide que é mais seguro continuar explorando a superfície."
            }
        ]
    },
    {
        enunciado: "Você encontra uma espécie alienígena inteligente. Qual é sua reação?",
        alternativas: [
            {
                texto: "Tentar comunicar-se pacificamente.",
                afirmacao: "Os alienígenas respondem amigavelmente e você aprende sobre sua cultura."
            },
            {
                texto: "Observar de longe sem interferir.",
                afirmacao: "Você coleta dados valiosos sem ser notado."
            }
        ]
    },
    {
        enunciado: "Seu acampamento é atacado por criaturas selvagens. O que você faz?",
        alternativas: [
            {
                texto: "Defender o acampamento com armas de energia.",
                afirmacao: "Você repele o ataque com sucesso, mas o acampamento sofre alguns danos."
            },
            {
                texto: "Fugir e procurar um local mais seguro.",
                afirmacao: "Você encontra um novo local seguro para se estabelecer."
            }
        ]
    },
    {
        enunciado: "No final do dia, você precisa decidir onde descansar. O que você escolhe?",
        alternativas: [
            {
                texto: "Dormir sob as estrelas alienígenas.",
                afirmacao: "Você tem uma noite tranquila observando as constelações alienígenas."
            },
            {
                texto: "Dormir dentro da nave espacial.",
                afirmacao: "Você dorme confortavelmente dentro da nave, com todos os sistemas de segurança ativados."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Fim da história!";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
