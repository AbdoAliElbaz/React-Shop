import {INCREASE, DECREASE} from './types'

export const increment = () => {
    const action = {
        type : INCREASE 
    }
    return action
}

export const decrement = () => {
    const action = {
        type: DECREASE
    }
    return action
}