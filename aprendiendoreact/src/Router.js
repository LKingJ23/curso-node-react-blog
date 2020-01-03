import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import MiComponente from './components/MiComponente';
import Error from './components/Error';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Blog from './components/Blog';
import Peliculas from './components/Peliculas';
import Formulario from './components/Formulario';
import Search from './components/Search';
import Article from './components/Article';
import CreateArticle from './components/CreateArticle';
import EditArticle from './components/EditArticle';

class Router extends Component{
    render(){
        return(
            <BrowserRouter>
                <Header />
                
                {/* Configurar rutas y páginas */}
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/home" component={Home}></Route>
                    <Route exact path="/blog" component={Blog}></Route>
                    <Route exact path="/blog/articulo/:id" component={Article}></Route>
                    <Route exact path="/blog/crear" component={CreateArticle}></Route>
                    <Route exact path="/blog/editar/:id" component={EditArticle}></Route>
                    <Route exact path="/blog/busqueda/:search" component={Search}></Route>
                    <Route exact path="/redirect/:search" render = {
                        (props) => {
                            var search = props.match.params.search;
                            return (
                                <Redirect to={'/blog/busqueda/' + search} />
                            );
                        }}>
                    </Route>
                    <Route exact path="/formulario" component={Formulario}></Route>
                    <Route exact path="/peliculas" component={Peliculas}></Route>

                    <Route exact path="/pagina-1" render={() => (
                        <React.Fragment>
                            <h1>Hola mundo desde pagina 1</h1>
                            <MiComponente saludo="Hola amigo" />
                        </React.Fragment>
                    )} />

                    <Route exact path="/pruebas/:nombre/:apellidos?" render={(props) => {
                        var nombre = props.match.params.nombre;
                        var apellidos = props.match.params.apellidos;
                        return (
                            <div id="content">
                                <h1 class="subheader">Página de pruebas</h1>
                                <h2>
                                {nombre && !apellidos &&
                                    <span>{nombre}</span>
                                }
                                {nombre && apellidos &&
                                    <span>{nombre} {apellidos}</span>
                                }
                                </h2>
                            </div>
                        );
                    }} />

                    <Route component={Error} />
                </Switch>
                <div className="clearfix"></div>
                <Footer />
            </BrowserRouter>
        );
    }
}

export default Router;