import React from 'react';
import {connect} from 'react-redux';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import './App.css';
import Scroll from '../Components/Scroll';
import ErrorBoundry from '../Components/ErrorBoundry';
import {setSearchField} from '../actions';

const mapStateToProps = state => {
    return {
        //searchfields tha twe will return is going to come from the state.search robots. searchfield
        searchField: state.searchField
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        //just a prop
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}

class App extends React.Component {
    //app now owns state so we can change it only here
    constructor(props){
        super(props)
        this.state = {
            robots: []
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
    render(){
        const {robots} = this.state;
        const {searchField, onSearchChange} = this.props;
        //should give the value of what is in the search box
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        return (
            <div className='tc'>
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
    }
}
//using connect, connect is going to run, return another function and returns a function with app as an argument
export default connect(mapStateToProps, mapDispatchToProps)(App);