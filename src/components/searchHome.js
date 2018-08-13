import React,{Component} from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import * as actions from 'actions';
import MovieList from 'components/movieList';
import SearchBox from 'components/searchBox';
import RecentViwedMovie from 'components/recentViewItems';

const socket = io('https://sbot-fe-test.herokuapp.com');

class CommentBox extends Component{

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            hasError: false
        }
        this.handleSearch = this.handleSearch.bind(this);
      };

    handleSearch(query){

        this.setState({
            isLoading: true
        });

        this.props.fetchMovieList( query, response => {
            this.props.clearMovieList();
            if (response.data && response.data.listening_token) {
                socket.on('movies.' + response.data.listening_token,  (data) => {
                  var event = JSON.parse(data);
                  if (event.status === 'active') {
                    this.props.saveMovieList(event)
                   //console.log(event)
                   //socket.close();
                    
                  } else if (event.status === 'terminated') {
                   console.log(event)
                  }
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
                    </div>
                </div>
                <RecentViwedMovie />
            </div>
        );
    }
}

export default connect(null, actions)(CommentBox);