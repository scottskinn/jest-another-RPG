const Potion = require('../lib/Potion');
const Character = require('./Character');

class Player extends Character {
    constructor(name = '') {
        super(name);
        // this.name = name;

        // this.health = Math.floor(Math.random() * 10 + 95);
        // this.strength = Math.floor(Math.random() * 5 + 7);
        // this.agility = Math.floor(Math.random() * 5 + 7);

        this.inventory = [new Potion('health'), new Potion()];
    };

    //  Inherit prototype methods from Character
    // Object.create(Character.prototype);

    // returns an object with various player properties
    getStats = function() {
        return{
            potions: this.inventory.length,
            health: this.health,
            strength: this.strength,
            agility: this.agility
        };
    };

    //  returns the inventory array or false if empty
    getInventory = function() {
        if (this.inventory.length) {
            return this.inventory;
        }
        return false
    }; 

    // Potion
    addPotion = function(potion) {
        this.inventory.push(potion);
    };
    // Use Potion
    usePotion = function(index) {
        const potion = this.getInventory().splice(index, 1)[0];

        switch (potion.name) {
            case 'agility':
                this.agility += potion.value;
                break;
            case 'health':
                this.health += potion.value;
                break;
            case 'strength': 
            this.strength += potion.value;
            break;
        }
    };
}

module.exports = Player;


// Objects are inherit from the Character()
    //  Health
    // Player.prototype.getHealth = function() {
    //     return `${this.name}'s health is now ${this.health}!`;
    // };
    // // check if alive
    // Player.prototype.isAlive = function() {
    //     if (this.health === 0) {
    //         return false;
    //     }
    //     return true;
    // };
    // //  Reduce health
    // Player.prototype.reduceHealth = function(health) {
    //     this.health -= health;

    //     if(this.health < 0) {
    //         this.health = 0;
    //     }
    // };
    // // Attack
    // Player.prototype.getAttackValue = function() {
    //     const min = this.strength - 5;
    //     const max = this.strength + 5;

    //     return Math.floor(Math.random() * (max - min) + min);
    // };
