import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class RecentViwedMovie extends Component{

    render(){
        return (
            <div className="recent-view">
                <h2>Recent viewed movies</h2>
                <ul className="full-width">
                    <li className="full-width item" key="01">
                        <Link to="04" className="full-width">
                        Title
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default RecentViwedMovie;