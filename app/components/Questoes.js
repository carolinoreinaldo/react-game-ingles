import React from 'react';
import Questao from './Questao';
import RespostaCorreta from './RespostaCorreta';
import RespostaErrada from './RespostaErrada';
import Branco from 'json!../JsonData/BrancoData.json';



var Questoes = React.createClass({
    getInicialState : function(){
        return{
            questoes : [],
            questaoAtual : null
        }
    },
    componentWillMount: function(){
        var questoesPassadas = this.props.questoes;
        this.setState({
            questoes: questoesPassadas,
            questaoAtual : questoesPassadas[0]
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
    componentWillReceiveProps : function(props){
        var questoesPassadas = props.questoes;
        if (typeof questoesPassadas != 'undefined' && questoesPassadas != null) {
            this.setState({
                questoes: questoesPassadas,
                questaoAtual : questoesPassadas[0]
            })
        }
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