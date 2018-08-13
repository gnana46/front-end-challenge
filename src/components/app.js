import React from 'react';
import {Route, Switch} from 'react-router-dom';
import SearchHome from 'components/searchHome';
import MovieDetails from 'components/movieDetails';
import Header from 'components/header';
import Footer from 'components/footer';


export default () => {
    return (
        <div className="full-width page-wrapper">
            <Header />
            <Switch>
                <Route exact path="/:id" component={MovieDetails} />
                <Route path="/" component={SearchHome} />
            </Switch>
            <Footer />
        </div>
    );
};
