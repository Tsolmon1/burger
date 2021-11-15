import React, { Component }  from "react";
// import { connect } from "react-redux";
import BuildControls from "../../components/BuildControls";
import Burger from "../../components/Burger";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";
import axios from "../../axios-orders";
// import * as actions from "../../redux/actions/burgerActioins"

const INGREDIENT_PRICES = { salad: 150, cheese: 250, bacon: 800, meat: 1500 };
// const INGREDIENT_NAMES = {
//     bacon: 'Гахайн мах',
//     cheese: 'Бяслаг',
//     meat: 'Үхрийн мах',
//     salad: 'Салад'
// };

class BurgerPage extends Component {

    state = {
        // ingredients: {
        //     salad: 0,
        //     cheese: 0,
        //     bacon: 0,
        //     meat: 0
        // },

        // totalPrice : 1000,
        purchasing: false,
        confirmOrder: false,
        // lastCustomerName: 'N/A'
    };

    componentDidMount = () => {
        // axios.get("/orders.json").then(response => {
        //     let arr = Object.entries(response.data);
        //     arr = arr.reverse();
        //     arr.forEach(el => {
        //         console.log(el[1].hayag.name + " ==>" +el[1].dun);
        //     })

        //     const lastOrder = arr[arr.length - 1][1];
        //     console.log(lastOrder);

        //     this.setState({ lastCustomerName: lastOrder.hayag.name, ingredients: lastOrder.orts, totalPrice: lastOrder.dun });
        //     //console.log(arr);
        // });
    }

    continueOrder = () => {

        // const params = [];
        // for (let orts in this.props.burgeriinOrts) {
        //     params.push(orts + '=' + this.props.burgeriinOrts[orts]);
        // }
        // params.push("dun=" + this.props.niitUne);
        // const query = params.join('&');
        // //console.log(query);
        // this.props.history.push({
        //     pathname: "/ship",
        //     search: query
        // });
        // this.closeConfirmModal();
        this.props.history.push('/ship');
    };

    showConfirmModal = () => {
        this.setState({ confirmOrder: true })
    };

    closeConfirmModal = () => {
        this.setState({ confirmOrder: false })
    };


    // ortsNemeh = type => {
    //     console.log("==>" + type);
    //     const newIngredients = { ...this.props.burgeriinOrts };
    //     newIngredients[type]++;

    //     const newPrice = this.props.niitUne + INGREDIENT_PRICES[type];
    //     this.setState({ purchasing:true, totalPrice:newPrice, ingredients: newIngredients });

    // };

    // ortsHasah = type => {
    //     if (this.props.burgeriinOrts[type] > 0) {
            
    //         const newIngredients = { ...this.props.burgeriinOrts };
    //         newIngredients[type]--;
            
    //         const newPrice = this.props.niitUne - INGREDIENT_PRICES[type];
    //         this.setState({ purchasing: newPrice>1000, totalPrice:newPrice, ingredients: newIngredients });
    //     }


    // };

    render() {
        //console.log(this.props);
        // const disabledIngredients = { ...this.props.burgeriinOrts };

        // for (let key in disabledIngredients) {
        //     disabledIngredients[key] = disabledIngredients[key] <=0;
        //     //console.log(disabledIngredients[key]);
        // }
        //console.log("hey", this.props);
        return (
            <div>
                <Modal closeConfirmModal={this.closeConfirmModal} show={this.state.confirmOrder}>
                    <OrderSummary onCancel={this.closeConfirmModal} onContinue={this.continueOrder} />
                </Modal>
                {/* <p style={{ width: "100%", textAlign: "center", fontSize: "28px" }}>Сүүлчийн захиалагч: {this.state.lastCustomerName}</p> */}
                {/* <Burger choose={this.props.choose} orts={this.props.burgeriinOrts} /> */}
                <Burger />
                <BuildControls showConfirmModal={this.showConfirmModal} ortsHasah={this.props.burgerOrtsHas} ortsNemeh={this.props.burgerOrtsNem} />
            </div>
        );
    }
}

// const mapStateToProps = state => {
//     return {
//         burgeriinOrts: state.ingredients,
//         niitUne: state.totalPrice,
//         purchasing: state.purchasing,
//         ingredientNames: state.ingredientNames
//     };
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         burgerOrtsNem: ortsNer => dispatch(actions.addIngredient(ortsNer)),
//         burgerOrtsHas: ortsNer => dispatch(actions.removeIngredient(ortsNer))
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(BurgerPage);
export default BurgerPage;