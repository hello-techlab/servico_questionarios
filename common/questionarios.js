class Columbia {
    constructor (id) {
        this.id = id;

        this.perguntas = {
            1: "Voce desejou estar morto/a ou desejou poder dormir e nunca mais acordar?",
            2: "Voce ja pensou realmente em se matar?",
            3: "Voce tem pensado em como poderia fazer isso",
            4: "Voce teve esses pensamentos e teve intecao de coloca-los em pratica?",
            5: "Voce ja comecou a elaborar ou ja elaborou os detalhes de como se matar? Voce pretende executar esse plano?",
            6: "Voce ja fez alguma coisa, comecou a fazer algo ou planejou fazer alguma coisa para acabar com a sua vida?",
            7: "Fim do questionário"
        };

        this.fluxo = {
            1: {
                "sim": 2,
                "nao": 2
            },
            2: {
                "sim": 3,
                "nao": 6
            },
            3: {
                "sim": 4,
                "nao": 4
            },
            4: {
                "sim": 5,
                "nao": 5
            },
            5: {
                "sim": 6,
                "nao": 6
            },
            6: {
                "sim": 7,
                "nao": 7
            }
        };

        this.pergunta_atual = 1;

        this.respostas = {
            1: "nao",
            2: "nao",
            3: "nao",
            4: "nao",
            5: "nao",
            6: "nao"
        };

        this.columbia_resultado = {
            0: "Sem risco de suicídio",
            1: "Baixo risco de suicídio",
            2: "Médio risco de suicídio",
            3: "Alto risco de suicídio"
        }

        return this.id;
    }

    leProximaPergunta() {
        if (this.pergunta_atual <= Object.keys(this.perguntas).length) {
            return this.perguntas[this.pergunta_atual];
        }
        else {
            throw Error("Nao ha mais perguntas para responder");
        }
    }

    respondePergunta(resposta) {
        this.respostas[this.pergunta_atual] = resposta;
        this.pergunta_atual = this.fluxo[this.pergunta_atual][resposta];
    }

    calculaResultado() {
        let resultado;
        let direcionamento = [];

        if (this.respostas[6] == "sim") {
            resultado = this.columbia_resultado[3];

            direcionamento.push("Pelo seu resultado, consideramos de extrema importância que você converse com alguém da nossa equipe, para compreendermos mais sobre o que você apontou estar sentindo.");
            direcionamento.push("Gostaria de marcar um acolhimento com a gente?");
        }
        else if (this.respostas[3] == "sim" || this.respostas[4] == "sim" || this.respostas[5] == "sim") {
            resultado = this.columbia_resultado[2];

            direcionamento.push("Pelo seu resultado, consideramos importante que você converse com alguém da nossa equipe, para compreendermos mais sobre o que você apontou estar sentindo.");
            direcionamento.push("Gostaria de marcar um acolhimento com a gente?");
        }
        else if (this.respostas[1] == "sim" || this.respostas[2] == "sim") {
            resultado = this.columbia_resultado[1];

            direcionamento.push("Pelo seu resultado, gostaríamos que você conversasse com alguém da nossa equipe, para compreendermos mais sobre o que você apontou estar sentindo.");
            direcionamento.push("Gostaria de marcar um acolhimento com a gente?");
        }
        else {
            resultado = this.columbia_resultado[0];

            direcionamento.push("Pelas respostas do seu teste, não identificamos presença de sofrimento psíquico importante, porém este é um instrumento apenas para rastreio.");
            direcionamento.push("Pode ser que haja outras situações não exemplificadas aqui.");
            direcionamento.push("Caso tenha dúvidas, queira saber mais ou deseje um acolhimento, entre em contato conosco.");
        }

        return[resultado, direcionamento];
    }
}

class SRQ20 {
    constructor (id) {
        this.id = id;

        this.perguntas = {
            1: "Você tem dores de cabeca frequente?",
            2: "Tem falta de apetite",
            3: "Dorme mal?",
            4: "Assusta-se com facilidade?",
            5: "Tem tremores nas maos?",
            6: "Sente-se nervoso(a), tenso(a) ou preocupado(a)?",
            7: "Tem má digestão?",
            8: "Tem dificuldades de pensar com clareza?",
            9: "Tem se sentido triste ultimamente?",
            10: "Tem chorado mais do que costume?",
            11: "Encontra dificuldades para realizar com satisfação suas atividades diárias?",
            12: "Tem dificuldades para tomar decisões?",
            13: "E incapaz de desempenhar um papel útil em sua vida?",
            14: "Tem perdido o interesse pelas coisas?",
            15: "Tem dificuldades no serviço (seu trabalho é penoso, lhe causa sofrimento)?",
            16: "Você se sente uma pessoa inutil, sem préstimo?",
            17: "Tem tido ideia de acabar com a vida?",
            18: "Sente-se cansado (a) o tempo todo?",
            19: "Voce se cansa com facilidade?",
            20: "Tem sensações desagradáveis no estomago?",
            21: "Fim do questionário"
        };

        this.pergunta_atual = 1;

        this.respostas = {
            1: "nao",
            2: "nao",
            3: "nao",
            4: "nao",
            5: "nao",
            6: "nao",
            7: "nao",
            8: "nao",
            9: "nao",
            10: "nao",
            11: "nao",
            12: "nao",
            13: "nao",
            14: "nao",
            15: "nao",
            16: "nao",
            17: "nao",
            18: "nao",
            19: "nao",
            20: "nao"
        };

        this.resultado = 0;

        return this.id;
    }

    leProximaPergunta() {
        if (this.pergunta_atual <= Object.keys(this.perguntas).length) {
            return this.perguntas[this.pergunta_atual];
        }
        else {
            throw Error("Nao há mais perguntas a serem respondidas.");
        }
    }

    respondePergunta(resposta) {
        if (resposta == "sim") {
            this.resultado++;
        }
        this.respostas[this.pergunta_atual] = resposta;
        this.pergunta_atual++;
    }

    calculaResultado() {
        let resultado = `${this.resultado}\n`;
        let direcionamento = [];

        if (this.resultado >= 7 && this.respostas['17'] != "sim") {
            resultado += "Indica sofrimento psíquico";

            direcionamento.push("Pelo seu resultado, consideramos importante que você converse com alguém da nossa equipe, para compreendermos mais sobre o que você apontou estar sentindo.");
            direcionamento.push("Gostaria de marcar um acolhimento com a gente? ");
        }
        else if (this.respostas['17'] == "sim") {
            resultado += "Indica risco de suicídio";

            direcionamento.push("Pela sua resposta positiva na questão 17, consideramos importante que você converse com alguém da nossa equipe, para compreendermos mais sobre o que você apontou estar sentindo.");
            direcionamento.push("Gostaria de marcar um acolhimento com a gente?");
        }
        else {
            resultado += "Nao indica sofrimento psíquico";

            direcionamento.push("Pelas respostas do seu teste, não identificamos presença de sofrimento psíquico importante, porém este é um instrumento apenas para rastreio.");
            direcionamento.push("Pode ser que haja outras situações não exemplificadas aqui.");
            direcionamento.push("Caso tenha dúvidas, queira saber mais ou deseje um acolhimento, entre em contato conosco.");
        }

        return[resultado, direcionamento];
    }
}

module.exports = { Columbia, SRQ20 };
