// Complete the js code
function Car(make: string, model: string) {
	this.make = make;
	this.model = model;
}

Car.prototype.getMakeModel = function(){
	return '${this.make} ${this.model}';
};


function SportsCar(make: string, model: string, topSpeed: number) {
	Car.call(this, make, model);
	this.topSpeed = topSpeed;
}

// Inherit
SportsCar.prototype = Object.create(Car.prototype);

// Add a method to the SportsCar prototype
SportsCar.prototype.getTopSpeed = function() {
  return this.topSpeed;
};


// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
