/**
 * Inheritance is a way that allows a children class to acquire the properties and methods
 * of another parent class.
 */

class Person {
  name: string; //common properties
  age: number; //common properties
  address: string; //common properties

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
  //common properties
  getSleep(numOfHours: number) {
    console.log(`${this.name} ${numOfHours} ghonta ghumai`);
  }
}

class Student extends Person {}
class Teacher extends Person {
  designation: string; //extra property

  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address); // super --> constructor of parent class

    this.designation = designation;
  }

  takesClass(numOfClass: number) {
    console.log(`${this.name} ${numOfClass} ghonta class ney`);
  }
}

const student1 = new Student("Mr. Fakibaz", 18, "bangaldesh");

student1.getSleep(10);

const teacher1 = new Teacher(
  "Mr. smart teacher",
  25,
  "Bangaldesh",
  "senior teacher",
);

teacher1.takesClass(4);
