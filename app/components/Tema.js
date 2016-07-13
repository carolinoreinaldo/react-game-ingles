import React from 'react'
import Temas from 'json!../JsonData/Temas.json'
import JsonService from '../services/JsonService';

var Tema = React.createClass({
    AtualizarQuestoes: function(event){
        var novasQuestoes = JsonService.getJsonData(event.target.value);
        this.props.AtualizaQuestoes(novasQuestoes);
    },
    render : function(){
        return (
            <div>
                <form>
                    <select className="form-control custom-select" onChange={this.AtualizarQuestoes}>
                    <option>Select</option>
                    {
                        Temas.map(function(elemento,index){
                            return (
                                <option key={"option_"+index} value={elemento.valor}>{elemento.titulo}</option>
                            )
                        })
                    }
                    </select>
                </form>
            </div>
        )
    }
})

export default Tema;