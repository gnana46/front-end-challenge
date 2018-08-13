import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class MovieDetails extends Component{

   

    render(){
        return (
            <div className="full-width gutter">
                <Link to="/" className="btn-back">Back</Link> 
                <div className="movie-details">
                        <img src="/" alt="poster"/>
                        <ul className="detail-list">
                            <li className="item title">Title</li>
                            <li className="item overview"><span>Overview:</span> Data </li>
                            <li className="item"><span>Release date:</span> Data </li>
                            <li className="item"><span>Original title:</span> Data </li>
                            <li className="item"><span>Popularity:</span> Data%</li>
                            <li className="item"><span>Language:</span> Data </li>
                            <li className="item"><span>Vote average:</span> Data</li>
                            <li className="item"><span>Votes:</span>Data</li>
                        </ul>
                    </div>
             </div>
        );
    };
};



export default MovieDetails;