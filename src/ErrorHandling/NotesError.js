import React, { Component } from 'react';

class NotesError extends Component {
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        };
    }
    
    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                  <h2>Hmm, something went wrong.</h2>
                    <h3>Please try again later.</h3>  
                </div>
                
            )
        }
        return this.props.children;
    }
}

export default NotesError;