import React from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';
import './App.css';


class App extends React.Component {
    //app now owns state so we can change it only here
    constructor(props){
        super(props)
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }
    render(){
        //should give the value of what is in the search box
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        return (
            <div className='tc'>
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots}/>
            </div>
        );
    }
}

export default App;