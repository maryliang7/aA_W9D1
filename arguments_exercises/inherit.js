Function.prototype.inherits = function(Subclass, SuperClass) {

  function Surrogate() {} 
  Surrogate.prototype = SuperClass.prototype;
  Subclass.prototype = new Surrogate();
  Subclass.prototype.constructor = Subclass;

};

function MovingObject (name) {
  this.name = name;

}

MovingObject.prototype.myName = function () {
  console.log(`My name is ${this.name}`);
};

function Ship(name, color) {
  MovingObject.call(this, name);
  this.color = color;
}

Function.inherits(Ship, MovingObject);

Ship.prototype.myColor = function() {
  console.log(`I am ${this.color}`);
};

function Asteroid(name, size) {
  MovingObject.call(this, name);
  this.size = size;
}

Function.inherits(Asteroid, MovingObject);

Asteroid.prototype.mySize = function () {
  console.log(`My size is ${this.size}`);
};

