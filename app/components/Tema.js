import React from 'react'

var Tema = React.createClass({
    render : function(){
        return (
            <div>
                <select className="form-control custom-select">
                    <option>Tema 1</option>
                    <option>Tema 2</option>
                    <option>Tema 3</option>
                    <option>Tema 4</option>
                    <option>Tema 5</option>
                    <option>Tema 6</option>
                </select>
            </div>
        )
    }
})

export default Tema;