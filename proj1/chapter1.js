// This is an exercise for ch.1

const TAX = 0.0765;	//MN tax rate
const PHONE_PRICE = 99.99;
const ACC_PRICE = 9.99;
const MENTAL_LIMIT = 10;

var bankBalance = 1542;
var numOfPhones = 0;
var numOfAcc = 0;

function calcTax (amt) {

	return (amt * (1 + TAX));
}

function formatPrice (inPrice){

	return ("$" + Number(inPrice.toFixed(2)).toString());
}

// Starting the main program to buy phones and accessories

//bankBalance = prompt("Please, enter your bank account balance");

var phoneCost = calcTax(PHONE_PRICE);
var accCost = calcTax(ACC_PRICE);

while (bankBalance > phoneCost) {

	bankBalance -= phoneCost;
	numOfPhones++;
	console.log ("You bought a phone for " + formatPrice(phoneCost) + ", tax included.");

	if ((ACC_PRICE < MENTAL_LIMIT) && (bankBalance > accCost)) {

		bankBalance -= accCost;
		numOfAcc++;
		console.log ("You bought an accessory for " + formatPrice(accCost) + ", tax included.");
		console.log ("-------------------");
	}
}


console.log ("You were able to buy " + numOfPhones + " phones and " + numOfAcc + " accessories.");
console.log ("You still have $" + bankBalance.toFixed(2) + " in your account.");