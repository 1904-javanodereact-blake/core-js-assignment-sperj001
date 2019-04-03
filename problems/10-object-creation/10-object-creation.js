/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/
let newTrainee = {
    name: "Joseph Sperduto",
    age: 21
}
console.log(`My name is ${newTrainee.name} and I am ${newTrainee.age} while participating in training. This was created with an object literal`)

function intermediateTrainee(name, age) {
    this.name = name;
    this.age = age;
}
let greenyTranee = new intermediateTrainee("Joseph Sperduto", 21)
console.log(`My name is ${greenyTranee.name} and I am ${greenyTranee.age} while participating in training. This was created with a constructor function`)

class trainee {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    details(){
         return `My name is ${this.name} and I am ${this.age} while participating in training. This was created with a ES6 class`;
    }
}
let firstTrainee = new trainee("Joseph Sperduto", 21);
console.log(firstTrainee.details());