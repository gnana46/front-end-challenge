/**
 * SearchHome: Home component it contains SearchBox, MovieList &  RecentViwedMovie
 * @props: pass function handleSearch to get the text input value
 * 
 */

import React,{Component} from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import * as actions from 'actions';
import _ from 'lodash';
import MovieList from 'components/movieList';
import SearchBox from 'components/searchBox';
import RecentViwedMovie from 'components/recentViewItems';
import NoItem from 'components/noItem';

//intialize socket IO to get movie list one by one
const socket = io('https://sbot-fe-test.herokuapp.com');

class SearchHome extends Component{

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            hasError: false
        }
        this.handleSearch = this.handleSearch.bind(this);
      };

    /**
     * To get the list & movie token. with the token get the remaining  items
     *
     * @param query string
     * @returns {object}
     */

    handleSearch(query){

        this.setState({
            isLoading: true,
            hasError: false
        });

        this.props.fetchMovieList( query, response => {
            this.props.clearMovieList();
            if (response.data && response.data.listening_token && _.has(response.data, 'title')) {

                socket.on('movies.' + response.data.listening_token,  (data) => {
                  var event = JSON.parse(data);
                  if (event.status === 'active') {
                    this.props.saveMovieList(event)
                  } else if (event.status === 'terminated') {
                    this.setState({
                        isLoading: false
                    });
                  }
                });

              }else{
                this.setState({
                    isLoading: false,
                    hasError: true
                });
              }
        });

    };

    render(){
        return( 
            <div className="full-width gutter">
                <div className="search-wrapper">
                    <h2 className="search-title">Search movie</h2>
                    <div className="search-block">
                        <SearchBox handleSearch={this.handleSearch}/>
                        <MovieList />
                        {this.state.isLoading ? <div className="loading">Loading..</div> : null}
                        {this.state.hasError ? <NoItem /> : null}
                    </div>
                </div>
                <RecentViwedMovie />
            </div>
        );
    }
}

export default connect(null, actions)(SearchHome);