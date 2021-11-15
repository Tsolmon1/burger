import React from "react";
import { connect } from "react-redux";
import BurgerIngredient from "../BurgerIngredient";
import css from "./style.module.css";

import { withRouter  } from "react-router-dom";

const Burger = props => {
    //let content = <p>Хачиртай талхныхаа орцыг сонгоно уу...</p>;

    //console.log(props.orts);

    //object massiv bolgoh
    const items = Object.entries(props.orts);
    //console.log(items);

    let content = [];
    items.map(el => {
        for(let i=0; i < el[1]; i++)
            content.push(<BurgerIngredient choose={props.choose} key={`${el[0]}${i + 1}`} type={el[0]} />);
    });

    if(content.length === 0)
        content = <p>Хачиртай талхныхаа орцыг сонгоно уу...</p>;
    console.log(props);
    return (
        <div className={css.Burger}>
            <BurgerIngredient type="bread-top"/>
            {/* <BurgerIngredient type="salad"/>
            <BurgerIngredient type="bacon"/>
            <BurgerIngredient type="cheese"/> */}
            {content}
            <BurgerIngredient type="bread-bottom"/>

        </div>
    );

};

const mapStateToProps = state => {
    return {
        orts: state.burgerReducer.ingredients
    };
     
};

export default connect(mapStateToProps)(withRouter(Burger));