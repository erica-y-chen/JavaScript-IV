/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
//----------------gameobject
class GameObject {
    constructor(attributes) {
      this.createdAt = attributes.createdAt;
      this.name = attributes.name;
      this.dimensions = attributes.dimensions;
    }
    
    //method
    destroy() {
        return `${this.name} was removed from the game.`;
      }
   }
  
    //-----------characterstats
    class CharacterStats extends GameObject{
      constructor(attributes) {
        super(attributes)
        this.healthPoints = attributes.healthPoints;
      }
      
      
      //methods
      takeDamage() {
      return `${this.name} took damage`; 
      }
    }
    
    
    //---------humanoid
    class Humanoid extends CharacterStats {
      constructor(attributes) {
      super(attributes)
      this.team = attributes.team; 
      this.weapons = attributes.weapons;
      this.language = attributes.language; 
      
      this.attack = attributes.attack;
      this.strength = attributes.strength;
      this.defense = attributes.defense; 
      }
  
      //methods
      greet() {
      return `${this.name} offers a greeting in ${this.language}`; 
      }
      
      damage() {
      return `${this.name} health = ${this.healthPoints}`;
      }
      
    }
    
    
    
    //-----------Villain
    class Villain extends Humanoid {
      constructor (attributes) {
        super(attributes)
        this.damagePts = attributes.damagePts; 
        this.extraAttack = attributes.extraAttack;
        this.opponent = attributes.opponent;  
      }
      
      
      attacking () {
        this.opponent.healthPoints -= (this.damagePts + this.extraAttack); 
      return `${this.name} attacks ${this.opponent.name} with ${this.weapons} and deals out ${this.damagePts} damange with additional damage of ${this.extraAttack}`;
      }
    }
    
    
    //-----------Hero
    class Hero extends Humanoid {
      constructor (attributes) {
        super(attributes)
        this.damagePts = attributes.damagePts; 
        this.counterstrikePts = attributes.counterstrikePts;
        this.opponent = attributes.opponent;
      }
  
      //methods
      counterstrike() {
        this.opponent.healthPoints -= this.counterstrikePts;
        return `${this.name} counterstrikes for ${this.counterstrikePts} damage`;
      }
      
      attacking() {
        this.opponent.healthPoints -= this.damagePts;
        return `${this.name} attacks ${this.opponent.name} with ${this.weapons} and deals out ${this.damagePts} damage`;
      }
    }
    
  
    
    //--------------------
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
    
      const hobbit = new Hero({
        healthPoints: 20,
        name: 'Frodo',
        counterstrikePts: 2,
        weapons: ['stick'],
        damagePts: 3,
      });
      
      const wizard = new Villain({
        healthPoints: 11,
        name: 'Saruman',
        extraAttack: 3,
        weapons: ['staff'],
        opponent: hobbit, 
        damagePts: 2,
      });
    
      hobbit.opponent = wizard; 
      // console.log(mage.createdAt); // Today's date
      // console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
      // console.log(swordsman.healthPoints); // 15
      // console.log(mage.name); // Bruce
      // console.log(swordsman.team); // The Round Table
      // console.log(mage.weapons); // Staff of Shamalama
      // console.log(archer.language); // Elvish
      // console.log(archer.greet()); // Lilith offers a greeting in Elvish.
      // console.log(mage.takeDamage()); // Bruce took damage.
      // console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
    console.log(hobbit.damage());
    console.log(wizard.damage());
    console.log(hobbit.attacking());
    console.log(wizard.damage());
    console.log(wizard.attacking());
    console.log(hobbit.damage());
    console.log(hobbit.counterstrike());
    console.log(wizard.damage());
    
    
  
  
    // Stretch task: 
    // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  