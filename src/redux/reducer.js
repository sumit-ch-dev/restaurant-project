import COMMENTS from "../data/comments"
import { combineReducers } from "redux"
import * as actionTypes from "./actionTypes"

const dishReducer = (dishState = {isLoading: false, dishes: []}, action) => {
    switch (action.type) {
        case actionTypes.LOAD_DISHES:
            return {...dishState, isLoading: false, dishes: action.payload}
        case actionTypes.DISHES_LOADING:
            return {...dishState, isLoading: true, dishes: []}
        default:
            return dishState
    }
}

const commentReducer = (commentState = COMMENTS, action) => {
    switch (action.type) {
        case actionTypes.ADD_COMMENT:
            let comment = action.payload
            comment.id = commentState.length
            comment.date = new Date().toISOString()
            // add new comments to the end of the comments array
            return commentState.concat(comment)
        default:
            return commentState
    }
}

export const Reducer = combineReducers({
    dishes: dishReducer,
    comments: commentReducer
})