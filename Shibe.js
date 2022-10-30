import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';

class Shibe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: '',
            alt: ''
        };
        
        this.getShibe = this.getShibe.bind(this);
        
    }
    
    getShibe() {
        var url = 'https://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true';
        axios.get(url)
        .then(response =>{
            this.setState({
                img: response.data[0],
                alt: 'Beautiful Shiba Inu'
            });
            console.log(this.state.img);
        });
        
//        event.preventDefault();
    }
    
    render() {
        let result = (
            <div>
                <h1>Click a button to get a random picture of a Shiba Inu!!!!!</h1>
                <div class="button">
                    <button onClick={this.getShibe}>Get a Random Shiba Inu Picture!</button><br/>
                </div>
                <img src={this.state.img} alt={this.state.alt}></img>
            </div>
        );

        return result;
    }
}


// ========================================

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Shibe />);

export default Shibe;