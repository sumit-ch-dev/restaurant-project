import * as actiontypes from './actionTypes';
import DISHES from '../data/dishes';

export const addComment = (dishId, author, rating, comment) => ({
    type: actiontypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        author: author,
        rating: rating,
        comment: comment
    }
});

export const loadDishes = dishes => ({
    type: actiontypes.LOAD_DISHES,
    payload: dishes
})

export const dishesLoading = () => ({
    type: actiontypes.DISHES_LOADING
})


export const fetchDishes = () => dispatch => {
    dispatch(dishesLoading());
    setTimeout(() => {
        dispatch(loadDishes(DISHES));
    }, 2000);
}