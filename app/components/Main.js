import React from 'react'
import Questoes from './Questoes'
import Tema from './Tema';

var Main = React.createClass({
    getInicialState: function(){
        return {
            tema : null,
            questoes : []
        }
    },
    componentWillMount: function(){
        this.setState({
             questoes:[
                {
                    indice: 0,
                    texto : "Selecione um tema",
                    respostas: [
                        "..."
                    ],
                    valida : ""
                }
            ]
        })
    },
    AtualizaTema : function(tema){
        setState({tema : tema});
    },
    AtualizaQuestoes : function(Questoes){
        setState({Questoes:Questoes});
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