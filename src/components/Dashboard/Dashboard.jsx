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
                <div className="houses" key={el.id}>
                    <House 
                        name={el.name}
                        address={el.address}
                        city={el.city}
                        state={el.state}
                        zip={el.zip}
                        id={el.id}
                        img={el.img}
                        monthlyMortgage={el.mortgage}
                        monthlyRent={el.rent}
                        deleteHouse={this.deleteHouse}
                    />
                </div>
            )
        })
        return(
            <div className="dashboard-wrapper">
                <div className="dashboard">
                    <div className="dashboard-header">
                        <p>Dashboard</p>
                        <Link to='/wizard/step1'><button className="add-new-property">Add New Property</button></Link>
                    </div>
                    <hr/>
                    <h4>House Listings</h4>
                    <main>
                        {houseList}
                    </main>
                </div>
            </div>
        )
    }
}

export default Dashboard