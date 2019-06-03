var HoneyMakerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = 'make honey';
  // Color is inherited from Bee (yellow)
  // Food is inherited
  // Eat is inherited
  this.honeyPot = 0;
  
};
HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

HoneyMakerBee.prototype.makeHoney = function () {
  this.honeyPot++;
}

HoneyMakerBee.prototype.giveHoney = function () {
  this.honeyPot--;
}

