var Product = require("../models/product");
var mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/shopping", { useNewUrlParser: true }, function(e){
  console.log('You are now connected to mongodb...');
});

var products = [ 
    new Product( {
        imagePath : 'http://nebula.wsimg.com/48c26fa4a672f0b9c6e2e0d189de36fc?AccessKeyId=FCF9739880F45E584407&disposition=0&alloworigin=1',
        title : 'Fishing',
        description : 'This is the water color painting done in 2014. Scene from mumbai marine drive',
        price : 4000
    }),
    new Product( {
        imagePath : 'http://nebula.wsimg.com/7bf61b5b063e45dbf222fd9f1e63a10d?AccessKeyId=FCF9739880F45E584407&disposition=0&alloworigin=1',
        title : 'Koteshwara Beach ',
        description : 'This is the water color painting done in 2016. Scene from Koteshwara Beejadi beach',
        price : 6000
    }),
    new Product( {
        imagePath : 'http://nebula.wsimg.com/9f00deafb0fc51c7ad4fe32e1a3a36ce?AccessKeyId=FCF9739880F45E584407&disposition=0&alloworigin=1',
        title : 'Street Scene',
        description : 'This is the water color painting done in 2014. Street scene of Mangalore near central talkies.',
        price : 3500
    }),
    new Product( {
        imagePath : 'http://nebula.wsimg.com/084060306fb3a901863a9fec12e86e9e?AccessKeyId=FCF9739880F45E584407&disposition=0&alloworigin=1',
        title : 'Kukke',
        description : 'This is the water color painting done in 2016. Front view of Kukke Subrahmanya temple.',
        price : 4500
    }),
    new Product( {
        imagePath : 'http://nebula.wsimg.com/61801d2b13c2db8b004d7693f8c28770?AccessKeyId=FCF9739880F45E584407&disposition=0&alloworigin=1',
        title : 'River SIde',
        description : 'This is the water color painting done in 2013. Scene of native place in Attur near Mangalore',
        price : 5000
    }),
    new Product( {
        imagePath : 'http://nebula.wsimg.com/4e4b9c6f669ef6e2c4ebb55919f8dc56?AccessKeyId=FCF9739880F45E584407&disposition=0&alloworigin=1',
        title : 'Deer',
        description : 'This is the water color painting done in 2012. Deer atlast found the water body',
        price : 6500
    })
];
var done = 0;
for (var i = 0 ; i < products.length; i++) {
    products[i].save(function(err, res){ 
        done++;
        if(done === products.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}