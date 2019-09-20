import React from 'react'
import {Link} from 'react-router-dom'
import store, {HANDLE_NAME, HANDLE_ADDRESS, HANDLE_CITY, HANDLE_STATE, HANDLE_ZIP} from '../../store'

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

    componentDidMount = () => {
        store.subscribe(() => {
            const reduxState = store.getState()
            this.setState({
                name: reduxState.name,
                address: reduxState.address,
                city: reduxState.city,
                state: reduxState.state,
                zip: reduxState.zip
            })
        }) 
    }

    handleName = e => {
        store.dispatch({
            type: HANDLE_NAME,
            payload: e.target.value
        })
    }

    handleAddress = e => {
        store.dispatch({
            type: HANDLE_ADDRESS,
            payload: e.target.value
        })
    }

    handleCity = e => {
        store.dispatch({
            type: HANDLE_CITY,
            payload: e.target.value
        })
    }

    handleState = e => {
        store.dispatch({
            type: HANDLE_STATE,
            payload: e.target.value
        })
    }

    handleZip = e => {
        store.dispatch({
            type: HANDLE_ZIP,
            payload: e.target.value
        })
    }



    render(){
        return(
            <div>
                <form>
                    <h3>Property Name</h3>
                    <input placeholder="name" onChange={e=>this.handleName(e)}/>
                    <h3>Address</h3>
                    <input placeholder="address" onChange={e=>this.handleAddress(e)}/>
                    <h3>City</h3>
                    <input placeholder="city" onChange={e=>this.handleCity(e)}/>
                    <h3>State</h3>
                    <input placeholder="state" maxLength="2" onChange={e=>this.handleState(e)}/>
                    <h3>Zip</h3>
                    <input placeholder="zip" maxLength="6" type="number" onChange={e=>this.handleZip(e)}/>
                </form>
                <div className="wizard-buttons">
                    <Link to='/wizard/step2'><button>Next</button></Link>
                </div>
        </div>
        )
    }
}

export default Step1