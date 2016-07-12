import React from 'react'

function RespostaCorreta(props){
    if(props.questao && props.questao.valida=="VALIDA"){
        return (
            <div id="Correto">
                <h3><p className="bg-success custom-title">Correto!</p></h3>
                <h4>Veja também outras opções:</h4>
                <ol>
                    {props.questao.respostas.map(function(resp,index){
                        return (
                            <li key={"li_"+index} className="custom-li">
                                <h4><i><b>{resp}</b></i></h4>
                            </li>
                        )
                    })} 
                </ol>
                <h4 className="custom-tip">Continue assim...!</h4>
            </div> 
        )
    } else {
        return <div />
    }
}


export default RespostaCorreta;