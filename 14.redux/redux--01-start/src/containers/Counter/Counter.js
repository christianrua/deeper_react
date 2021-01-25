import React, { Component } from 'react';
import {connect} from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions';

class Counter extends Component {
   
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAdd5Counter}  />
                <CounterControl label="Subtract 15" clicked={this.props.onSub5Counter}  />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store result</button>
                <ul>
                    {this.props.storedResults.map(strResults => (
                        <li key={strResults.id} onClick={() => this.props.onDeleteResult(strResults.id)}>{strResults.value}</li>
                    ))}
                    
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter : () => dispatch({type:actionTypes.INCREMENT}),
        onDecrementCounter : () => dispatch({type:actionTypes.DECREMENT}),
        onAdd5Counter : () => dispatch({type:actionTypes.ADD, val:10}),
        onSub5Counter : () => dispatch({type:actionTypes.SUBTRACT,val:15}), 
        onStoreResult : (result) => dispatch({type: actionTypes.STORE_RESULT, result: result}),
        onDeleteResult : (id) => dispatch({type: actionTypes.DELETE_RESULT, resultElId:id})
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);