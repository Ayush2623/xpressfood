export const filterData = [{ name: "Fast food", image: require('../assets/fastfood.jpg'), id: "0" },
{ name: "Burgers", image: require("../assets/burger.jpg"), id: "1" },
{ name: "Salads", image: require("../assets/salads.jpg"), id: "2" },
{ name: "Hotdog", image: require("../assets/hotdog.jpg"), id: "3" },
{ name: "Chinese", image: require("../assets/chinese.jpg"), id: "4" },
{ name: "Mexican", image: require("../assets/mexican.jpg"), id: "5" },
{ name: "Sea food", image: require("../assets/seafood.jpg"), id: "6" },
];

export const filterData2 = [{ name: "Fast food", image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2021/01/fast-food.jpg?quality=82&strip=1', id: "0" },
{ name: "Burgers", image: 'https://www.taysteesburger.com/images/banner-bg.jpg', id: "1" },
{ name: "Salads", image: "https://cdn.pixabay.com/photo/2016/05/12/00/07/appetizer-1386743__340.jpg", id: "2" },
{ name: "Hotdog", image: "https://media.istockphoto.com/id/484992224/photo/homemade-bacon-wrapped-hot-dogs.jpg?s=612x612&w=0&k=20&c=dRBgVfXudwvAbmMR1xTbTpqLgicSlAe5Y2Zjw49Tweo=", id: "3" },
{ name: "Chinese", image: "https://www.healthdigest.com/img/gallery/unhealthy-chinese-restaurant-foods-you-should-always-avoid/intro-1667991848.jpg", id: "4" },
{ name: "Mexican", image: "https://media.istockphoto.com/id/1213818930/photo/traditional-mexican-food.jpg?s=612x612&w=0&k=20&c=oWZyaXOiPkwUF8ehSDYZvdDCcJNkdxz2qXNFeQg111A=", id: "5" },
{ name: "Sea food", image: "https://img.freepik.com/premium-photo/thai-grilled-seafood-prawn-shrimp-cockle_282791-681.jpg", id: "6" },
{ name: "Chinese Food", image: "https://www.healthdigest.com/img/gallery/unhealthy-chinese-restaurant-foods-you-should-always-avoid/intro-1667991848.jpg", id: "7" },
{ name: "Mexican pie", image: "https://media.istockphoto.com/id/1213818930/photo/traditional-mexican-food.jpg?s=612x612&w=0&k=20&c=oWZyaXOiPkwUF8ehSDYZvdDCcJNkdxz2qXNFeQg111A=", id: "8" },
{ name: "Soups", image: "https://static01.nyt.com/images/2021/01/05/dining/as-tomato-and-white-bean-soup/merlin_165769566_b440a93d-e2a2-423e-9fb7-4257c2e2c1cd-superJumbo.jpg", id: "9" },
];

export const restaurantsData = [
    {
        restaurantName: "Mc Donalds", farAway: "21.2",
        businessAddress: "22 Bessie street, Cape Town", images: 'https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/2019-08/shutterstock_1181606473.jpg',
        averageReview: 4.9, numberOfReview: 272, coordinates: { lat: -26.1888612, lng: 28.246325 }, discount: 10, deliveryTime: 15,
        collectTime: 5, foodType: "Burgers, Wraps,Milkshakes...",
        productData: [{ name: "Hand cut chips", price: 29.30, image: "https://thamefoodfestival.co.uk/wp-content/uploads/2020/11/chipsmyth-chips-with-toppings.jpg" },
        { name: "Big Mac", price: 50.80, image: "https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/7bb739d7f6ae8b4ce8ed590765dffd2f" }, {
            name: "Chicken Burger",
            price: 70, image: "https://hungryhealthyhappy.com/wp-content/uploads/2017/07/Baked-Chicken-Burger-featured-b.jpg"
        },
        ],
        id: 0
    },

    {
        restaurantName: "KFC", farAway: "12.7", businessAddress: "22 Bessie street, Cape Town",
        images: 'https://bloximages.newyork1.vip.townnews.com/crescent-news.com/content/tncms/assets/v3/editorial/d/e2/de22e854-6f28-11ec-b3fb-3319f3ac180e/61d7467424abc.image.jpg?crop=1884%2C989%2C105%2C0&resize=1200%2C630&order=crop%2Cresize',
        averageReview: 4.3, numberOfReview: 306, coordinates: { lat: -26.1891648, lng: 28.2441808 },
        discount: 20, deliveryTime: 30, collectTime: 10, foodType: "Chicken,Chicken wings... ",
        productData: [{ name: "Hand cut chips", price: 29.30, image: "https://thamefoodfestival.co.uk/wp-content/uploads/2020/11/chipsmyth-chips-with-toppings.jpg" },
        { name: "Big Mac", price: 50.80, image: "https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/7bb739d7f6ae8b4ce8ed590765dffd2f" },
        { name: "Chicken Burger", price: 70, image: "https://hungryhealthyhappy.com/wp-content/uploads/2017/07/Baked-Chicken-Burger-featured-b.jpg" },
        ],
        id: 1
    },

    {
        restaurantName: "Steers", farAway: "5", businessAddress: " 17 Olivia Rd, Johannesburg",
        images: 'https://steers.co.za/images/media/real-talk/generic/drive-thru/steers-drive-thru-header-image.jpg',
        coordinates: { lat: -26.1886781, lng: 28.244879 }, averageReview: 4.9, numberOfReview: 1272,
        discount: 12, deliveryTime: 25, collectTime: 15, foodType: "Flame grilled beef Burgers",
        productData: [{ name: "Hand cut chips", price: 29.30, image: "https://thamefoodfestival.co.uk/wp-content/uploads/2020/11/chipsmyth-chips-with-toppings.jpg" },
        { name: "Big Mac", price: 50.80, image: "https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/7bb739d7f6ae8b4ce8ed590765dffd2f" }, {
            name: "Chicken Burger",
            price: 70, image: "https://hungryhealthyhappy.com/wp-content/uploads/2017/07/Baked-Chicken-Burger-featured-b.jpg"
        },
        ],
        id: 2
    },

    {
        restaurantName: "Roman Pizza", farAway: "7", businessAddress: " 15 Atlas Rd, Kempton Park",
        images: 'https://images.squarespace-cdn.com/content/v1/5c6a22320b77bde286751d45/1559576662699-L2VV8IB7KRBKICIK9WT6/FishersExterior_071518_02_lo.jpg?format=2500w',
        averageReview: 4.3, numberOfReview: 700, coordinates: { lat: -26.1845336, lng: 28.2481691 },
        discount: null, deliveryTime: 20, collectTime: 10, foodType: "Chicken pizza, Vegetarian pizza...",
        productData: [{ name: "Hand cut chips", price: 29.30, image: "https://thamefoodfestival.co.uk/wp-content/uploads/2020/11/chipsmyth-chips-with-toppings.jpg" },
        { name: "Big Mac", price: 50.80, image: "https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/7bb739d7f6ae8b4ce8ed590765dffd2f" }, {
            name: "Chicken Burger",
            price: 70, image: "https://hungryhealthyhappy.com/wp-content/uploads/2017/07/Baked-Chicken-Burger-featured-b.jpg"
        },
        ],
        id: 3
    },
]

export const productData = [{
    name: "Hand cut chips", price: 29.30, image: "https://thamefoodfestival.co.uk/wp-content/uploads/2020/11/chipsmyth-chips-with-toppings.jpg",
    details: "Two 100% fresh beef burger patties that are hot,deliciously", id: 0
},
{
    name: "Big Mac", price: 50.80, image: "https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/7bb739d7f6ae8b4ce8ed590765dffd2f",
    details: "McFeast features two 100% fresh beef burger patties that are hot", id: 1
},
{ name: "Chicken Burger", price: 70, image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png", details: "", id: 2 },

{
    name: "Hand cut chips", price: 29.30, image: "https://img.jamieoliver.com/jamieoliver/recipe-database/oldImages/large/1292_1_1440773599.jpg?tr=w-800,h-800",
    details: "Two 100% fresh beef burger patties that are hot,deliciously", id: 3
},
{
    name: "Big Mac", price: 70.20, image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate1.png",
    details: "McFeast features two 100% fresh beef burger patties that are hot", id: 4
},
{ name: "Chicken Burger", price: 70, image: "https://bukasapics.s3.us-east-2.amazonaws.com/chicken.png", details: "", id: 5 },

];


export const menuData = [

    { title: "BEEF", special: false, key: 0, },
    { title: "CHICKEN", special: false, key: 1 },
    { title: "VEGGIE BURGER", special: false, key: 2 },
    { title: "FRIES& CORN", special: false, key: 3 },
    { title: "SALADS", special: false, key: 4 },
    { title: "HAPPY MEALS", special: false, key: 5 },
    { title: "SAHRE BOX", special: false, key: 6 },
    { title: "MILKSHAKES", special: false, key: 7 },
    { title: "COLD DRINKS", special: false, key: 8 },
    { title: "DESSERTS", special: false, key: 9 },
    { title: "HOT DRINKS", special: false, key: 10 },

];

export const specialData = [
    { title: "LIMITED OFFER", key: 0 },
    { title: "GO CHILLI", key: 1 },
    { title: "GO CHEESE", key: 2 },
    { title: "MCCHICKEN DELUXE PROMO", key: 3 },
];

export const menu = [
    { key: 1, title: 'BEEF' },
    { key: 2, title: 'CHICKEN' },
    { key: 3, title: 'VEGGIE BURGER' },
    { key: 4, title: 'SHARE BOX' },
    { key: 5, title: 'Happy Meals' },
    { key: 6, title: 'Fries' },
    { key: 7, title: 'Sides' },
    { key: 8, title: 'Milkshakes' },
]


export const menuDetailedData = [
    {
        meal: "Big Mac",
        price: 70.20,
        image: "https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/7bb739d7f6ae8b4ce8ed590765dffd2f",
        details: "McFeast features two 100% fresh beef burger patties that are hot",
        preferenceTitle: ["Choose your 2 dips", "Choose your 1st drink flavour", "Choose your 2nd drink flavour", "Would you like to add a side?", "Would you Like any extra sauce?"],
        preferenceData: [

            [{ name: "Jalapeno Dip", price: 8.91, checked: false, id: 10 }, { name: "Sweet & Sour Dip", price: 8.75, checked: false, id: 11 }, { name: 'BBQ Dip', price: 11.99, checked: false, id: 12 },
            ],

            [{ name: "Small Coke", price: 8.90, checked: false, id: 13 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 14 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 15 },
            { name: 'Small Coke Zero', price: 3.95, checked: false, id: 16 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 17 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 18 },
            { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 19 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 20 },
            ],

            [{ name: "Small Coke", price: 8.90, checked: false, id: 21 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 22 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 23 },
            { name: 'Small Coke Zero', price: 3.95, checked: false, id: 24 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 25 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 26 },
            { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 27 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 28 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 29 },
            ],

            [{ name: "debonairs sauce", price: 8.90, checked: false, id: 30 }, { name: "BBQ Sauce", price: 8.90, checked: false, id: 31 }, { name: 'Tikka Sauce', price: 11.90, checked: false, id: 32 },
            ],

            [
                { name: "Small Coke", price: 8.90, checked: false, id: 33 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 34 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 35 },
                { name: 'Small Coke Zero', price: 3.95, checked: false, id: 36 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 37 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 38 },
                { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 39 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 40 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 41 },
            ],
        ],
        minimum_quatity: [2, 1, 1, null, null],
        counter: [0, 0, 0, 0, 0],
        required: [true, true, true, false, false],
        id: 0
    },

    {
        meal: "Hand cut chips",
        price: 29.30,
        image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png",
        details: "Two 100% fresh beef burger patties that are hot,deliciously",
        preferenceTitle: ["Choose your 2 dips", "Choose your 1st drink flavour", "Choose your 2nd drink flavour", "Would you like to add a side?", "Would you Like any extra sauce?"],
        preferenceData: [

            [{ name: "Jalapeno Dip", price: 8.91, checked: false, id: 0 }, { name: "Sweet & Sour Dip", price: 8.75, checked: false, id: 1 }, { name: 'BBQ Dip', price: 11.99, checked: false, id: 2 },
            ],

            [{ name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
            { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
            { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
            ],

            [{ name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
            { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
            { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
            ],

            [{ name: "debonairs sauce", price: 8.90, checked: false, id: 0 }, { name: "BBQ Sauce", price: 8.90, checked: false, id: 1 }, { name: 'Tikka Sauce', price: 11.90, checked: false, id: 2 },
            ],

            [
                { name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
                { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
                { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
            ],
        ],
        minimum_quatity: [2, 1, 2, null, null],
        counter: [0, 0, 0, 0, 0],
        required: [true, true, true, false, false],
        id: 1
    },

    {
        meal: "Chicken Burger",
        price: 45.70,
        image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png",
        details: "Satisfy your cravings with our juicy and delicious chicken burger",
        preferenceTitle: ["Choose your 2 dips", "Choose your 1st drink flavour", "Choose your 2nd drink flavour", "Would you like to add a side?", "Would you Like any extra sauce?"],
        preferenceData: [

            [{ name: "Jalapeno Dip", price: 8.91, checked: false, id: 0 }, { name: "Sweet & Sour Dip", price: 8.75, checked: false, id: 1 }, { name: 'BBQ Dip', price: 11.99, checked: false, id: 2 },
            ],

            [{ name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
            { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
            { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
            ],

            [{ name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
            { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
            { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
            ],

            [{ name: "debonairs sauce", price: 8.90, checked: false, id: 0 }, { name: "BBQ Sauce", price: 8.90, checked: false, id: 1 }, { name: 'Tikka Sauce', price: 11.90, checked: false, id: 2 },
            ],

            [
                { name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
                { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
                { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
            ],
        ],

        minimum_quatity: [2, 1, 1, null, null],
        counter: [0, 0, 0, 0, 0],
        required: [true, true, true, false, false],
        id: 2
    },

    {
        meal: "Big Mac",
        price: 50.80,
        image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png",
        details: "McFeast features two 100% fresh beef burger patties that are hot",
        preferenceTitle: ["Choose your 2 dips", "Choose your 1st drink flavour", "Choose your 2nd drink flavour", "Would you like to add a side?", "Would you Like any extra sauce?"],
        preferenceData: [

            [{ name: "Jalapeno Dip", price: 8.91, checked: false, id: 0 }, { name: "Sweet & Sour Dip", price: 8.75, checked: false, id: 1 }, { name: 'BBQ Dip', price: 11.99, checked: false, id: 2 },
            ],

            [{ name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
            { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
            { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
            ],

            [{ name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
            { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
            { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
            ],

            [{ name: "debonairs sauce", price: 8.90, checked: false, id: 0 }, { name: "BBQ Sauce", price: 8.90, checked: false, id: 1 }, { name: 'Tikka Sauce', price: 11.90, checked: false, id: 2 },
            ],

            [
                { name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
                { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
                { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
            ],
        ],

        minimum_quatity: [2, 1, 1, null, null],
        counter: [0, 0, 0, 0, 0],
        required: [true, true, true, false, false],
        id: 3
    },


    {

        meal: "Hand cut chips",
        price: 29.30,
        image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png",
        details: "Two 100% fresh beef burger patties that are hot,deliciously",

        preferenceTitle: ["Choose your 2 dips", "Choose your 1st drink flavour", "Choose your 2nd drink flavour", "Would you like to add a side?", "Would you Like any extra sauce?"],

        preferenceData: [

            [{ name: "Jalapeno Dip", price: 8.91, checked: false, id: 0 }, { name: "Sweet & Sour Dip", price: 8.75, checked: false, id: 1 }, { name: 'BBQ Dip', price: 11.99, checked: false, id: 2 },
            ],

            [{ name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
            { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
            { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
            ],

            [{ name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
            { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
            { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
            ],

            [{ name: "debonairs sauce", price: 8.90, checked: false, id: 0 }, { name: "BBQ Sauce", price: 8.90, checked: false, id: 1 }, { name: 'Tikka Sauce', price: 11.90, checked: false, id: 2 },
            ],

            [
                { name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
                { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
                { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
            ],
        ],

        minimum_quatity: [2, 1, 1, null, null],
        counter: [0, 0, 0, 0, 0],
        required: [true, true, true, false, false],
        id: 4
    },

    {
        meal: "Big Mac",
        price: 70.20,
        image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate1.png",
        details: "McFeast features two 100% fresh beef burger patties that are hot",
        preferenceTitle: ["Choose your 2 dips", "Choose your 1st drink flavour", "Choose your 2nd drink flavour", "Would you like to add a side?", "Would you Like any extra sauce?"],
        preferenceData: [

            [{ name: "Jalapeno Dip", price: 8.91, checked: false, id: 10 }, { name: "Sweet & Sour Dip", price: 8.75, checked: false, id: 11 }, { name: 'BBQ Dip', price: 11.99, checked: false, id: 12 },
            ],

            [{ name: "Small Coke", price: 8.90, checked: false, id: 13 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 14 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 15 },
            { name: 'Small Coke Zero', price: 3.95, checked: false, id: 16 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 17 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 18 },
            { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 19 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 20 },
            ],

            [{ name: "Small Coke", price: 8.90, checked: false, id: 21 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 22 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 23 },
            { name: 'Small Coke Zero', price: 3.95, checked: false, id: 24 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 25 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 26 },
            { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 27 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 28 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 29 },
            ],

            [{ name: "debonairs sauce", price: 8.90, checked: false, id: 30 }, { name: "BBQ Sauce", price: 8.90, checked: false, id: 31 }, { name: 'Tikka Sauce', price: 11.90, checked: false, id: 32 },
            ],

            [
                { name: "Small Coke", price: 8.90, checked: false, id: 33 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 34 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 35 },
                { name: 'Small Coke Zero', price: 3.95, checked: false, id: 36 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 37 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 38 },
                { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 39 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 40 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 41 },
            ],
        ],
        minimum_quatity: [2, 1, 1, null, null],
        counter: [0, 0, 0, 0, 0],
        required: [true, true, true, false, false],
        id: 5
    },

];