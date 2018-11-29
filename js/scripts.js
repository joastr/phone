'use strict';

function Phone(brand, price, color, screen, giga) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.screen = screen;
	this.giga = giga;
}

Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + ", screen is " + this.screen + " and the price is " + this.price + "." + " Additionally, this price include " + this.giga + " Internet."  );
}

var iPhone6S = new Phone("Apple", 2250, "silver", "6'", "2GB");
var onePlusOne = new Phone("Never Settle", 1700, "black", "7'", "10GB" );
var samsungGalaxyS6 = new Phone("Samsung", 2500, "gold", "6'", "5GB");

iPhone6S.printInfo();
onePlusOne.printInfo();
samsungGalaxyS6.printInfo();



