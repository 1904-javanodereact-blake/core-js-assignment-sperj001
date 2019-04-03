/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/
class trainee {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    details(){
         return `My name is ${this.name} and I am ${this.age} while participating in training.`;
    }
}
let firstTrainee = new trainee("Joseph Sperduto", 21);
console.log(firstTrainee.details());