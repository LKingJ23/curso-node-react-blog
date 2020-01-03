import React, { Component } from "react";
import MiComponente from './MiComponente';
import Peliculas from './Peliculas';

class SeccionPruebas extends Component {
    contador = 0;

    constructor(props) {
        super(props);

        this.state = {
            contador: 0
        };
    }

    /* state = {
        contador: 0
    };
    */

    HolaMundo(nombre, edad) {
        var presentacion = (
            <div>
                <h2>Hola soy {nombre}</h2>
                <h3>Tengo {edad} años</h3>
            </div>);
        return presentacion;
    }

    sumar = (e) => {
        this.setState({
            contador: (this.state.contador + 1)
        });
    }

    restar = (e) => {
        this.setState({
            contador: (this.state.contador - 1)
        })
    }

    render() {
        var nombre = "Migue";
        return (
            <section id="content">
                <h2 className="subheader">Últimos artículos</h2>
                <p>
                    Ea, pos ya esta encendio
                </p>
                <h2 className="subheader">Últimos artículos</h2>
                {this.HolaMundo(nombre, 28)}

                <h2 className="subheader">Componentes</h2>
                <section className="componentes">
                    <MiComponente />
                    <MiComponente />
                </section>

                <h2 className="subheader">Estado</h2>
                <p>
                    Contador: {this.state.contador}
                </p>
                <p>
                    <input type="button" value="Sumar" onClick={this.sumar}></input>
                    <input type="button" value="Restar" onClick={this.restar}></input>
                </p>
            </section>
        );
    }

}

export default SeccionPruebas;