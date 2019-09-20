import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import store, {HANDLE_MONTHLY_MORTGAGE, HANDLE_MONTHLY_RENT, CANCEL} from '../../store'

class Step3 extends React.Component{
    constructor(){
        super()
        const reduxState = store.getState()
        this.state = {
            monthlyMortgage: reduxState.monthlyMortgage,
            monthlyRent: reduxState.monthlyRent
        }
    }

    componentDidMount = () => {
        store.subscribe(() => {
            const reduxState = store.getState()
            this.setState({
                monthlyMortgage: reduxState.monthlyMortgage,
                monthlyRent: reduxState.monthlyRent
            })
        })
    }

    handleMonthyMortage = e => {
        store.dispatch({
            type: HANDLE_MONTHLY_MORTGAGE,
            payload: e.target.value
        })
    }

    handleMonthlyRent = e => {
        store.dispatch({
            type: HANDLE_MONTHLY_RENT,
            payload: e.target.value
        })
    }

    async addHouse() {
        const reduxState = store.getState()
        let {name, address, city, state, zip} = reduxState
        let {monthlyMortgage, monthlyRent} = this.state
        await axios.post('/api/houses', {name, address, city, state, zip, monthlyMortgage, monthlyRent})
        store.dispatch({
            type: CANCEL
        })
        this.props.history.push('/')
    }

    render(){
        return(
            <div>
                This is Step 3.
                <input placeholder="Monthly Mortgage Amount" onChange={e=>this.handleMonthyMortage(e)}/>
                <input placeholder="Monthly Rent Amount" onChange={e=>this.handleMonthlyRent(e)}/>
                <Link to='/wizard/step2'><button>Previous</button></Link>
                <button onClick={() => this.addHouse()}>Complete</button>
            </div>
        )
    }
}

export default Step3