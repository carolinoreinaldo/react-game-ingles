import React from 'react'
import Temas from 'json!../Temas/Temas.json'
import PerguntasJson from 'json!../Temas/Perguntas.json';

var Tema = React.createClass({
    AtualizarQuestoes: function(event){
        console.log(event.target.value);
        if(event.target.value=='PerguntasJson'){
            this.setState({questoes:PerguntasJson});
        }
    },
    render : function(){
        return (
            <div>
                <form>
                    <select className="form-control custom-select" onChange={this.AtualizarQuestoes}>
                    {
                        
                        Temas.map(function(elemento,index){
                            return (
                                <option key={"option_"+index}>{elemento.titulo}</option>
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