
import { Product } from "./type";

export const products: Product[] = [


    // main course

    {
        id: 1,
        title: "Pan-Seared Salmon with Kale and Apple Salad",
        image: ["/assest/m1.jpeg"],
        cart: "Pan-Seared_Salmon_with_Kale_and_Apple_Salad",
        price: 1000,
        discount: 0,
        category: "maincourse",
        description: "Tender pan-seared salmon served with a refreshing kale and apple salad, creating a delightful balance of flavors and textures.",
        topping: ["Cheese"],
        qty: 1,
    },
    {
        id: 2,
        title: "Penne with Sun-Dried Tomato Pesto",
        image: ["/assest/m2.jpeg"],
        cart: "Penne_with_Sun-Dried_Tomato_Pesto",
        price: 1100,
        discount: 15,
        category: "maincourse",
        description: "Savory penne pasta tossed in a delectable sun-dried tomato pesto, bursting with rich flavors and vibrant colors.",
        topping: ["Herbs"],
        qty: 1,
    },
    {
        id: 3,
        title: "Barbecue Chicken Pan Pizza",
        image: ["/assest/m3.jpeg"],
        cart: "Barbecue_Chicken_Pan_Pizza",
        price: 1500,
        discount: 15,
        category: "maincourse",
        description: "Delicious BBQ chicken pan pizza featuring a smoky blend of grilled chicken and tangy barbecue sauce atop a crispy crust.",
        topping: ["Cheese"],
        qty: 1,
    },
    {
        id: 4,
        title: "Grilled Salmon with Lemon-Dill Sauce",
        image: ["/assest/m4.jpg"],
        cart: "Grilled_Salmon_with_Lemon-Dill_Sauce",
        price: 2500,
        discount: 15,
        category: "maincourse",
        description: "Tender pan-seared salmon served with a refreshing kale and apple salad, creating a delightful balance of flavors and textures.",
        topping: ["Freshly chopped dill"],
        qty: 1,
    },
    {
        id: 5,
        title: "Nihari with Rot",
        image: ["/assest/m5.jpg"],
        cart: "Nihari_with_Rot",
        price: 850,
        discount: 0,
        category: "maincourse",
        description: "A slow-cooked stew of beef or mutton, simmered with spices and served as a flavorful breakfast dish, typically enjoyed with fresh roti.",
        topping: ["Sliced ginger"],
        qty: 1,
    },
    {
        id: 6,
        title: "Beef Burrito Bowl",
        image: ["/assest/m613.jpg"],
        cart: "Beef_Burrito_Bowl",
        price: 1725,
        discount: 0,
        category: "maincourse",
        description: "A Beef Burrito Bowl is a hearty and flavorful dish inspired by Mexican cuisine. It features a delicious combination of ingredients, all layered together to create a satisfying meal in a bow",
        topping: ["Sour cream"],
        qty: 1,
    },
    {
        id: 7,
        title: "Beef Stroganoff",
        image: ["/assest/m7.jpg"],
        cart: "Beef_Stroganoff",
        price: 1350,
        discount: 15,
        category: "maincourse",
        description: " Slices of tender beef cooked in a creamy mushroom sauce, served over egg noodles, and accompanied by buttered green beans.",
        topping: ["Sour cream"],
        qty: 1,
    },
    {
        id: 8,
        title: "Grilled BBQ Beef with Mashed Potatoes",
        image: ["/assest/m83.jpg"],
        cart: "Grilled_BBQ_Beef_with_Mashed_Potatoes",
        price: 1250,
        discount: 0,
        category: "maincourse",
        description: "Tender grilled Beef marinated in smoky barbecue sauce, served with creamy mashed potatoes and a side of sautéed vegetables.",
        topping: ["Freshly"],
        qty: 1,
    },
    {
        id: 9,
        title: "Cajun Blackened Fish Tacos",
        image: ["/assest/m9.jpg"],
        cart: "Cajun_Blackened_Fish_Tacos",
        price: 1150,
        discount: 0,
        category: "maincourse",
        description: "Spiced and blackened fish fillets served in soft corn tortillas with shredded lettuce, pico de gallo, and a drizzle of lime crema.",
        topping: ["Sliced jalapeños"],
        qty: 1,
    },
    {
        id: 10,
        title: "Country Fried Steak with Gravy",
        image: ["/assest/m120.jpg"],
        cart: "Country_Fried_Steak_with_Gravy",
        price: 1300,
        discount: 0,
        category: "maincourse",
        description: "Tenderized and breaded steak deep-fried until golden, served with creamy country-style gravy, mashed potatoes, and buttered corn.",
        topping: ["Cracked black pepper"],
        qty: 1,
    },
    {
        id: 11,
        title: "Grilled Salmon with Lemon",
        image: ["/assest/m11.jpg"],
        cart: "Grilled_Salmon_with_Lemon",
        price: 1500,
        discount: 0,
        category: "maincourse",
        description: "A flaky salmon fillet marinated with a hint of citrus and grilled to enhance its natural flavors. Topped with a refreshing Lemon and accompanied by garlic butter ",
        topping: ["Sliced avocado"],
        qty: 1,
    },
    {
        id: 12,
        title: "Grilled Tandoori Prawns",
        image: ["/assest/m12.jpg"],
        cart: "Grilled_Tandoori_Prawns",
        price: 1750,
        discount: 0,
        category: "maincourse",
        description: "Jumbo prawns marinated in a traditional tandoori spice blend and grilled for a smoky and flavorful finish. Served with fragrant saffron rice and cooling mint yogurt sauce.",
        topping: ["Chopped mint leaves"],
        qty: 1,
    },

    // family size

    {
        id: 13,
        title: "Family-Size Lasagna",
        image: ["/assest/f1.jpeg"],
        cart: "Family-Size_Lasagna",
        price: 2200,
        discount: 0,
        category: "familysize",
        description: "Layers of tender lasagna noodles, rich meat sauce, creamy béchamel, and a blend of mozzarella and Parmesan cheeses, baked to perfection. A comforting and hearty Italian favorite.",
        topping: ["Fresh basil leaves"],
        qty: 1,
    },
    {
        id: 14,
        title: "Giant BBQ Platter",
        image: ["/assest/f2.jpg"],
        cart: "Giant_BBQ_Platter",
        price: 2800,
        discount: 15,
        category: "familysize",
        description: "An assortment of barbecue delights including ribs, chicken, sausages, and beef brisket, all smoked to perfection and served with a variety of sauces. Comes with a generous side of coleslaw, macaroni and cheese, and cornbread.",
        topping: ["Pickled jalapeños"],
        qty: 1,
    },
    {
        id: 15,
        title: "Family-Style Biryani Feast",
        image: ["/assest/f3.jpg"],
        cart: "Family-Style_Biryani_Feast",
        price: 2400,
        discount: 0,
        category: "familysize",
        description: "Fragrant basmati rice cooked with aromatic spices, layered with tender pieces of chicken and mutton, and garnished with fried onions and boiled eggs. Served with raita and a side of mixed vegetable curry",
        topping: ["Chopped mint leaves"],
        qty: 1,
    }, {
        id: 16,
        title: "Mega-Sized Pizza Platter",
        image: ["/assest/f4.jpg"],
        cart: "Mega-Sized_Pizza_Platter",
        price: 2000,
        discount: 0,
        category: "familysize",
        description: " An extra-large pizza with a variety of toppings, from pepperoni and sausage to mushrooms and bell peppers, all smothered in gooey melted cheese. Perfect for a family gathering or party",
        topping: ["Crushed red pepper flakes"],
        qty: 1,
    },
    {
        id: 17,
        title: "Gourmet Pasta Party Tray",
        image: ["/assest/f5.jpg"],
        cart: "Gourmet_Pasta_Party_Tray",
        price: 2300,
        discount: 30,
        category: "familysize",
        description: " A large tray of pasta, such as penne or fettuccine, tossed in a creamy Alfredo or marinara sauce, accompanied by a variety of toppings like grilled chicken, sautéed mushrooms, and sun-dried tomatoes.",
        topping: ["Freshly grated Parmesan cheese"],
        qty: 1,
    },
    {
        id: 18,
        title: "Mouthwatering BBQ Platter",
        image: ["/assest/f6.jpg"],
        cart: "Mouthwatering_BBQ_Platter",
        price: 2450,
        discount: 0,
        category: "familysize",
        description: "A shareable platter loaded with an assortment of grilled meats including beef ribs, chicken wings, sausages, and pork chops. Served with a side of grilled corn and potato wedges.",
        topping: ["Grilled pineapple rings"],
        qty: 1,
    },

    // Sandwiches

    {
        id: 19,
        title: "Deluxe Submarine Sandwich Platter",
        image: ["/assest/s1.jpg"],
        cart: "Deluxe_Submarine_Sandwich_Platter",
        price: 1950,
        discount: 0,
        category: "sandwiches",
        description: " An assortment of generously filled submarine sandwiches with a variety of cold cuts, cheeses, crisp lettuce, tomatoes, and condiments. Served with a side of potato chips.",
        topping: ["Sliced red onions"],
        qty: 1,
    },
    {
        id: 20,
        title: "Gourmet Panini Party Tray",
        image: ["/assest/s2.jpg"],
        cart: "Gourmet_Panini_Party_Tray",
        price: 2150,
        discount: 20,
        category: "sandwiches",
        description: " A selection of gourmet panini sandwiches, each featuring premium ingredients such as grilled chicken, roasted vegetables, and artisanal cheeses. Served with a mixed greens salad.",
        topping: ["Sun-dried tomato aioli"],
        qty: 1,
    },
    {
        id: 21,
        title: "Classic Club Sandwich Platter",
        image: ["/assest/s3.jpg"],
        cart: "Classic_Club_Sandwich_Platter",
        price: 1850,
        discount: 0,
        category: "sandwiches",
        description: "A platter of classic club sandwiches stacked high with layers of roasted turkey, crispy bacon, lettuce, tomato, and mayonnaise. Served with coleslaw and potato wedges",
        topping: ["Sliced avocado"],
        qty: 1,
    },
    {
        id: 22,
        title: "Mega Chicken Shawarma Wrap Tray",
        image: ["/assest/s4.jpg"],
        cart: "Mega_Chicken_Shawarma_Wrap_Tray",
        price: 2050,
        discount: 0,
        category: "sandwiches",
        description: "Oversized chicken shawarma wraps filled with flavorful marinated chicken, garlic sauce, pickles, and chopped vegetables. Served with a side of hummus and tabbouleh.",
        topping: ["Chopped parsley"],
        qty: 1,
    },
    {
        id: 23,
        title: "Hearty BBQ Pulled Pork Sliders Platter",
        image: ["/assest/s5.jpg"],
        cart: "Hearty_BBQ_Pulled_Pork_Sliders_Platter",
        price: 1850,
        discount: 10,
        category: "sandwiches",
        description: "A platter of mini sliders filled with tender pulled pork coated in smoky barbecue sauce. Served with coleslaw and sweet potato fries.",
        topping: ["Tangy coleslaw"],
        qty: 1,
    },
    {
        id: 24,
        title: "Assorted Wrap Platter",
        image: ["/assest/s6.jpg"],
        cart: "Assorted_Wrap_Platter",
        price: 1900,
        discount: 0,
        category: "sandwiches",
        description: "A variety of wraps with fillings such as grilled vegetables, roast beef, turkey, and hummus. Served with a side of fresh fruit salad.",
        topping: ["Baby spinach leaves"],
        qty: 1,
    },
    // Desserts

    {
        id: 25,
        title: "Decadent Chocolate Cake Platter",
        image: ["/assest/d1.jpg"],
        cart: "Decadent_Chocolate_Cake_Platter",
        price: 1800,
        discount: 14,
        category: "desserts",
        description: "A family-sized chocolate cake with layers of moist chocolate sponge and velvety chocolate ganache. Perfect for chocoholics, this cake is a rich and indulgent dessert.",
        topping: ["Fresh strawberries"],
        qty: 1,
    },
    {
        id: 26,
        title: "Assorted Mini Dessert Platter",
        image: ["/assest/d2.jpg"],
        cart: "Assorted_Mini_Dessert_Platter",
        price: 1600,
        discount: 0,
        category: "desserts",
        description: "A delightful platter featuring an assortment of mini desserts such as cheesecakes, tarts, and mousses. Each dessert is a bite-sized explosion of flavor.",
        topping: ["Whipped cream"],
        qty: 1,
    },
    {
        id: 27,
        title: "Fruit Medley Parfait Bowl",
        image: ["/assest/d3.jpg"],
        cart: "Fruit_Medley_Parfait_Bowl",
        price: 1450,
        discount: 10,
        category: "desserts",
        description: " A family-sized bowl filled with layers of fresh seasonal fruits, yogurt, and granola, creating a refreshing and nutritious dessert.",
        topping: ["Honey drizzle"],
        qty: 1,
    },
    {
        id: 28,
        title: "Classic Tiramisu Tray",
        image: ["/assest/d4.jpg"],
        cart: "Classic_Tiramisu_Tray",
        price: 1750,
        discount: 0,
        category: "desserts",
        description: "A generous tray of classic tiramisu, featuring layers of coffee-soaked ladyfingers and mascarpone cream. A timeless Italian dessert that's perfect for sharing.",
        topping: ["Cocoa powder dusting"],
        qty: 1,
    },
    {
        id: 29,
        title: "Family-Style Fruit Cobbler",
        image: ["/assest/d5.jpg"],
        cart: "Family-Style_Fruit_Cobbler",
        price: 1650,
        discount: 15,
        category: "desserts",
        description: "A warm and comforting fruit cobbler made with a variety of fresh fruits and topped with a buttery biscuit crust. Served with a scoop of vanilla ice cream.",
        topping: ["Sprinkle of powdered sugar"],
        qty: 1,
    },
    {
        id: 30,
        title: "Grand Ice Cream Sundae Bar",
        image: ["/assest/d6.jpg"],
        cart: "Grand_Ice_Cream_Sundae_Bar",
        price: 1900,
        discount: 0,
        category: "desserts",
        description: "A build-your-own ice cream sundae bar with a variety of ice cream flavors, sauces, toppings, and whipped cream, allowing everyone to create their own dessert masterpiece.",
        topping: ["Rainbow sprinkles"],
        qty: 1,
    },

    // Breakfast

    {
        id: 31,
        title: "Big Family Breakfast Platter",
        image: ["/assest/b1.jpg"],
        cart: "Big_Family_Breakfast_Platter",
        price: 1950,
        discount:14,
        category: "breakfast",
        description: "A hearty platter featuring scrambled eggs, crispy bacon, sausages, hash browns, and a selection of freshly baked breads like croissants and bagels.",
        topping: ["Fresh fruit salad"],
        qty: 1,
    },
    {
        id: 32,
        title: "Homestyle Pancake Feast",
        image: ["/assest/b2.jpg"],
        cart: "Homestyle_Pancake_Feast",
        price: 1750,
        discount: 0,
        category: "breakfast",
        description: "A stack of fluffy pancakes served with a variety of toppings such as maple syrup, whipped cream, chocolate chips, and mixed berries.",
        topping: ["Crispy bacon"],
        qty: 1,
    },
    {
        id: 33,
        title: "Classic Full English Breakfast Tray",
        image: ["/assest/b3.jpg"],
        cart: "Classic_Full_English_Breakfast_Tray",
        price: 1850,
        discount: 19,
        category: "breakfast",
        description: " A classic English breakfast featuring fried eggs, grilled tomatoes, sautéed mushrooms, baked beans, black pudding, and buttered toast.",
        topping: ["Hash browns"],
        qty: 1,
    },
    {
        id: 34,
        title: "Family-Sized Omelette Platter",
        image: ["/assest/b4.jpg"],
        cart: "Family-Sized_Omelette_Platter",
        price: 1900,
        discount: 0,
        category: "breakfast",
        description: "A selection of omelettes filled with choices like cheese, ham, spinach, and bell peppers. Served with a side of roasted potatoes and buttered toast.",
        topping: ["Fresh orange juice"],
        qty: 1,
    },
    {
        id: 35,
        title: "Bagel Brunch Extravaganza",
        image: ["/assest/b5.jpg"],
        cart: "Bagel_Brunch_Extravaganza",
        price: 1700,
        discount: 0,
        category: "breakfast",
        description: "A spread of assorted bagels served with cream cheese, lox, capers, red onion slices, and a variety of other toppings.",
        topping: ["Fresh cucumber slices"],
        qty: 1,
    },
    {
        id: 36,
        title: "Southwestern Breakfast Burrito Tray",
        image: ["/assest/b6.jpg"],
        cart: "Southwestern_Breakfast_Burrito_Tray",
        price: 1800,
        discount: 18,
        category: "breakfast",
        description: "Family-sized breakfast burritos filled with scrambled eggs, chorizo, black beans, and cheese, wrapped in warm tortillas. Served with salsa and avocado slices.",
        topping: ["Sliced jalapeños"],
        qty: 1,
    },
    // Drinks

    {
        id: 37,
        title: "Refreshing Fruit Punch Pitcher",
        image: ["/assest/dr1.jpg"],
        cart: "Refreshing_Fruit_Punch_Pitcher",
        price:  950,
        discount: 0,
        category: "drinks",
        description: " A pitcher of chilled fruit punch made with a medley of fruit juices, soda, and fresh fruit slices. A refreshing and colorful option for the whole family.",
        topping: ["Fresh mint leaves"],
        qty: 1,
    },
    {
        id: 38,
        title: "Iced Tea and Lemonade Combo Jug",
        image: ["/assest/dr2.jpg"],
        cart: "Iced_Tea_and_Lemonade_Combo_Jug",
        price: 1800,
        discount: 17,
        category: "drinks",
        description: " A large jug filled with a mix of sweetened iced tea and tangy lemonade, creating a perfect balance of flavors for a family gathering.",
        topping: ["Lemon slices"],
        qty: 1,
    },
    {
        id: 39,
        title: "Smoothie Sampler Platter",
        image: ["/assest/dr3.jpg"],
        cart: "Smoothie_Sampler_Platter",
        price: 1100,
        discount: 0,
        category: "drinks",
        description: "A platter of assorted smoothies, each featuring a blend of fresh fruits, yogurt, and a touch of honey. A healthy and delicious choice for the family.",
        topping: ["Chia seeds"],
        qty: 1,
    },
    {
        id: 40,
        title: "Frothy Hot Chocolate Pot",
        image: ["/assest/dr4.jpg"],
        cart: "Frothy_Hot_Chocolate_Pot",
        price: 950,
        discount: 0,
        category: "drinks",
        description: "A pot of rich and creamy hot chocolate, topped with a dollop of whipped cream and a sprinkle of cocoa powder. Perfect for cozy family mornings.",
        topping: [ "Mini marshmallows"],
        qty: 1,
    },
    {
        id: 41,
        title: "Chilled Mocktail Pitcher",
        image: ["/assest/dr5.jpg"],
        cart: "Chilled_Mocktail_Pitcher",
        price: 1050,
        discount: 0,
        category: "drinks",
        description: "A pitcher of alcohol-free mocktails with vibrant flavors such as mojito, piña colada, and strawberry daiquiri, suitable for the entire family.",
        topping: ["Fresh fruit garnishes"],
        qty: 1,
    },
    {
        id: 42,
        title: "Classic Fresh Orange Juice Carafe",
        image: ["/assest/dr6.jpg"],
        cart: "Classic_Fresh_Orange_Juice_Carafe",
        price: 800,
        discount: 10,
        category: "drinks",
        description: "A carafe filled with freshly squeezed orange juice, offering a natural and refreshing option for family breakfasts or brunches.",
        topping: ["Orange slices"],
        qty: 1,
    },
]