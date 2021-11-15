import React from "react";
import { connect } from "react-redux";
import BuildControl from "../BuildControl";
import css from "./style.module.css";
import * as actions from "../../redux/actions/burgerActioins"

const BuildControls = props => {
    const disabledIngredients = { ...props.burgeriinOrts };

    for (let key in disabledIngredients) {
        disabledIngredients[key] = disabledIngredients[key] <=0;
        //console.log(disabledIngredients[key]);
    }

    return (
        <div className={css.BuildControls}>
            <p>Бургерийн үнэ: <strong> {props.price}</strong></p>
            {Object.keys(props.ingredientNames).map(el => (
                <BuildControl key={el} disabled={disabledIngredients} ortsHasah={props.ortsHasah} ortsNemeh={props.ortsNemeh} type={el} orts={props.ingredientNames[el] } />
            ))}
            
            <button onClick={props.showConfirmModal} disabled={!props.purchasing} className={css.OrderButton}>Захиалах</button>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        burgeriinOrts: state.burgerReducer.ingredients,
        price: state.burgerReducer.totalPrice,
        purchasing: state.burgerReducer.purchasing,
        ingredientNames: state.burgerReducer.ingredientNames
    };
};

const mapDispatchToProps = dispatch => {
    return {
        ortsNemeh: ortsNer => dispatch(actions.addIngredient(ortsNer)),
        ortsHasah: ortsNer => dispatch(actions.removeIngredient(ortsNer))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BuildControls);