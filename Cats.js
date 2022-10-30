import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';

class Cats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: '',
            alt: ''
        };
        
        this.getCat = this.getCat.bind(this);
        
    }
    
    getCat() {
        var url = 'https://shibe.online/api/cats?count=1&urls=true&httpsUrls=true';
        axios.get(url)
        .then(response =>{
            this.setState({
                img: response.data[0],
                alt: 'Beautiful Cat'
            });
            console.log(this.state.img);
        });
        
//        event.preventDefault();
    }
    
    render() {
        
        let result = (
            <div>
                <h1>Click a button to get a random picture of a Cat!!!!!</h1>
                <button onClick={this.getCat}>Get a Random Cat Picture!</button><br/>
                <img src={this.state.img} alt={this.state.alt}></img>
            </div>
        );
        

        return result;
    }
}


// ========================================

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Cats />);

export default Cats;