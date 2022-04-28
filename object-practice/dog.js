class Dog{
    constructor(namee,species,size){
        this.name = namee;
        this.species = species;
        this.size = size;
    }
    bark = function(){
        if(this.size > 60){
           return 'Grr! Grr!'
        } else {
            return 'Woof! Woof!'
        }
    }
}

const fang = new Dog("Fang", "boarhound", 75);
console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

const snowy = new Dog("Snowy", "terrier", 22);
console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);



class Character {
    constructor(name, health, strength) {
      this.name = name;
      this.health = health;
      this.strength = strength;
      this.xp = 0; // XP is always zero for new characters
      this.gold = 10;
      this.key = 1
    }
    // Attack a target
    attack(target) {
      if (this.health > 0) {
        const damage = this.strength;
        console.log(
          `${this.name} attacks ${target.name} and causes ${damage} damage points`
        );
        target.health -= damage;
        if (target.health > 0) {
          console.log(`${target.name} has ${target.health} health points left`);
        } else {
          target.health = 0;
          const bonusXP = 10;
          const bonusGold = 10;
          const bonusKey = 1;
          console.log(
            `${this
              .name} eliminated ${target.name} and wins ${bonusXP} experience points, ${this.gold} gold and ${this.key} key(s)`
          );
          this.gold += bonusGold
          this.key += bonusKey
          this.xp += bonusXP;
        }
      } else {
        console.log(`${this.name} can't attack (they've been eliminated)`);
      }
    }
    // Return the character description
    describe() {
      return `${this.name} has ${this.health} health points, ${this
        .strength} as strength and ${this.xp} XP points , ${this.gold} gold and ${this.key} key(s)`;
    }
  }

  const aurora = new Character("Aurora", 150, 25);
const glacius = new Character("Glacius", 130, 30);

console.log("Welcome to the adventure! Here are our heroes:");
console.log(aurora.describe());
console.log(glacius.describe());

const monster = new Character("Spike", 40, 20);
console.log("A wild monster has appeared: it's named " + monster.name);

monster.attack(aurora);
monster.attack(glacius);
aurora.attack(monster);
glacius.attack(monster);

console.log(aurora.describe());
console.log(glacius.describe());




class Account{
    constructor(name,credit){
        this.name = name;
        this.balance = 0
        this.credit = credit
    }
    describe(){
      return `owner: ${this.name}, balance:${this.balance += this.credit}`
    }
   
}
let arr = ['Sean','Brad','Georges']


const newAccount = arr.map(element => new Account(element,1000).describe())
console.log(newAccount)