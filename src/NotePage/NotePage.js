import React, { Component } from 'react';
import { Link } from 'react-router-dom';

 class NotePage extends Component {
     render(){

        return(
            <div>
                <h2>NOTE PAGE</h2>
                <Link to='/'>
                    <button>Go Back</button>
                </Link>
            </div>
        )

    }
}

export default NotePage