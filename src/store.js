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

export const HANDLE_NAME = "HANDLE_NAME"
export const HANDLE_ADDRESS = "HANDLE_ADDRESS"
export const HANDLE_CITY = "HANDLE_CITY"
export const HANDLE_STATE = "HANDLE_STATE"
export const HANDLE_ZIP = "HANDLE_ZIP"
export const HANDLE_IMG = "HANDLE_IMG"
export const HANDLE_MONTHLY_MORTGAGE = "HANDLE_MONTHLY_MORTGAGE"
export const HANDLE_MONTHLY_RENT = "HANDLE_MONTHLY_RENT"
export const CANCEL = "CANCEL"

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case HANDLE_NAME:
            return {...state, name: action.payload}
        case HANDLE_ADDRESS:
            return {...state, address: action.payload}
        case HANDLE_CITY:
            return {...state, city: action.payload}
        case HANDLE_STATE:
            return {...state, state: action.payload}
        case HANDLE_ZIP:
            return {...state, zip: action.payload}
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
                monthlyMortgage: '',
                monthlyRent: ''
            }
        default:
            return state
    }
}

export default createStore(
    reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )