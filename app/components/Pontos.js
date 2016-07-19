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
            <div className="divPontos">
                <h4>Exercicios Feitos : 10</h4>
                <h4 className="bg-success">Corretos : 6</h4>
                <h4 className="bg-danger">Errados :  4</h4>
            </div>
        );
    }
});

export default Questoes;