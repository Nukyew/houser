import React from 'react'
import {Link} from 'react-router-dom'
import store, {STEP_ONE} from '../../store'

class Step1 extends React.Component{
    constructor(){
        super()
        const reduxState = store.getState()
        this.state = {
            name: reduxState.name,
            address: reduxState.address,
            city: reduxState.city,
            state: reduxState.state,
            zip: reduxState.zip
        }
    }
    
    handleChange = e => {
        if (e.target.id === "name") this.setState({name: e.target.value})
        else if (e.target.id === "address") this.setState({address: e.target.value})
        else if (e.target.id === "city") this.setState({city: e.target.value})
        else if (e.target.id === "state") this.setState({state: e.target.value})
        else if (e.target.id === "zip") this.setState({zip: e.target.value})
    }

    nextPage = () => {
        store.dispatch({
            type: STEP_ONE,
            payload: this.state
        })
    }

    render(){
        return(
            <div>
                <form>
                    <h3>Property Name</h3>
                    <input id="name" placeholder="name" value={this.state.name} onChange={e=>this.handleChange(e)}/>
                    <h3>Address</h3>
                    <input id="address" placeholder="address" value={this.state.address} onChange={e=>this.handleChange(e)}/>
                    <h3>City</h3>
                    <input id="city" placeholder="city" value={this.state.city} onChange={e=>this.handleChange(e)}/>
                    <h3>State</h3>
                    <input id="state" placeholder="state" value={this.state.state} maxLength="2" onChange={e=>this.handleChange(e)}/>
                    <h3>Zip</h3>
                    <input id="zip" placeholder="zip" value={this.state.zip} maxLength="6" type="number" onChange={e=>this.handleChange(e)}/>
                </form>
                <div className="wizard-buttons">
                    <Link to='/wizard/step2'><button onClick={() => this.nextPage()}>Next</button></Link>
                </div>
        </div>
        )
    }
}

export default Step1