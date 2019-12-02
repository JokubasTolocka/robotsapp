import React from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import './App.css';
import Scroll from '../Components/Scroll';


class App extends React.Component {
    //app now owns state so we can change it only here
    constructor(props){
        super(props)
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.json();  
            })
            .then(users => {
                this.setState({robots: users})
            })
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }
    render(){
        const {robots, searchfield} = this.state;
        //should give the value of what is in the search box
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });
        return (
            <div className='tc'>
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        );
    }
}

export default App;