import React from 'react'

class House extends React.Component{
    render(){
        return(
            <div>
                <h3>{this.props.name}</h3>
                <h4>{this.props.address}</h4>
                <h4>{this.props.city}</h4>
                <h4>{this.props.state}</h4>
                <h4>{this.props.zip}</h4>
                <h4>{this.props.monthlyMortgage}</h4>
                <h4>{this.props.monthlyRent}</h4>
                <button onClick={() => this.props.deleteHouse(this.props.id)}>Delete</button>
            </div>
        )
    }
}

export default House