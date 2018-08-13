import React,{Component} from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import {Link} from 'react-router-dom';
import * as actions from 'actions';

class MovieList extends Component{

    renderLists(){
        
            if(this.props.movieList.length > 0 && _.has(this.props.movieList[0], 'title')){
            return this.props.movieList.map(movie =>{
            return (
                     <li className="full-width list-item" key={movie.id}>
                        <Link to={`/${movie.id}`} className="full-width item">
                            <img src={movie.full_poster_path}  alt="poster" />
                            <div className="item-info">
                                <h4 className="item-title">{movie.title} <span>{movie.release_date}</span></h4>
                                <ul className="sub-info">
                                    <li><i className="icon-sphere"></i><span>original language: {movie.original_language}</span></li>
                                    <li><i className="icon-heart"></i><span>{parseInt(movie.popularity, 10)}%</span></li>
                                </ul>
                            </div>
                        </Link>
                    </li>
                );
            });
        }
      }
    render(){
        return (
            <div className="full-width search-results">
                <ul className="full-width movie-list">
                {this.renderLists()}
                </ul>
            </div>
        );
    }
}
const mapStateToProps = (state) =>{
    return {
        movieList: state.movieList
      }
}
export default connect(mapStateToProps, actions)(MovieList);