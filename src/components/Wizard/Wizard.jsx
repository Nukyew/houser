import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Route} from 'react-router-dom'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import store, {CANCEL} from '../../store'

class Wizard extends Component{
    // constructor(){
    //     super()

    //     this.state = {
    //         name: '',
    //         address: '',
    //         city: '',
    //         state: '',
    //         zip: 0
    //     }
    // }

    // handleName = e => {
    //     this.setState({
    //         name: e.target.value
    //     })
    // }

    // handleAddress = e => {
    //     this.setState({
    //         address: e.target.value
    //     })
    // }

    // handleCity = e => {
    //     this.setState({
    //         city: e.target.value
    //     })
    // }

    // handleState = e => {
    //     this.setState({
    //         state: e.target.value
    //     })
    // }

    // handleZip = e => {
    //     this.setState({
    //         zip: e.target.value
    //     })
    // }

    cancel = () => {
        store.dispatch({
            type: CANCEL
        })
    }

    render(){
        return(
            <div>
                This is the Wizard.
                <Route path='/wizard/step1' component={Step1}/>
                <Route path='/wizard/step2' component={Step2}/>
                <Route path='/wizard/step3' component={Step3}/>
                <Link to='/'><button>Cancel</button></Link>
            </div>
        )
    }
}

export default Wizard