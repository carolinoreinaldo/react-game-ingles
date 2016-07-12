import React from 'react'
import Questoes from './Questoes'
import Tema from './Tema';

var Main = React.createClass({
    getInicialState: function(){
        return {
            tema : null,
            Questoes : []
        }
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
                <Tema />
                <Questoes questoes = "questoes"/>
               
            </div>
        )
    }
})

export default Main;