import React from 'react'
import Questoes from './Questoes'
import Tema from './Tema';
import JsonService from '../services/JsonService';

var Main = React.createClass({
    getInicialState: function(){
        return {
            tema : null,
            questoes : []
        }
    },
    componentWillMount: function(){
        var JsonTemas = JsonService.getJsonData('Temas');
        var QuestoesJson = JsonService.getJsonData('Branco');
        this.setState({
            tema:JsonTemas,
            questoes:QuestoesJson
        });
        
    },
    AtualizaTema : function(tema){
        this.setState({tema : tema});
    },
    AtualizaQuestoes : function(Questoes){
        this.setState({questoes:Questoes});
    },
    render: function() {
        return (
            <div className="container">
                <Tema AtualizaQuestoes={this.AtualizaQuestoes}/>
                <Questoes questoes={this.state.questoes}/>
               
            </div>
        )
    }
})

export default Main;