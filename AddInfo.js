var fs = require('fs');

var name = window.prompt("What is your name?");
var street = window.prompt("What is your street?");
var city = window.prompt("What is the name of your city?");
var state = window.prompt("What state are you in?");
var zip = window.prompt("What is your zip code?");
var bool = window.prompt("Is this address the same as your billing address? Y/N");
if (bool = "N") {
    var bstreet = window.prompt("What is your street?");
    var bcity = window.prompt("What is the name of your city?");
    var bstate = window.prompt("What state are you in?");
    var bzip = window.prompt("What is your zip code?");
}
var number = window.prompt("What is your phone number?");
var cnumber = window.prompt("What is your card number?");
var exp = window.prompt("The expiration date?");
var cvv = window.prompt("What is its CVV?");

var info = [name, street, city, state, zip, number, cnumber, exp, cvv];
var text = "Information:" + "<br>";
var i;
for (i = 0; i < info.length; i++) {
  text += info[i] + "<br>";
}
if (bool = "N") {
    var info2 = [bstreet, bcity, bstate, bzip];
    text += "<br>" + "Billing Address:" + "<br>"
    for (j = 0; j < info2.length; j++) {
        text += info2[j] + "<br>";
      }
} 
fs.writeFile('data.txt', text, (err) => { 
      
    // In case of a error throw err. 
    if (err) throw err; 
})

