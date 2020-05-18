var HoneyMakerBee = function() {
  //copy over Grub (age, color,food )
 Bee.call(this);
 this.age = 10;
//  this.color = 'yellow';
 this.job = 'make honey';
 this.honeyPot = 0;

};

//get Grup.prototype
HoneyMakerBee.prototype = Object.create(Grub.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;
HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot++;
}
HoneyMakerBee.prototype.giveHoney =  function() {
  this.honeyPot--;
}



