const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quando você se sente presa em uma situação difícil, como você reage?",
        alternativas: [

            {
                texto: "Eu fico curiosa e busco formas criativas de mudar a situação. Eu sou resiliente e procuro explorar novas possibilidades.",
                afirmacao: "Você tem uma grande capacidade de transformar obstáculos em oportunidades, buscando aventuras e novas experiências para se libertar."
            },
            {
                texto: "Prefiro esperar por uma solução ou por algo que me tire dessa situação. Acredito que as coisas vão se resolver quando for o momento certo.",
                afirmacao: "Isso parece, que, em sua vulnerabilidade, aguarda pacientemente pelo destino e acredita que o amor verdadeiro é a chave para a mudança."
            }

        ]
    },

    {
        enunciado: "Como você encara os novos desafios em sua vida?",
        alternativas: [
            {
                texto: "Encaro-os com otimismo e coragem. Mesmo que não saiba exatamente o que me espera, estou disposta a me arriscar e explorar.",
                afirmacao: "Assim, você tem um espírito aventureiro, sempre disposto a aprender e crescer, mesmo quando a jornada é desconhecida."
            },

            {
                texto: "Tento enfrentar com calma e graça, esperando que as coisas se resolvam com o tempo e com a ajuda de pessoas ao meu redor.",
                afirmacao: " Isso reflete uma tranquilidade, que acredita que a intervenção do amor e do destino ajudará a resolver os problemas."
            }
        ]
    },

    {
        enunciado: "Quando você pensa no futuro, como se sente?",
        alternativas: [
            {
                texto: "Sinto uma grande vontade de explorar, descobrir e crescer. O futuro é um campo aberto para aventuras e novas possibilidades.",
                afirmacao: "Você tem um espírito sonhador e está sempre em busca de novas experiências, acreditando que o futuro será uma grande jornada de descobertas."
            },

            {
                texto: "Tenho uma sensação de que tudo vai acontecer no momento certo, e que minha vida será guiada por forças além do meu controle.",
                afirmacao: "Você que acredita que, no final, o destino a guiará e tudo acontecerá conforme deveria ser."
            }
        ]
    },

    {
        enunciado: "Como você se sente em relação a mudanças inesperadas?",
        alternativas: [
            {
                texto: "Eu vejo as mudanças como uma oportunidade para crescer e aprender mais sobre o mundo e sobre mim mesma. Não tenho medo de mudanças, pelo contrário, eu as abraço com entusiasmo.",
                afirmacao: "Tu tem uma natureza curiosa e está sempre disposta a aceitar as mudanças, sabendo que elas trazem novas aventuras e aprendizados."
            },

            {
                texto: " Mudanças podem ser assustadoras, mas eu acredito que elas acontecem por um motivo e podem levar a algo muito bom, mesmo que eu não entenda imediatamente.",
                afirmacao: "Reflete uma serenidade, que, mesmo em meio à incerteza, tem fé de que as mudanças são parte do destino e, no fim, trazem algo positivo."
            }
        ]
    },

    {
        enunciado: "Quando você pensa sobre o amor, qual é a sua visão?",
        alternativas: [
            {
                texto: " O amor é algo que surge de uma conexão verdadeira e profunda, algo que me leva a viver grandes aventuras e descobertas. Para mim, o amor é também uma forma de liberdade e expressão.",
                afirmacao: "Reflete, que, ao longo de sua jornada, aprende que o amor verdadeiro a liberta e a ajuda a descobrir sua verdadeira identidade."
            },

            {
                texto: "O amor é algo que acontece de forma mágica, algo que pode transformar a vida. Acredito que o verdadeiro amor pode mudar tudo e trazer felicidade.",
                afirmacao: "Você acredita no poder transformador do amor, que chega de forma misteriosa e traz equilíbrio e paz à sua vida."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >=  perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas (){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;

        botaoAlternativas.addEventListener("click", ()=> respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada (opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();

}
function mostraResultado(){
    caixaPerguntas.textContent = "Acreditamos que você...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();