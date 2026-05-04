// OOP: instance of type guard / type narrowing

class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getSleep(numOfHours: number) {
    console.log(`${this.name} doinik ${numOfHours} ghonta ghumay`);
  }
}

class Student extends Person {
  constructor(name: string) {
    super(name);
  }

  doStudy(numOfHours: number) {
    console.log(`${this.name} doinik ${numOfHours} ghonta study kore`);
  }
}

class Teacher extends Person {
  constructor(name: string) {
    super(name);
  }

  takeClass(numOfHours: number) {
    console.log(`${this.name} doinik ${numOfHours} ghonta class ney`);
  }
}

const isStudent = (user: Person) => {
  return user instanceof Student; //reuturns true or false
};

const isTeacher = (user: Person) => {
  return user instanceof Teacher; // returns true or false
};

const getUserInfo = (user: Person) => {
  if (isStudent(user)) {
    user.doStudy(10);
  } else if (isTeacher(user)) {
    user.takeClass(5);
  } else {
    user.getSleep(10);
  }
};

const student1 = new Student("Mr. student");
const teacher1 = new Teacher("Mr. teacher");
const person1 = new Person("Mr. person");

getUserInfo(person1);
