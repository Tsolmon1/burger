import React, { Fragment } from "react";
import { connect } from 'react-redux'

import css from "./style.module.css";
import MenuItem from "../MenuItem";

const Menu = (props) => (
    <div>
        <ul className={css.Menu}>
            
            {props.userId ? (
                <Fragment>
                    <MenuItem exact link="/">Шинэ захиалга</MenuItem>
                    <MenuItem link="/orders">Захиалганууд</MenuItem>
                    <MenuItem link="/logout">Гарах</MenuItem>
                </Fragment>
            ): (
                <Fragment>
                    <MenuItem link="/login">Нэвтрэх</MenuItem>
                    <MenuItem link="/signup">БҮРТГҮҮЛЭХ</MenuItem>
                </Fragment>
                
            )}
           
            
        </ul>
    </div>
);

const mapStateToProps = state => {
    return {
        userId: state.signupReducer.userId
    };
};

export default connect(mapStateToProps)(Menu);