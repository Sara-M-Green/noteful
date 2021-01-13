import React, { Component } from 'react';

class SidebarError extends Component {
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
                <ul>
                    <li>
                        <p>Error loading folders</p>
                        <p>Please try again later</p>
                    </li>
                </ul>
                
            )
        }
        return this.props.children;
    }
}

export default SidebarError;