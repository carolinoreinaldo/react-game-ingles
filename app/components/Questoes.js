import React from 'react';
import Questao from './Questao'
import RespostaCorreta from './RespostaCorreta'
import RespostaErrada from './RespostaErrada'

var Questoes = React.createClass({
    getInicialState : function(){
        return{
            questoes : [],
            questaoAtual : null,
        }
    },
    componentWillMount: function(){
        this.setState({
            questoes: [
                {
                    indice: 0,
                    texto : "Qual é o seu nome?",
                    respostas: [
                        "What's your name?",
                        "What is your name?"
                    ],
                    valida : ""
                },
                {
                    indice: 1,
                    texto : "Como é Londres?",
                    respostas: [
                         "What's London like?",
                         "What is London like?"
                    ],
                    valida : ""
                },
                {
                    indice: 2,
                    texto : "Você conhece Londres bem?",
                    respostas: [ 
                        "Do you know London well?"
                    ],        
                    valida : ""
                }
            ],
            questaoAtual : {
                indice: 0,
                texto : "Qual é o seu nome?",
                respostas: [
                    "What's your name?",
                    "What is your name?"
                ],
                valida : ""
            },
            errada : null,
            correta : null
        })
    },
    proximaQuestao(indice){
        indice = indice+1;
        if(indice >= this.state.questoes.length){
            indice = 0;
        }
        this.setState({questaoAtual:this.state.questoes[indice]});
    },
    ActualizarCorrecaoQuestao : function(questaoAtualizada){
        this.setState({
            questaoAtual : questaoAtualizada
        })
    },
    render : function(){
        return (
            <div>
                <Questao questao={this.state.questaoAtual} ActualizarCorrecaoQuestao={this.ActualizarCorrecaoQuestao} proximaQuestao={this.proximaQuestao}/>
                <RespostaCorreta questao={this.state.questaoAtual} />
                <RespostaErrada questao={this.state.questaoAtual} />
            </div>
        );
    }
});

export default Questoes;