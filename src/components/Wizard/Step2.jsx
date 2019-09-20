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
        console.log(e.target.value)
        store.dispatch({
            type: HANDLE_IMG,
            payload: e.target.value
        })
    }

    render(){
        return(
            <div>
                <h3>Image URL</h3>
                <input placeholder="Image URL" onChange={e=>this.handleImg(e)}/>
                <div className="wizard-buttons-step23">
                    <Link to='/wizard/step1'><button>Previous</button></Link>
                    <Link to='/wizard/step3'><button>Next</button></Link>
                </div>
            </div>
        )
    }
}

export default Step2