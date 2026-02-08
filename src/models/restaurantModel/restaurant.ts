import { createSignal } from "solid-js";

export function restaurantMenu() {
  const [menu] = createSignal([
    {name: 'Breakfast', menuImage: './assets/breakfast.jpg'},
    {name: 'Lunch', menuImage: './assets/lunch.jpeg'},
    {name: 'Dinner', menuImage: './assets/dinner.jpeg'},
    {name: 'Drinks', menuImage: './assets/drinks.jpeg'},
  ]);

  const [meal, setMeal] = createSignal<Record<string, Record<string, any[]>>>(
    {
  "Breakfast": {
  "Luwombo": [
  {mealId: "1", 
    mealName: 'Beef lasagne',
    mealImage: './assets/breakfast.jpg', 
    mealDescription: 'Delicious beef lasagne with double chilli. Served with a cold coke or juice. You should not miss out', 
    mealPrice: 4000, 
    
  },
  {mealId: "2", 
    mealName: 'Chicken',
    mealImage: './assets/breakfast.jpg', 
    mealDescription: 'Delicious beef lasagne with double chilli. Served with a cold coke or juice. You should not miss out', 
    mealPrice: 4000, 
    
  },
  {mealId: "3", 
    mealName: 'Beef lasagne',
    mealImage: './assets/breakfast.jpg', 
    mealDescription: 'Delicious beef lasagne with double chilli. Served with a cold coke or juice. You should not miss out', 
    mealPrice: 4000, 
    
  },
  {mealId: "4", 
    mealName: 'Beef lasagne',
    mealImage: './assets/breakfast.jpg', 
    mealDescription: 'Delicious beef lasagne with double chilli. Served with a cold coke or juice. You should not miss out', 
    mealPrice: 4000, 
   
  },
  {mealId: "5", 
    mealName: 'Beef lasagne',
    mealImage: './assets/breakfast.jpg', 
    mealDescription: 'Delicious beef lasagne with double chilli. Served with a cold coke or juice. You should not miss out', 
    mealPrice: 4000, 
    
  },
  { 
    mealId: "6", 
    mealName: 'Beef lasagne',
    mealImage: './assets/breakfast.jpg', 
    mealDescription: 'Delicious beef lasagne with double chilli. Served with a cold coke or juice. You should not miss out', 
    mealPrice: 4000, 

  },
  {mealId: "7", 
    mealName: 'Beef lasagne',
    mealImage: './assets/breakfast.jpg', 
    mealDescription: 'Delicious beef lasagne with double chilli. Served with a cold coke or juice. You should not miss out', 
    mealPrice: 4000, 
   
  },
  {mealId: "8", 
    mealName: 'Beef lasagne',
    mealImage: './assets/breakfast.jpg', 
    mealDescription: 'Delicious beef lasagne with double chilli. Served with a cold coke or juice. You should not miss out', 
    mealPrice: 4000, 
   
  },
  {mealId: "9", 
    mealName: 'Beef lasagne',
    mealImage: './assets/breakfast.jpg', 
    mealDescription: 'Delicious beef lasagne with double chilli. Served with a cold coke or juice. You should not miss out', 
    mealPrice: 4000, 
   
  },
  {mealId: "10", 
    mealName: 'Beef lasagne',
    mealImage: './assets/breakfast.jpg', 
    mealDescription: 'Delicious beef lasagne with double chilli. Served with a cold coke or juice. You should not miss out', 
    mealPrice: 4000, 
   
  },
  ],
  "Katogo": [
  {mealId: "11", 
    mealName: 'Beef lasagne',
    mealImage: './assets/breakfast.jpg', 
    mealDescription: 'Delicious beef lasagne with double chilli. Served with a cold coke or juice. You should not miss out', 
    mealPrice: 4000, 
    
  },
  {mealId: "12", 
    mealName: 'Beef lasagne',
    mealImage: './assets/breakfast.jpg', 
    mealDescription: 'Delicious beef lasagne with double chilli. Served with a cold coke or juice. You should not miss out', 
    mealPrice: 4000, 
    
  },
  {mealId: "13", 
    mealName: 'Beef lasagne',
    mealImage: './assets/breakfast.jpg', 
    mealDescription: 'Delicious beef lasagne with double chilli. Served with a cold coke or juice. You should not miss out', 
    mealPrice: 4000, 
    
  },
  {mealId: "14", 
    mealName: 'Beef lasagne',
    mealImage: './assets/breakfast.jpg', 
    mealDescription: 'Delicious beef lasagne with double chilli. Served with a cold coke or juice. You should not miss out', 
    mealPrice: 4000, 
    
  },
  {mealId: "15", 
    mealName: 'Beef lasagne',
    mealImage: './assets/breakfast.jpg', 
    mealDescription: 'Delicious beef lasagne with double chilli. Served with a cold coke or juice. You should not miss out', 
    mealPrice: 4000, 
   
  },
  {mealId: "16", 
    mealName: 'Beef lasagne',
    mealImage: './assets/breakfast.jpg', 
    mealDescription: 'Delicious beef lasagne with double chilli. Served with a cold coke or juice. You should not miss out', 
    mealPrice: 4000, 
    
  },
  {mealId: "17", 
    mealName: 'Beef lasagne',
    mealImage: './assets/breakfast.jpg', 
    mealDescription: 'Delicious beef lasagne with double chilli. Served with a cold coke or juice. You should not miss out', 
    mealPrice: 4000, 
    
  },
  {mealId: "18", 
    mealName: 'Beef lasagne',
    mealImage: './assets/breakfast.jpg', 
    mealDescription: 'Delicious beef lasagne with double chilli. Served with a cold coke or juice. You should not miss out', 
    mealPrice: 4000, 
    
  },
  {mealId: "19", 
    mealName: 'Beef lasagne',
    mealImage: './assets/breakfast.jpg', 
    mealDescription: 'Delicious beef lasagne with double chilli. Served with a cold coke or juice. You should not miss out', 
    mealPrice: 4000, 
    
  },
  {mealId: "20", 
    mealName: 'Beef lasagne',
    mealImage: './assets/breakfast.jpg', 
    mealDescription: 'Delicious beef lasagne with double chilli. Served with a cold coke or juice. You should not miss out', 
    mealPrice: 4000, 
    
  },
  ],
  "Desserts": [
  {mealId: "21", 
    mealName: 'Beef lasagne',
    mealImage: './assets/breakfast.jpg', 
    mealDescription: 'Delicious beef lasagne with double chilli. Served with a cold coke or juice. You should not miss out', 
    mealPrice: 4000, 
   
  },
  {mealId: "22", 
    mealName: 'Beef lasagne',
    mealImage: './assets/breakfast.jpg', 
    mealDescription: 'Delicious beef lasagne with double chilli. Served with a cold coke or juice. You should not miss out', 
    mealPrice: 4000, 
    
  },
  {mealId: "23", 
    mealName: 'Beef lasagne',
    mealImage: './assets/breakfast.jpg', 
    mealDescription: 'Delicious beef lasagne with double chilli. Served with a cold coke or juice. You should not miss out', 
    mealPrice: 4000, 
  
  },
  {mealId: "24", 
    mealName: 'Beef lasagne',
    mealImage: './assets/breakfast.jpg', 
    mealDescription: 'Delicious beef lasagne with double chilli. Served with a cold coke or juice. You should not miss out', 
    mealPrice: 4000, 
  
  },
  {mealId: "25", 
    mealName: 'Beef lasagne',
    mealImage: './assets/breakfast.jpg', 
    mealDescription: 'Delicious beef lasagne with double chilli. Served with a cold coke or juice. You should not miss out', 
    mealPrice: 4000, 
   
  },
  {mealId: "26", 
    mealName: 'Beef lasagne',
    mealImage: './assets/breakfast.jpg', 
    mealDescription: 'Delicious beef lasagne with double chilli. Served with a cold coke or juice. You should not miss out', 
    mealPrice: 4000, 
   
  },
  {mealId: "27", 
    mealName: 'Beef lasagne',
    mealImage: './assets/breakfast.jpg', 
    mealDescription: 'Delicious beef lasagne with double chilli. Served with a cold coke or juice. You should not miss out', 
    mealPrice: 4000, 
    
  },
  {mealId: "28", 
    mealName: 'Beef lasagne',
    mealImage: './assets/breakfast.jpg', 
    mealDescription: 'Delicious beef lasagne with double chilli. Served with a cold coke or juice. You should not miss out', 
    mealPrice: 4000, 
    
  },
  {mealId: "29", 
    mealName: 'Beef lasagne',
    mealImage: './assets/breakfast.jpg', 
    mealDescription: 'Delicious beef lasagne with double chilli. Served with a cold coke or juice. You should not miss out', 
    mealPrice: 4000, 
    
  },
  {mealId: "30", 
    mealName: 'Beef lasagne',
    mealImage: './assets/breakfast.jpg', 
    mealDescription: 'Delicious beef lasagne with double chilli. Served with a cold coke or juice. You should not miss out', 
    mealPrice: 4000, 
   
  },
  ],
  "Asian foods": [
  {mealId: "31", 
    mealName: 'Beef lasagne',
    mealImage: './assets/breakfast.jpg', 
    mealDescription: 'Delicious beef lasagne with double chilli. Served with a cold coke or juice. You should not miss out', 
    mealPrice: 4000, 
   
  },
  {mealId: "32", 
    mealName: 'Beef lasagne',
    mealImage: './assets/breakfast.jpg', 
    mealDescription: 'Delicious beef lasagne with double chilli. Served with a cold coke or juice. You should not miss out', 
    mealPrice: 4000, 
   
  },
  {mealId: "33", 
    mealName: 'Beef lasagne',
    mealImage: './assets/breakfast.jpg', 
    mealDescription: 'Delicious beef lasagne with double chilli. Served with a cold coke or juice. You should not miss out', 
    mealPrice: 4000, 
 
  },
  {mealId: "34", 
    mealName: 'Beef lasagne',
    mealImage: './assets/breakfast.jpg', 
    mealDescription: 'Delicious beef lasagne with double chilli. Served with a cold coke or juice. You should not miss out', 
    mealPrice: 4000, 
   
  },
  {mealId: "35", 
    mealName: 'Beef lasagne',
    mealImage: './assets/breakfast.jpg', 
    mealDescription: 'Delicious beef lasagne with double chilli. Served with a cold coke or juice. You should not miss out', 
    mealPrice: 4000, 
  
  },
  {mealId: "36", 
    mealName: 'Beef lasagne',
    mealImage: './assets/breakfast.jpg', 
    mealDescription: 'Delicious beef lasagne with double chilli. Served with a cold coke or juice. You should not miss out', 
    mealPrice: 4000, 
   
  },
  {mealId: "37", 
    mealName: 'Beef lasagne',
    mealImage: './assets/breakfast.jpg', 
    mealDescription: 'Delicious beef lasagne with double chilli. Served with a cold coke or juice. You should not miss out', 
    mealPrice: 4000, 
   
  },
  {mealId: "38", 
    mealName: 'Beef lasagne',
    mealImage: './assets/breakfast.jpg', 
    mealDescription: 'Delicious beef lasagne with double chilli. Served with a cold coke or juice. You should not miss out', 
    mealPrice: 4000, 
   
  },
  {mealId: "39", 
    mealName: 'Beef lasagne',
    mealImage: './assets/breakfast.jpg', 
    mealDescription: 'Delicious beef lasagne with double chilli. Served with a cold coke or juice. You should not miss out', 
    mealPrice: 4000, 
    
  },
  {mealId: "40", 
    mealName: 'Beef lasagne',
    mealImage: './assets/breakfast.jpg', 
    mealDescription: 'Delicious beef lasagne with double chilli. Served with a cold coke or juice. You should not miss out', 
    mealPrice: 4000, 
    
  },
  ],
  "Sea food": [
  {mealId: "41", 
    mealName: 'Beef lasagne',
    mealImage: './assets/breakfast.jpg', 
    mealDescription: 'Delicious beef lasagne with double chilli. Served with a cold coke or juice. You should not miss out', 
    mealPrice: 4000, 
   
  },
  {mealId: "42", 
    mealName: 'Beef lasagne',
    mealImage: './assets/breakfast.jpg', 
    mealDescription: 'Delicious beef lasagne with double chilli. Served with a cold coke or juice. You should not miss out', 
    mealPrice: 4000, 
   
  },
  {mealId: "43", 
    mealName: 'Beef lasagne',
    mealImage: './assets/breakfast.jpg', 
    mealDescription: 'Delicious beef lasagne with double chilli. Served with a cold coke or juice. You should not miss out', 
    mealPrice: 4000, 
    
  },
  {mealId: "44", 
    mealName: 'Beef lasagne',
    mealImage: './assets/breakfast.jpg', 
    mealDescription: 'Delicious beef lasagne with double chilli. Served with a cold coke or juice. You should not miss out', 
    mealPrice: 4000, 
  
  },
  {mealId: "45", 
    mealName: 'Beef lasagne',
    mealImage: './assets/breakfast.jpg', 
    mealDescription: 'Delicious beef lasagne with double chilli. Served with a cold coke or juice. You should not miss out', 
    mealPrice: 4000, 
    
  },
  {mealId: "46", 
    mealName: 'Beef lasagne',
    mealImage: './assets/breakfast.jpg', 
    mealDescription: 'Delicious beef lasagne with double chilli. Served with a cold coke or juice. You should not miss out', 
    mealPrice: 4000, 
   
  },
  {mealId: "47", 
    mealName: 'Beef lasagne',
    mealImage: './assets/breakfast.jpg', 
    mealDescription: 'Delicious beef lasagne with double chilli. Served with a cold coke or juice. You should not miss out', 
    mealPrice: 4000, 
    
  },
  {mealId: "48", 
    mealName: 'Beef lasagne',
    mealImage: './assets/breakfast.jpg', 
    mealDescription: 'Delicious beef lasagne with double chilli. Served with a cold coke or juice. You should not miss out', 
    mealPrice: 4000, 
   
  },
  {mealId: "49", 
    mealName: 'Beef lasagne',
    mealImage: './assets/breakfast.jpg', 
    mealDescription: 'Delicious beef lasagne with double chilli. Served with a cold coke or juice. You should not miss out', 
    mealPrice: 4000, 
  },
  {mealId: "50", 
    mealName: 'Beef lasagne',
    mealImage: './assets/breakfast.jpg', 
    mealDescription: 'Delicious beef lasagne with double chilli. Served with a cold coke or juice. You should not miss out', 
    mealPrice: 4000, 
  },
  ]
  },
  "Lunch": {},
  "Dinner": {},
  "Drinks": {},
}
  );

//   function increaseQuantity(category: string, index: number) {
//   setMeal(prev => {
//     const copy = structuredClone(prev);
//     copy[category][index].quantity += 1;
//     return copy;
//   });
// }

// function decreaseQuantity(category: string, index: number) {
//   setMeal(prev => {
//     const copy = structuredClone(prev);
//     copy[category][index].quantity =
//       Math.max(0, copy[category][index].quantity -= 1);
//     return copy;
//   });
// }

  return {
    menu,
    meal,
    // increaseQuantity,
    // decreaseQuantity,
  };
}