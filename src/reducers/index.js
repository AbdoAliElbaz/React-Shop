import {INCREASE , DECREASE } from '../actions/types'


const initState  = {
    count : 0 
}

const check = (state= initState , action)  => {
    
    if (action.type === INCREASE ) {
        return {count :state.count +1}
    }
    else if (action.type === DECREASE) {
        return {count :state.count - 1}
    }
    return state ;
}

export default check