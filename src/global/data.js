export const filterData = [{ name: "Fast food", image: require('../assets/fastfood.jpg'), id: "0" },
{ name: "Burgers", image: require("../assets/burger.jpg"), id: "1" },
{ name: "Salads", image: require("../assets/salads.jpg"), id: "2" },
{ name: "Hotdog", image: require("../assets/hotdog.jpg"), id: "3" },
{ name: "Chinese", image: require("../assets/chinese.jpg"), id: "4" },
{ name: "Mexican", image: require("../assets/mexican.jpg"), id: "5" },
{ name: "Sea food", image: require("../assets/seafood.jpg"), id: "6" },
];

export const filterData2 = [{name:"Fast food",image:'https://www.eatthis.com/wp-content/uploads/sites/4/2021/01/fast-food.jpg?quality=82&strip=1' , id:"0"},
{name:"Burgers",image: 'https://www.taysteesburger.com/images/banner-bg.jpg',id:"1"},
{name:"Salads",image:"https://cdn.pixabay.com/photo/2016/05/12/00/07/appetizer-1386743__340.jpg",id:"2"},
{name:"Hotdog",image: "https://media.istockphoto.com/id/484992224/photo/homemade-bacon-wrapped-hot-dogs.jpg?s=612x612&w=0&k=20&c=dRBgVfXudwvAbmMR1xTbTpqLgicSlAe5Y2Zjw49Tweo=",id:"3"},
{name:"Chinese",image:"https://www.healthdigest.com/img/gallery/unhealthy-chinese-restaurant-foods-you-should-always-avoid/intro-1667991848.jpg",id:"4"},
{name:"Mexican",image:"https://media.istockphoto.com/id/1213818930/photo/traditional-mexican-food.jpg?s=612x612&w=0&k=20&c=oWZyaXOiPkwUF8ehSDYZvdDCcJNkdxz2qXNFeQg111A=",id:"5"},  
{name:"Sea food",image:"https://img.freepik.com/premium-photo/thai-grilled-seafood-prawn-shrimp-cockle_282791-681.jpg",id:"6"},
{name:"Chinese Food",image:"https://www.healthdigest.com/img/gallery/unhealthy-chinese-restaurant-foods-you-should-always-avoid/intro-1667991848.jpg",id:"7"},
{name:"Mexican pie",image:"https://media.istockphoto.com/id/1213818930/photo/traditional-mexican-food.jpg?s=612x612&w=0&k=20&c=oWZyaXOiPkwUF8ehSDYZvdDCcJNkdxz2qXNFeQg111A=",id:"8"},  
{name:"Soups",image:"https://static01.nyt.com/images/2021/01/05/dining/as-tomato-and-white-bean-soup/merlin_165769566_b440a93d-e2a2-423e-9fb7-4257c2e2c1cd-superJumbo.jpg",id:"9"},
];

export const restaurantsData = [
    {
        restaurantName: "Mc Donalds", farAway: "21.2",
        businessAddress: "22 Bessie street, Cape Town", images: 'https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/2019-08/shutterstock_1181606473.jpg',
        averageReview: 4.9, numberOfReview: 272, coordinates: { lat: -26.1888612, lng: 28.246325 }, discount: 10, deliveryTime: 15,
        collectTime: 5, foodType: "Burgers, Wraps,Milkshakes...",
        productData: [{ name: "Hand cut chips", price: 29.30, image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png" },
        { name: "Big Mac", price: 50.80, image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png" }, {
            name: "Chicken Burger",
            price: 70, image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png"
        },
        ],
        id: 0
    },

    {
        restaurantName: "KFC", farAway: "12.7", businessAddress: "22 Bessie street, Cape Town",
        images: 'https://bloximages.newyork1.vip.townnews.com/crescent-news.com/content/tncms/assets/v3/editorial/d/e2/de22e854-6f28-11ec-b3fb-3319f3ac180e/61d7467424abc.image.jpg?crop=1884%2C989%2C105%2C0&resize=1200%2C630&order=crop%2Cresize',
        averageReview: 4.3, numberOfReview: 306, coordinates: { lat: -26.1891648, lng: 28.2441808 },
        discount: 20, deliveryTime: 30, collectTime: 10, foodType: "Chicken,Chicken wings... ",
        productData: [{ name: "Hand cut chips", price: 29.30, image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png" },
        { name: "Big Mac", price: 50.80, image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png" },
        { name: "Chicken Burger", price: 70, image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png" },
        ],
        id: 1
    },

    {
        restaurantName: "Steers", farAway: "5", businessAddress: " 17 Olivia Rd, Johannesburg",
        images: 'https://steers.co.za/images/media/real-talk/generic/drive-thru/steers-drive-thru-header-image.jpg',
        coordinates: { lat: -26.1886781, lng: 28.244879 }, averageReview: 4.9, numberOfReview: 1272,
        discount: 12, deliveryTime: 25, collectTime: 15, foodType: "Flame grilled beef Burgers",
        productData: [{ name: "Hand cut chips", price: 29.30, image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png" },
        { name: "Big Mac", price: 50.80, image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png" }, {
            name: "Chicken Burger",
            price: 70, image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png"
        },
        ],
        id: 2
    },

    {
        restaurantName: "Roman Pizza", farAway: "7", businessAddress: " 15 Atlas Rd, Kempton Park",
        images: 'https://images.squarespace-cdn.com/content/v1/5c6a22320b77bde286751d45/1559576662699-L2VV8IB7KRBKICIK9WT6/FishersExterior_071518_02_lo.jpg?format=2500w',
        averageReview: 4.3, numberOfReview: 700, coordinates: { lat: -26.1845336, lng: 28.2481691 },
        discount: null, deliveryTime: 20, collectTime: 10, foodType: "Chicken pizza, Vegetarian pizza...",
        productData: [{ name: "Hand cut chips", price: 29.30, image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png" },
        { name: "Big Mac", price: 50.80, image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png" }, {
            name: "Chicken Burger",
            price: 70, image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png"
        },
        ],
        id: 3
    },
]