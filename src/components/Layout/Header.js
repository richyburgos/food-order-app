import React, {Fragment} from 'react';
import mealsImage from "../../assets/imgs/meals.jpeg";
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <HeaderCartButton onClick={props.onOpenCart} />
            </header>
            <div className={classes.mainImage}>
                <img
                    src={mealsImage}
                    alt="table-full-of-food"/>
            </div>
        </Fragment>
    )
}

export default Header;