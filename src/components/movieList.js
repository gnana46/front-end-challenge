import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class MovieList extends Component{

   
    render(){
        return (
            <div className="full-width search-results">
                <ul className="full-width movie-list">
                <li className="full-width list-item" key="1">
                        <Link to="/404" className="full-width item">
                            <img src="#"  alt="poster" />
                            <div className="item-info">
                                <h4 className="item-title">Title <span>Date</span></h4>
                                <ul className="sub-info">
                                    <li><i className="icon-sphere"></i><span>original language</span></li>
                                    <li><i className="icon-heart"></i><span></span></li>
                                </ul>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default MovieList;