import React from 'react'

class House extends React.Component{
    render(){
        return(
            <>
            <div className="house">
                <div style={{
                        backgroundImage:`url(${this.props.img})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        width: "250px",
                        height: "175px",
                        alignSelf: "center",
                        marginLeft: "10px"
                    }}
                    className="house-img"></div>
                {/* <img alt={this.props.name} height="100px" width="100px" src={this.props.img}/> */}
                <div className="house-desc-main">
                    <p>Name: {this.props.name}</p>
                    <p>Address: {this.props.address}</p>
                    <p>City: {this.props.city}</p>
                    <p>State: {this.props.state}</p>
                    <p>Zip: {this.props.zip}</p>
                </div>
                <div className="house-desc-right">
                    <p>Monthly Mortgage: {this.props.monthlyMortgage}</p>
                    <p>Desired Rent: {this.props.monthlyRent}</p>
                </div>
                <p onClick={() => this.props.deleteHouse(this.props.id)}>X</p>
            </div>
            </>
        )
    }
}

export default House