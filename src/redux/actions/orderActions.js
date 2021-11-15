import axios from "../../axios-orders";

export const loadOrders = userId => {
    return function(dispatch, getState){
        //type: 'LOAD_ACTIONS' 
        dispatch(loadOrdersStart());
        const token = getState().signupReducer.token;

        axios.get(`orders.json?&auth=${token}&orderBy="userId"&equalTo="${userId}"`).then(response => {
            const loadedOrders = Object.entries(response.data).reverse();
            
            dispatch(loadOrdersSuccess(loadedOrders));
            // arr = arr.reverse(); 
            // arr.forEach(el => {
            //     console.log(el[1].hayag.name + " ==>" +el[1].dun);
            // })

            // const lastOrder = arr[arr.length - 1][1];
            // console.log(lastOrder);

            // this.setState({ lastCustomerName: lastOrder.hayag.name, ingredients: lastOrder.orts, totalPrice: lastOrder.dun });
            // console.log(arr);
        })
        .catch(err => dispatch(loadOrdersError(err)));
        // .finally(() => {
        //     this.setState({ loading: false });
        // });
    };
};

export const loadOrdersStart = () => {
    return {
        type: "LOAD_ORDERS_START"
    }
}

export const loadOrdersSuccess = loadedOrders => {
    return {
        type: "LOAD_ORDERS_SUCCESS",
        orders: loadedOrders
    }
}

export const loadOrdersError = error => {
    return {
        type: "LOAD_ORDERS_ERROR",
        error
    }
}

export const saveOrder = newOrder => {
    return function(dispatch, getState) {
        dispatch(saveOrderStart());
        const token = getState().signupReducer.token;
        axios.post(`/orders.json?auth=${token}`, newOrder).then(response => {
            //alert('success');
            dispatch(saveOrderSuccess());
            //console.log('amjilttai');
        })
        .catch(error => {
            dispatch(saveOrderError(error));
            //console.log('order amjiltgui', error);
        })
        

    };
}

export const saveOrderStart = () => {
    return {
        type: "SAVE_ORDER_START",
      
    }
}

export const saveOrderSuccess = () => {
    return {
        type: "SAVE_ORDER_SUCCESS",
     
    }
}

export const saveOrderError = error => {
    return {
        type: "SAVE_ORDER_ERROR",
        errorMessage: error
    }
}