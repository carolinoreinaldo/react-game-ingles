import React from 'react'
import Questoes from './Questoes'
import Tema from './Tema';
import Pontos from './pontos';
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
                <div className="col-lg-9 col-md-6 mt10 mb20">
                    <Tema AtualizaQuestoes={this.AtualizaQuestoes}/>
                </div>
                <div className="col-lg-3 col-md-6 mt10 mb20">
                    <Pontos />
                </div>
                <Questoes questoes={this.state.questoes}/>
            </div>
        )
    }
})

export default Main;