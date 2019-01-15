import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import React from 'react';
import {Route} from 'react-router-dom';
import About from './about';
import Home from './home';
import MovieList from './movie_list';
import Nav from './nav';
import SignIn from './sign_in';
import SignUp from './sign_up';
import MovieQuote from './movie_quote';



const App = () => (
    <div>
        <Nav/>

        <div className="container">
            <Route exact path="/" component={Home}/>

            <Route path="/about" component={About}/>

            <Route exact path="/movie-list" component={MovieList}/>

            <Route path="/movie-list/:type" component={MovieList}/>

            <Route path="/movie-quote" component={MovieQuote}/>

            <Route path="/sign-in" component={SignIn}/>

            <Route path="/sign-up" component={SignUp}/>


        </div>

    </div>
);

export default App;
