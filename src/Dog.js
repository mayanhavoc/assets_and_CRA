import React, { Component } from 'react';
import './Dog.css';
import spider from './spider.JPG';

class Dog extends Component {
    render(){
        return (
            <div className="Dog">
                <h1>Dog</h1>
                <img className="Dog-spider" src={spider} alt="spider"/>
            </div>
        )
    }
}

export default Dog;