/**
 * MovieDetails Componet to render the movie details page according to the movie id
 *
 */

import React,{Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import _ from 'lodash';
import NoItem from 'components/noItem';
import * as actions from 'actions';

class MovieDetails extends Component{

    componentDidMount() { 
        //Check movie list & if data not present in recet view pass it to the store 
        if(!!this.props.movieList && this.props.movieList.length > 0
             && !_.find(this.props.recentList, {id: parseInt(this.props.match.params.id, 10)})){
                this.props.saveRecentView(_.find(this.props.movieList, {id: parseInt(this.props.match.params.id, 10)}))
        }
    }
    /**
     * To render movie details in the page if data is not present it will render NoItem component
     *
     * @param none
     * @returns Movie details HTML or <NoItem /> componet
     */
    renderDetails = () => {
        let details;
        if(!!this.props.movieList && this.props.movieList.length > 0){
            details = _.find(this.props.movieList, {id: parseInt(this.props.match.params.id, 10)});
            if(!!details) {
                return (
                    <div className="full-width movie-details">
                        <img src={details.full_poster_path} alt="poster"/>
                        <ul className="detail-list">
                            <li className="item title">{details.title}</li>
                            <li className="item overview"><span>Overview:</span> {details.overview} </li>
                            <li className="item"><span>Release date:</span> {details.release_date} </li>
                            <li className="item"><span>Original title:</span> {details.original_title} </li>
                            <li className="item"><span>Popularity:</span> {details.popularity}%</li>
                            <li className="item"><span>Language:</span> {details.original_language} </li>
                            <li className="item"><span>Vote average:</span> {details.vote_average}</li>
                            <li className="item"><span>Votes:</span> {details.vote_count}</li>
                        </ul>
                    </div>
                );
            }
        }else {
            return <NoItem />;
        }
      };

    render(){
        return (
            <div className="full-width gutter">
                <Link to="/" className="btn-back">Back</Link> 
                {this.renderDetails()}
             </div>
        );
    };
};

const mapStateToProps = (state) =>{
    return {
        movieList: state.movieList,
        recentList: state.recentList
      }
};

export default connect(mapStateToProps, actions)(MovieDetails);