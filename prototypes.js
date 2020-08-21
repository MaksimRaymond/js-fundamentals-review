/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.
  In this file you will be creating three constructor functions: GameObject, Humanoid.  
  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
*/

//lets say we pasws in the attributes. if we want ot asaccess the specific instance of a game object we have access to it like gameObject.name
//declare the function

//* PROTOTYPE *//
// function GameObject(attrs){
//   this.createdAt = attrs.createdAt;
//   this.name = attrs.name;
//   this.dimensions = attrs.dimensions;
//   this.healthpoints = attrs.healthpoints;
// }
//   GameObject.prototype.destroy = function(){
//     return `${this.name} was removed from the game`
//   }

//   GameObject.prototype.takeDamage = function(){
//     return `${this.name} took damage`
//   }

//*CLASS*//

class GameObject {
  constructor(attrs){
    this.createdAt = attrs.createdAt;
    this.name = attrs.name;
    this.dimensions = attrs.dimensions;
    this.healthpoints = attrs.healthpoints;  
  }

    destroy(){
      return `${this.name} was removed from the game`
    }

    takeDamage(){
      return `${this.name} took damage`
    }
}











/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject 
  * should inherit takeDamage() from GameObject
*/
 
//PROTOTYPE//
// function Humanoid(attrs){
//   GameObject.call(this, attrs)
//   this.team = attrs.team;
//   this.weapons = attrs.weapons;
//   this .language = attrs.language;
// }
// //this is how we inherit the methods from the parents prototype constructor.
// Humanoid.prototype = Object.create(GameObject.prototype)

// Humanoid.greet.greet = function(){
//   return `${this.name} offers a greeting in ${this.language}`
// }
// extends removes the need for object.create which is used to inherrit methods

//CLASS//
class Humanoid extends GameObject {
  constructor(attrs){
    super(attrs)
    this.team = attrs.team
    this.weapons = attrs.weapons
    this.language = attrs.language
  }

  greet(){
    return `${this.name} offers a greeting in ${this.language}`
  }
}



/*
  * Inheritance chain: GameObject -> Humanoid
  * Instances of Humanoid should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });
  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });
  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });
  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
