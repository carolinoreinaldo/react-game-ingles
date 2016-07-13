import React from 'react';

var Questao = React.createClass({
    validaQuestao : function(event){
        event.preventDefault();
        var resposta = this.refs.englishResposta.value;
        var respostas = this.props.questao.respostas;
        this.props.questao.valida = "INVALIDA";
        for (var index = 0; index < respostas.length; index++) {
            var correta = respostas[index];
            if(correta.toUpperCase() == resposta.toUpperCase()){
                this.props.questao.valida = "VALIDA";
                break;
            }
        }
        this.props.ActualizarCorrecaoQuestao(this.props.questao)
    },
    proximaQuestao(event){
        event.preventDefault();
        this.refs.englishResposta.value = "";
        this.props.proximaQuestao(this.props.questao.indice);
    },
    componentWillReceiveProps : function(){

    },
    render : function(){
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1"><h4>{this.props.questao.texto} ( Escreva em Inglês )</h4></label>
                    <input
                    type="text"
                    ref="englishResposta"
                    className="form-control custom-input"
                    id="exampleInputEmail1"
                    autoComplete="off"
                    />
                    <input type="submit" className="btn btn-success custom-button" value="Validar" onClick={this.validaQuestao}/>
                    <input type="submit" className="btn btn-warning" value="Próximo exercicio" onClick={this.proximaQuestao}/>
                </div>
             </form>
        );
    }
})

export default Questao;