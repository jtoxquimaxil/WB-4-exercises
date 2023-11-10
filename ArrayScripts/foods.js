"use strict";

function getLunchCost(lunches) {
    let sum = 0;
    let numOrders = lunches.length;
    for(let i = 0; i < numOrders; i++) {
    sum += lunches[i].price;
    }
    return sum;
   }
   let lunch = [ 
    {item: "Steak Fajitas", price: 9.95},
    {item: "Chips and Guacamole", price: 5.25},
    {item: "Sweet Tea", price: 2.79}
   ];

   let lunchCost = getLunchCost(lunch);
   let totalWithTip = lunchCost + .18;
   console.log("My meal costs " + totalWithTip.toFixed(2)); 

