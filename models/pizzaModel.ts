import { Pizza } from "../interfaces/pizzaInterface";

 const specialtyPizzas: Array<Pizza> = [
    {
        "id": 1,
        "name": "TOPPERS COMBINATION",
        "toppings": ["Salami", "Pepperoni", "Italian Sausage", "Ground Beef", "Mushrooms", "Olives", "Onions", "Bell Peppers", "Anchovies"]
    },
    {
        "id": 2,
        "name": "VEGETARIAN COMBINATION",
        "toppings": ["Mushrooms", "Olives", "Onions", "Bell Peppers", "Zucchini", "Roasted Red Peppers", "Fresh Roma Tomatoes"]
    },
    {
        "id": 3,
        "name": "CHICKEN RANCH DIJON",
        "toppings": ["Ranch Dijon Sauce", "Canadian Style Bacon", "Mushrooms", "Red Onions", "Chicken"]
    },
    {
        "id": 4,
        "name": "CARNITAS CHIPOTLE",
        "toppings": ["Chipotle Sauce", "Carnitas", "Roasted Red Peppers", "Olives", "Red Onions", "Cilantro", "Jalapenos"]
    },
    {
        "id": 5,
        "name": "SPICY GARLIC ITALIAN",
        "toppings": ["Creamy Garlic Sauce", "Pepperoni", "Hot Sliced Italian Sausage", "Italian Sausage", "Mushrooms", "Red Onions", "Fresh Roasted Grape Tomatoes", "Garlic"]
    },
    {
        "id": 6,
        "name": "CREAMY GARLIC CHICKEN",
        "toppings": ["Creamy Garlic Sauce", "Chicken", "Roasted Red Peppers", "Mushrooms", "Red Onions", "Grated Parmesan", "Garlic"]
    },
    {
        "id": 7,
        "name": "B•C•T",
        "toppings": ["Pepperoni", "Bacon", "Chicken", "Fresh Roma Tomatoes"]
    },
    {
        "id": 8,
        "name": "BBQ CHICKEN",
        "toppings": ["Barbecue Sauce", "Chicken", "Red Onions", "Fresh Cilantro"]
    },
    {
        "id": 9,
        "name": "HAWAIIAN HEAT",
        "toppings": ["Creamy Garlic Sauce", "Canadian Style Bacon", "Chicken", "Bacon", "Red Onions", "Pineapples", "Jalapenos"]
    },
    {
        "id": 10,
        "name": "THE MEATINATOR",
        "toppings": ["Original Pizza Sauce", "Canadian Style Bacon", "Salami", "Pepperoni", "Hot Sliced Sausage", "Bacon", "Italian Sausage"]
    },
    {
        "id": 11,
        "name": "BUFFALO CHICKEN",
        "toppings": ["Creamy Garlic Sauce", "Cheddar and Provolone Cheese", "Chicken", "Red Onion", "Pepperoncini Peppers", "Bacon", "French Fried Onions"]
    },
    {
        "id": 12,
        "name": "HOT HONEY",
        "toppings": ["Creamy Garlic Sauce", "Salami", "Red Onion", "Fresh Jalapenos", "Bacon", "Honey Drizzle"]
    }
]

module.exports.generate_random_pizza = (toppingOne: string, toppingTwo: string) => {

    // Assume I have made a call to the DB to retrieve all pizzas with the variable: specialtyPizzas
    
    // recommendations array for both toppings
    let recs = [];
    // alternate recommendations for only one topping (if there are no options with both toppings)
    let altRecs = [];

    /* 
        loop through speciality pizzas and check to see if a pizza has the two toppings

        - keep an array of 1/2 toppings to recommend as an alternative recs
    */

    for(let pizza of specialtyPizzas) {

        let hasToppingOne: Boolean = false;
        let hasToppingTwo: Boolean = false;

        for(let topping of pizza.toppings) {
            if(topping.toLowerCase() == toppingOne.toLowerCase()) {
                hasToppingOne = true;
            }
            if(topping.toLowerCase() == toppingTwo.toLowerCase()) {
                hasToppingTwo = true;
            }
        }

        if (hasToppingOne && hasToppingTwo) {
            recs.push(pizza.name)
        }
        if(hasToppingOne || hasToppingTwo) {
            altRecs.push(pizza.name)
        }
    }

    let recommendations = recs ? recs: altRecs;

    // generate random number from 0 - (alt)rec length. return (alt)rec at random index

    return recommendations
}