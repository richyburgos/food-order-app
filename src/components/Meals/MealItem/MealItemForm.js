import React, {useRef, useState} from 'react';
import classes from './MealItemForm.module.css';
import Input from "../../UI/Input";

const MealItemForm = (props) => {
    const amountInputRef = useRef();
    const [amountIsValid, setAmountIsValid] = useState(true);

    const submitHandler = evt => {
        evt.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        if (!Boolean(enteredAmountNumber) || enteredAmountNumber > 5) {
            setAmountIsValid(false);
            return;
        }
        setAmountIsValid(true);
        props.onAddToCart(enteredAmountNumber);
    };

    return (
        <form
            className={classes.form}
            onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                label="Amount"
                input={{
                    id: `amount-${props.id}`,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'
                }}/>
            <button>+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount</p>}
        </form>
    )
}

export default MealItemForm;