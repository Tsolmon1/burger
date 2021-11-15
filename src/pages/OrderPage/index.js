import React from "react";
import { connect } from "react-redux";
import css from "./style.module.css";
import axios from "../../axios-orders";
import Spinner from "../../components/General/Spinner";
import Order from "../../components/Order";
import * as actions  from "../../redux/actions/orderActions";


class OrderPage extends React.Component {
    // state = {
    //     orders: [],
    //     loading: false
    // }

    componentDidMount(){
        this.props.loadOrders(this.props.userId);
        // this.setState({ loading:true });

        // axios.get("/orders.json").then(response => {
        //     this.setState({orders: Object.entries(response.data).reverse()});

            //arr = arr.reverse(); 
            // arr.forEach(el => {
            //     console.log(el[1].hayag.name + " ==>" +el[1].dun);
            // })

            // const lastOrder = arr[arr.length - 1][1];
            // console.log(lastOrder);

            //this.setState({ lastCustomerName: lastOrder.hayag.name, ingredients: lastOrder.orts, totalPrice: lastOrder.dun });
            //console.log(arr);
        // })
        // .catch(err => console.log(err))
        // .finally(() => {
        //     this.setState({ loading: false });
        // });
    }

    render() {
        //console.log(this.state.orders);
        return (
            <div>
                {this.props.loading ? ( <Spinner/>):( this.props.orders.map(el => <Order key={el[0]} order={el[1]}/>))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        orders: state.orderReducer.orders,
        loading: state.orderReducer.loading,
        userId: state.signupReducer.userId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadOrders: userId => dispatch(actions.loadOrders(userId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderPage);