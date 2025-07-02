const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quando você se sente presa em uma situação difícil, como você reage?",
        alternativas: [
        "Eu fico curiosa e busco formas criativas de mudar a situação. Eu sou resiliente e procuro explorar novas possibilidades.",
        "Prefiro esperar por uma solução ou por algo que me tire dessa situação. Acredito que as coisas vão se resolver quando for o momento certo."
    ]
    },

    {
        enunciado: "Como você encara os novos desafios em sua vida?",
        alternativas: [
        "Encaro-os com otimismo e coragem. Mesmo que não saiba exatamente o que me espera, estou disposta a me arriscar e explorar.",
        "Tento enfrentar com calma e graça, esperando que as coisas se resolvam com o tempo e com a ajuda de pessoas ao meu redor."
    ]
    },

    {
        enunciado: "Quando você pensa no futuro, como se sente?",
        alternativas: [
        "Sinto uma grande vontade de explorar, descobrir e crescer. O futuro é um campo aberto para aventuras e novas possibilidades.",
        "Tenho uma sensação de que tudo vai acontecer no momento certo, e que minha vida será guiada por forças além do meu controle."
    ]
    },

    {
        enunciado: "Como você se sente em relação a mudanças inesperadas?",
        alternativas: [
        "Eu vejo as mudanças como uma oportunidade para crescer e aprender mais sobre o mundo e sobre mim mesma. Não tenho medo de mudanças, pelo contrário, eu as abraço com entusiasmo.",
        " Mudanças podem ser assustadoras, mas eu acredito que elas acontecem por um motivo e podem levar a algo muito bom, mesmo que eu não entenda imediatamente."
    ]
    },


    {
        enunciado: "Quando você pensa sobre o amor, qual é a sua visão?",
        alternativas: [
        " O amor é algo que surge de uma conexão verdadeira e profunda, algo que me leva a viver grandes aventuras e descobertas. Para mim, o amor é também uma forma de liberdade e expressão.",
        "O amor é algo que acontece de forma mágica, algo que pode transformar a vida. Acredito que o verdadeiro amor pode mudar tudo e trazer felicidade."
    ]
    }
];

let atual = 0;
let perguntaAtual;
function mostraPergunta (){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();