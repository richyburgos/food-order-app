import React from 'react';
import classes from './AvailableMeals.module.css';
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

let DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
    {
        id: 'm5',
        name: 'Jalapeno Poppers',
        description: 'Spicy peppers stuffed with chicken',
        price: 12.94,
    },
    {
        id: 'm6',
        name: 'Nachos',
        description: 'Nachos with cheese, beans and chicken',
        price: 20.23,
    },
    {
        id: 'm7',
        name: 'Steak',
        description: 'Delicious steak with mashed potatoes and veggies',
        price: 30.49,
    },
];

const AvailableMeals = (props) => {
    const mealsList = DUMMY_MEALS.map(meal =>
        <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />);

    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>
        </section>
    )
}

export default AvailableMeals;