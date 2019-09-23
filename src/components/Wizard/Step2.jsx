import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import store, {HANDLE_IMG} from '../../store'

class Step2 extends Component {
    constructor(){
        super()
        const reduxState = store.getState()
        this.state = {
            img: reduxState.img
        }
    }

    componentDidMount = () => {
        store.subscribe(() => {
            const reduxState = store.getState()
            this.setState({
                img: reduxState.img
            })
        })
    }

    handleImg = e => {
        this.setState({
            img: e.target.value
        })
    }

    nextStep = e => {
        store.dispatch({
            type: HANDLE_IMG,
            payload: this.state.img
        })
    }

    render(){
        return(
            <div>
                <h3>Image URL</h3>
                <input value={this.state.img} placeholder="Image URL" onChange={e=>this.handleImg(e)}/>
                <div className="wizard-buttons-step23">
                    <Link to='/wizard/step1'><button onClick={() => this.nextStep()}>Previous</button></Link>
                    <Link to='/wizard/step3'><button onClick={() => this.nextStep()}>Next</button></Link>
                </div>
            </div>
        )
    }
}

export default Step2