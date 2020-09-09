import React from 'react';
import Table from './Table'
import '../App.css'

const Search = () => {
    return (
        <div>
            <input type="text" placeholder="Search Here" style={{height:'25px',width:'373px', marginLeft:'10px'}}/>
        </div>
    )
}

class Homepage extends React.PureComponent{

    constructor(props){
        super(props);
        this.state={
            firststate: [
                {firstname: "Rob Stark" , role: "Winterfell"},
                {firstname: "Arya Stark" , role: "Winterfell"},
                {firstname: "Sansa Stark" , role: "Winterfell"},
            ],
            secondstate: [
                {firstname: "John Snow" , role: "Castle Black"},
                {firstname: "Daenerys Targaryen" , role: "Dragonstone"},
            ]
        }

    }
    render () {
        return (
            <div className="container">
                <Search/>
                <Table
                 data = {this.state.firststate}
                 tide = {this.state.secondstate}
                 />
            </div>        
        )
    }
}

export default Homepage