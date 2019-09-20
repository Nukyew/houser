import React from 'react'
import House from '../House/House'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Dashboard extends React.Component{
    constructor(){
        super()

        this.state = {
            houseList: []
        }
    }

    componentDidMount() {
        this.getHouses()
    }

    async getHouses() {
        let res = await axios.get('/api/houses')
        this.setState({
            houseList: res.data
        })
        console.log(this.state.houseList)
    }

    deleteHouse = async (id) => {
        await axios.delete(`/api/houses/${id}`)
        this.getHouses()
    }

    render(){
        let houseList = this.state.houseList.map(el => {
            return(
                <div key={el.id}>
                    <House 
                        name={el.name}
                        address={el.address}
                        city={el.city}
                        state={el.state}
                        zip={el.zip}
                        id={el.id}
                        monthlyMortgage={el.mortgage}
                        monthlyRent={el.rent}
                        deleteHouse={this.deleteHouse}
                    />
                </div>
            )
        })
        return(
            <div>
                This is the Dashboard.
                <Link to='/wizard/step1'><button>Add New Property</button></Link>
                {/* <House /> */}
                {houseList}
            </div>
        )
    }
}

export default Dashboard