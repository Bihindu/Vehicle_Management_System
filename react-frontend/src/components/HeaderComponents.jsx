import React, { Component } from 'react';

class HeaderComponents extends Component {
    constructor(props){
        super(props)

        this.state={

        }
    }
    render() {
        return (
            <div>
                <header>
                    <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                    <div className='navbar-brand'><h2>Vehicle Services Management System</h2></div>    

                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponents;