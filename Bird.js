import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';

class Bird extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: '',
            alt: ''
        };
        
        this.getBird = this.getBird.bind(this);
        
    }
    
    getBird() {
        var url = 'https://shibe.online/api/birds?count=1&urls=true&httpsUrls=true';
        axios.get(url)
        .then(response =>{
            this.setState({
                img: response.data[0],
                alt: 'Beautiful Bird'
            });
            console.log(this.state.img);
        });
        
//        event.preventDefault();
    }
    
    render() {
        let result = (
            <div>
                <h1>Click a button to get a random picture of a Bird!!!!!</h1>
                <button onClick={this.getBird}>Get a Random Bird Picture!</button><br/>
                <img src={this.state.img} alt={this.state.alt}></img>
            </div>
        );

        return result;
    }
}


// ========================================

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Bird />);

export default Bird;