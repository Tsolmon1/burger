import React, { Component } from "react";
import Button from "../../components/General/Button";
import css from "./style.module.css";
import * as actions from "../../redux/actions/signupActions";
import { connect } from "react-redux";
import Spinner from "../../components/General/Spinner";
import { Redirect } from "react-router-dom";

class Signup extends Component {
    state = {
        email: "",
        password: "",
        password1: "",
        error: ""
    };

    changePassword = (e) => {
        this.setState({password: e.target.value});
    };
    changePassword1 = (e) => {
        this.setState({password1: e.target.value});
    };

    changeEmail = (e) => {
        this.setState({email: e.target.value});
    };

    signup = () => {
        if (this.state.password === this.state.password1) {
            this.props.signupUser(this.state.email, this.state.password);
            //alert("signup..." + this.state.email + ':' + this.state.password);
        } else {
            this.setState({ error: "Нууц үгнүүд таарахгүй байна"});
        }
        
    };

    render() {
        return (
            <div className={css.Signup}>
                {this.props.userId && <Redirect to="/"/>}
                <h1>Бүртгэлийн форм</h1>
                <input onChange={this.changeEmail} type="text" placeholder="Имэйл хаяг"/>
                <input onChange={this.changePassword} type="password" placeholder="Нууц үг"/>
                <input onChange={this.changePassword1} type="password" placeholder="Нууц үгээ давтан оруулна уу?"/>
                {  this.state.error && ( <div style={{ color: 'red' }}>{this.state.error}</div>)
                }
                {  this.props.firebaseError && ( <div style={{ color: 'red' }}>{this.props.firebaseError}</div>)
                }
                {this.props.saving && <Spinner />}
                <Button text="Бүртгүүлэх" btnType="Success" daragdsan={this.signup} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        saving: state.signupReducer.saving,
        firebaseError: state.signupReducer.firebaseError,
        userId: state.signupReducer.userId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        signupUser: (email, password) => dispatch(actions.signupUser(email, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);