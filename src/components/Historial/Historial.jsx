import React from "react";

export default class Historial extends React.Component{
    render(){

        const {seleccionAnterior, historial}=this.props; 
        return(
            <div className="recordatorio">
                <h3>Seleccion anterior:
                    {seleccionAnterior}
                </h3>
                <h4>Historial:  </h4>
                <ul>{historial} </ul>
            </div>
        )
    }
}