import React, { Component } from 'react';
import Pelicula from './Pelicula';
import Slider from './Slider';
import Sidebar from './Sidebar';

class Peliculas extends Component {
    state = {};

    cambiarTitulo = () => {
        var { peliculas } = this.state;
        //var random = Math.floor(Math.random() * 3);
        peliculas[0].titulo = "Batman Begins";

        this.setState({
            peliculas: peliculas
        });
    }

    favorita = (pelicula, indice) => {
        this.setState({
            favorita: pelicula
        });
    }

    componentWillMount() {
        //alert("Se va a montar el componente")
        this.setState({
            peliculas: [
                { titulo: 'Batman vs Superman', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlei1Ry8Krtfv-Tcky5mxq12txPG2agW42DlwrplzUJDDNPaZopQ&s' },
                { titulo: 'Como entrenar a tu dragon', image: 'https://d15wiecqsofdwm.cloudfront.net/wp-content/uploads/2019/02/18172056/como-entrenar-a-tu-dragon-ig.jpg' },
                { titulo: 'Looper', image: 'https://cdn2.actitudfem.com/media/files/styles/big_img/public/images/2012/10/looper.jpg' }
            ],
            nombre: 'Migue',
            favorita: {}
        });
    }

    componentDidMount() {
        //alert("Ya se ha montado el componente")
    }

    componentWillUnmount() {
        //alert("Me voy a desmontar");
    }

    render() {
        var pStyle = {
            background: 'green',
            color: 'white',
            padding: '10px'
        };

        var favorita;
        if(this.state.favorita.titulo){
            favorita = (
                <p className="favorita" style={pStyle}>
                    <strong>La pelicula favorita es: </strong>
                    <span>{this.state.favorita.titulo}</span>
                </p>
            );
        } else {
            favorita = (
                <p>No hay pelicula favorita</p>
            );
        }
        

        return (
            <React.Fragment>
                <Slider 
                    title="Peliculas"
                    size="slider-small"

                />
                <div className="center">
                    <div id="content" className="peliculas">
                        <h2 className="subheader">Listado de Peliculas</h2>
                        <p>Selección de las peliculas favoritas de {this.state.nombre}</p>
                        <p>
                            <button onClick={this.cambiarTitulo}>
                                Cambiar titulo de Batman
                            </button>
                        </p>
                        {/*this.state.favorita.titulo ? (
                            <p className="favorita" style={pStyle}>
                                <strong>La pelicula favorita es: </strong>
                                <span>{this.state.favorita.titulo}</span>
                            </p>
                        ) : (
                                <p>No hay pelicula favorita</p>
                            )
                        */}
                        {favorita}

                        <div id="articles" className="peliculas">
                            {
                                this.state.peliculas.map((pelicula, i) => {
                                    return (
                                        <Pelicula
                                            key={i}
                                            pelicula={pelicula}
                                            indice={i}
                                            marcarFavorita={this.favorita}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                    <Sidebar
                        blog="false"
                    />
                </div>
            </React.Fragment>
        );
    }
}

export default Peliculas;