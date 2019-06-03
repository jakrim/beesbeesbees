var ForagerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = 'find pollen';
  // inherited this.color (yellow)
  // inherited this.food (jelly)
  // eat method - inherited;
  this.canFly = true;
  this.treasureChest = [];
};

ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype.constructor = ForagerBee;


ForagerBee.prototype.forage = function (treasure) {
  this.treasureChest.push(treasure);
}
// ForagerBee.forage('item')