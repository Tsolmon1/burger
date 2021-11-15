import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import Burger from "../../components/Burger";
import ContactData from "../../components/ContactData";
import Button from "../../components/General/Button";
import css from "./style.module.css";

class ShippingPage extends React.Component {
    state = {
        
        ingredients: {},
        price: 0
    };

    // componentDidMount() {
    //     //console.log(this.props);
    //     const query = new URLSearchParams(this.props.location.search);
    //     const ingredients = {};
    //     let price = 0;

    //     for(let param of query.entries()) {
    //         if (param[0] !== "dun") ingredients[param[0]] = param[1];
    //         else price = param[1]
    //     }
    //     this.setState({ ingredients, price })
    //     //console.log(ingredients);
    // }

    showContactData = () => {
        this.props.history.replace("/ship/contact");
    };

    // goBack = () => {
    //     this.props.history.goBack();
    // }
    cancelOrder = () => {
        this.props.history.goBack();
    }

    render() {
        return (
            <div className={css.ShippingPage}>
                <p style={{ fontSize: "24px"}}><strong>Таны захиалга амттай байна гэж найдаж байна</strong></p>
                <p style={{ fontSize: "24px"}}><strong>{this.props.price}$</strong></p>
                <Burger />

                <Button daragdsan={this.cancelOrder} btnType="Danger" text="Захиалгыг цуцлах" />
                <Button daragdsan={this.showContactData} btnType="Success" text="Хүргэлтийн мэдээлэл оруулах" />

                <Route path="/ship/contact">
                    <ContactData />
                </Route> 
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        price: state.burgerReducer.totalPrice
    }
}
export default connect(mapStateToProps)(ShippingPage)

