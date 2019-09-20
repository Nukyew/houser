import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Route} from 'react-router-dom'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import store, {CANCEL} from '../../store'

class Wizard extends Component{
    cancel = () => {
        store.dispatch({
            type: CANCEL
        })
    }

    render(){
        return(
            <div className="wizard-wrapper">
                <div className="wizard">
                    <div className="wizard-header">
                        <h1>Add New Listing</h1>
                        <Link to='/'><button onClick={() => this.cancel()}>Cancel</button></Link>
                    </div>
                    <div className="steps">
                        <Route path='/wizard/step1' component={Step1}/>
                        <Route path='/wizard/step2' component={Step2}/>
                        <Route path='/wizard/step3' component={Step3}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Wizard