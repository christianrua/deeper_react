import React, {useState, useEffect, useCallback} from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';

import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

import * as actions from '../../store/actions/index';
import axios from '../../axios-orders';



const  BurgerBuilder = props => {
   
    const [purchasing, setPurchasing] = useState(false);

    const dispatch = useDispatch();

    const ings = useSelector(state => {
        return state.burgerBuilder.ingredients;
    });

    const price = useSelector(state => {
        return state.burgerBuilder.totalPrice;
    });

    const error = useSelector(state => {
        return state.burgerBuilder.error;
    });

    const isAuthenticated = useSelector(state => {
        return state.auth.token !== null;
    });

    const onIgredientAdded = (ingName) => dispatch(actions.addIngredient(ingName));
    const onIgredientRemoved = (ingName) => dispatch(actions.removeIngredient(ingName));
    const initIngredients = useCallback(() => dispatch(actions.initIngredients()),[dispatch]);
    const onInitPurchase = () => dispatch(actions.purchaseInit());
    const onSetAuthRedirectPath = (path) => dispatch(actions.setAuthRedirectPath(path));

    

    useEffect(() => {
       initIngredients();
    },[initIngredients]);
    

    const updatePurchaseState = (ingredients) => {
        
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            }).reduce((sum, elem) => {
                return sum + elem;
            },0);
            //this.setState({purchasable: sum > 0})
        return sum > 0;    
    }


    const purchaseHandler = () => {
        if(isAuthenticated) {
            setPurchasing(true);
        } else {
            onSetAuthRedirectPath('/checkout');
            props.history.push('/auth');
        }
        
    }

    const purchaseCancelHandler = () => {
       setPurchasing(false);
    }

    const purchaseContinueHandler = () => {
       onInitPurchase();
    props.history.push('/checkout');

    }

    
        const disableInfo = {
            ...ings
        };
        for (let key in disableInfo){
            disableInfo[key] = disableInfo[key] <= 0
        }

        let orderSummary = null;
        let burger = error ? <p>Ingredients can't be loaded</p> : <Spinner />;
        
        if(ings){
            burger = (
                <Aux>
                    <Burger ingredients={ings}/>
                    <BuildControls 
                        ingredientAdded={onIgredientAdded}
                        ingredientRemoved={onIgredientRemoved}
                        disable={disableInfo}
                        purchasable={updatePurchaseState(ings)}
                        price={price}
                        isAuth={isAuthenticated}
                        ordered={purchaseHandler}
                    />
                </Aux>            
                    );

            orderSummary = <OrderSummary 
            ingredients={ings}
            purchaseCancelled={purchaseCancelHandler}
            purchaseContinued={purchaseContinueHandler}
            price={price.toFixed(2)}
            />;        
        }
       
        
        return (
            <Aux>
                <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    
}



export default withErrorHandler(BurgerBuilder, axios);