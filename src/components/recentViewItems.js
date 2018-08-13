/**
 * RecentViwedMovie: to render recent view items
 * Check the recentList & render the items if not it will render the no item component
 * 
 */

import React,{Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import NoItem from 'components/noItem';

class RecentViwedMovie extends Component{

    renderLists(){
        if(!!this.props.recentList && this.props.recentList.length > 0){
            return this.props.recentList.map(movie =>{
                return (
                    <li className="full-width item" key={movie.id}>
                        <Link to={`/${movie.id}`} className="full-width">
                        {movie.title}
                        </Link>
                    </li>
                );
            });
        }else {
            return <NoItem />;
        }
      }
    render(){
        return (
            <div className="recent-view">
                <h2>Recent viewed movies</h2>
                <ul className="full-width">
                    {this.renderLists()}
                </ul>
            </div>
        );
    }
}
const mapStateToProps = (state) =>{
    return {
        recentList: state.recentList
      }
}
export default connect(mapStateToProps)(RecentViwedMovie);