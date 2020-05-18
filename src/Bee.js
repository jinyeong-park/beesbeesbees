var Bee = function() {

//copy over Grub (age, color,food )
 Grub.call(this);
 //and then modify some property
 this.age = 5;
 this.color = 'yellow';
 this.job = 'keep on growing';
};

//get Grup.prototype
Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;



