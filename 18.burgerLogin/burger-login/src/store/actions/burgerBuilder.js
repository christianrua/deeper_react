import * as ActionTypes from './actionTypes';


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
    return {
        type: ActionTypes.INIT_INGREDIENTS
    };
};
    
