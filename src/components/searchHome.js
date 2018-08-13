import React,{Component} from 'react';
import MovieList from 'components/movieList';
import SearchBox from 'components/searchBox';
import RecentViwedMovie from 'components/recentViewItems';

class SearchHome extends Component{

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

export default SearchHome;