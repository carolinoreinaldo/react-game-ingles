import React from 'react';

function RespostaErrada(props){
    if(props.questao && props.questao.valida=="INVALIDA"){
        return (
            <div id="Errado" className="customResposta">
                <h3><p className="bg-danger custom-title">Errado!</p></h3>
                <h4>Veja as opções corretas:</h4>
                <ol>
                    {props.questao.respostas.map(function(resp,index){
                        return (
                            <li key={"li_"+index} className="custom-li">
                                <h4><i><b>{resp}</b></i></h4>
                            </li>
                        )
                    })} 
                </ol>
                <h4 className="custom-tip">Tente mais vezes até fixar bem :)</h4>
            </div>
        )
    } else {
        return <div />
    }
}


export default RespostaErrada;