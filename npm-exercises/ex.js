let validator = require('validator');
let faker = require('faker');


//Ex. 1
//Check whether "shoobert@dylan" is a valid email (should be false)
console.log(validator.isEmail('shoobert@dylan'));


//Ex. 2
//Check whether "786-329-9958" is a valid US mobile phone number (should be true) - use the en-US locale
console.log(validator.isMobilePhone('786-329-9958', 'en-US'));
//Ex. 3
//Use the following blacklist
let blacklist = ["!", "?", ".", "@", "~", ",", "'"]
//Along with validator's `blacklist` method to clean this text:
let text = "I'M SO EXCITED!!!~!"
//Ultimately, it should print "im so excited"
console.log(validator.blacklist(text, blacklist))


const makeHuman = function (times) {
    for (let i = 0; i < times.length; i++) {
        let randomName = faker.name.firstName()
        let randomimg = faker.image.imageUrl()
        let randomvehicle = faker.vehicle.vehicle()
        console.log(`${randomName}, ${randomimg} , ${randomvehicle}`)
    }
}
makeHuman(2)

//prints the following:
// Viola, https://s3.amazonaws.com/uifaces/faces/twitter/motionthinks/128.jpg, Donnelly - Feil
// Isaias, https://s3.amazonaws.com/uifaces/faces/twitter/gt/128.jpg, Wilkinson, Hickle and Hoppe
