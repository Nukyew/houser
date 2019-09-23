import {createStore} from 'redux'

const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip: 0,
    img: '',
    monthlyMortgage: 0,
    monthlyRent: 0
}

export const STEP_ONE = "STEP_ONE"
export const HANDLE_IMG = "HANDLE_IMG"
export const HANDLE_MONTHLY_MORTGAGE = "HANDLE_MONTHLY_MORTGAGE"
export const HANDLE_MONTHLY_RENT = "HANDLE_MONTHLY_RENT"
export const CANCEL = "CANCEL"

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case STEP_ONE:
            return {...state,
            name: action.payload.name,
            address: action.payload.address,
            city: action.payload.city,
            state: action.payload.state,
            zip: action.payload.zip}
        case HANDLE_IMG:
            return {...state, img: action.payload}
        case HANDLE_MONTHLY_MORTGAGE:
            return {...state, monthlyMortgage: action.payload}
        case HANDLE_MONTHLY_RENT:
            return {...state, monthlyRent: action.payload}
        case CANCEL:
            return {...state,
                name: '',
                address: '',
                city: '',
                state: '',
                zip: 0,
                img: '',
                monthlyMortgage: 0,
                monthlyRent: 0
            }
        default:
            return state
    }
}

export default createStore(
    reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )