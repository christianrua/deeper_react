import * as ActionTypes from './actionTypes';
import axios from '../../axios-orders';

export const addIngredient = (name) => {
    return {
        type: ActionTypes.ADD_INGREDIENTS,
        ingredientName: name
    };
};

export const removeIngredient = (name) => {
    return {
        type: ActionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    };
};
    

export const setIngredients = (ingredients) => {
    return {
        type: ActionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    }
};

export const fetchIngredientsFail = () => {
    return {
        type: ActionTypes.FETCH_INGREDIENTS_FAILED
    }
};

export const initIngredients = () => {
    return dispatch => {
        axios.get('https://react-my-burger-19f84.firebaseio.com/ingredients.json')
        .then(response => {
            dispatch(setIngredients(response.data));
                })
        .catch(error => {
           dispatch(fetchIngredientsFail());
        });
    };
};
    
