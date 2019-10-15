import React, {Component} from 'react';
import Gallery from './Galery/Gallery';
import Nav from './NavBar/Nav';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Nav/>
                <Gallery/>
            </div>
        );
    }
}

export default App;
