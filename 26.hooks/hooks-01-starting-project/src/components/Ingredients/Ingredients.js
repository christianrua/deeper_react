import React, { useReducer, useEffect, useCallback,useMemo} from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import ErrorModal from '../UI/ErrorModal';
import Search from './Search';
import useHttp from '../../hooks/http';

const ingredientReducer = (currentIgredients, action) => {
  switch (action.type) {
    case 'SET':
      return action.ingredients;
    case 'ADD':
      return [...currentIgredients, action.ingredient];
    case 'DELETE':
      return currentIgredients.filter(ing => ing.id !== action.id);
    default:
      throw new Error('Should not get there!');
  }
};



const Ingredients = () => {
  const [userIngredients, dispatch] = useReducer(ingredientReducer,[]);
  const {
    isLoading, 
    error, 
    data, 
    sendRequest, 
    reqExtra, 
    reqIdentifier,
    clear
  } = useHttp();
  

  
  useEffect(() => {
    if(!isLoading && !error && reqIdentifier === 'REMOVE_INGREDIENT'){
      dispatch({type:'DELETE',id: reqExtra});
    } else if(!isLoading && !error &&reqIdentifier === 'ADD_INGREDIENT') {
      dispatch({
        type:'ADD', 
        ingredient:{ id: data.name, ...reqExtra}
          });
    }
    
  },[data, reqExtra, reqIdentifier, isLoading, error])

  const filteredIngredientsHandler = useCallback(filteredIngredients => {
    dispatch({type:'SET',ingredients: filteredIngredients});
  },[]);   

  const addIngredientHandler = useCallback(ingredient => {
    sendRequest('https://react-hooks-update-7bae5-default-rtdb.firebaseio.com/ingredients.json',
    'POST',
    JSON.stringify(ingredient),
    ingredient,
    'ADD_INGREDIENT'
    );
  },[sendRequest]);

  const removeIngredientHanlder = useCallback(item => {
    console.log(item);
    sendRequest(
      `https://react-hooks-update-7bae5-default-rtdb.firebaseio.com/ingredients/${item}.json`,
      'DELETE',
      null,
      item,
      'REMOVE_INGREDIENT'
      );
  },[sendRequest]);

  

  const ingredientList = useMemo(() => {
    return (<IngredientList 
      ingredients={userIngredients}
        onRemoveItem = {removeIngredientHanlder}
      />);
  },[userIngredients,removeIngredientHanlder]);

  return (
    <div className="App">
    {error ? <ErrorModal onClose={clear}>{error}</ErrorModal>:null}
      <IngredientForm 
        onAddIngredient = {addIngredientHandler}
        loading = {isLoading}
      />

      <section>
        <Search onLoadIngredients={filteredIngredientsHandler}/>
        {ingredientList}
      </section>
    </div>
  );
}

export default Ingredients;
