/**
 * OOP --> making instance from Class. Instance is a specific manifestation of class while
 * object is variable of data structure consisting of key-value pair. where instance can
 * have method from their class. Method is a function that is inside a class or object.
 */

// class Animal {
//   name: string;
//   species: string;
//   sound: string;

//   constructor(name: string, species: string, sound: string) {
//     this.name = name;
//     this.species = species;
//     this.sound = sound;
//   }

//   makeSound() {
//     console.log(`${this.name} is making sound ${this.sound}`);
//   }
// }

// Parameter Properties
// class Animal {
//   // public name: string;
//   // public species: string;
//   // public sound: string;

//   constructor(
//     public name: string,
//     public species: string,
//     public sound: string,
//   ) {
//     // this.name = name;
//     // this.species = species;
//     // this.sound = sound;
//   }

//   makeSound() {
//     console.log(`${this.name} is making sound ${this.sound}`);
//   }
// }
class Animal {
  constructor(
    public name: string,
    public species: string,
    public sound: string,
  ) {}

  makeSound() {
    console.log(`${this.name} is making sound ${this.sound}`);
  }
}

const cat = new Animal("mew", "calico", "mew mew");

const dog = new Animal("doggo", "german shepherd", "ghew");

dog.makeSound();
