import React from 'react'
import '../App.css'

const Table = (props) => {

    const Tabledata = (props) => {
        return (

                <tr>
                    <td>{props.profiles.firstname}</td>   
                    <td>{props.profiles.role}</td>
                </tr>
        
        )
    }
    return (
        <div>
            <table className="table" border= "1">
                <th colSpan="2" className="header" style={{color:'red'}}>House Stark</th>
                {props.data.map(item => <Tabledata
                profiles = {item} />)}
                
                <th colSpan="2" className="header" style={{color:'red'}}>House Targaryen</th>
                {props.tide.map(item => <Tabledata
                profiles = {item} />)}
            
            </table>
        </div>
    )
}

export default Table