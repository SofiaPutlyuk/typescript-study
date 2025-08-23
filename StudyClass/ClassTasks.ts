//Базові класи
//Task1
class Person {
    name:string
    age:number
    constructor(name:string , age:number){
    this.name = name
    this.age = age
    }
    introduce() {
        return `Hello , my name is ${this.name} and I am ${this.age} years old`
    }
}
const person = new Person("John",25)
console.log(person.introduce())
//Task2
class Rectangle {
    width:number 
    height:number
    constructor(width:number , height:number){
        this.width = width
        this.height = height
    }
    getArea() {
        return 1/2 * this.width * this.height;
    }
}
const rectangle = new Rectangle(5 ,6)
console.log(rectangle.getArea())
//Task 3
class Car {
    arrayBrand:string[] = ["Tesla" , "Toyota" , "BMW", "Lamborgini"]
     arrayAge:number[] = [2020 , 2021 , 2022 , 2023 , 2024 , 2025]
     randomCar(){
     const index =  Math.floor(Math.random() * this.arrayBrand.length)
     return this.arrayBrand[index]
     }
     randomYearCar(){
     const index = Math.floor(Math.random() * this.arrayAge.length) 
     return this.arrayAge[index]
     }
    drive(){
        return `Driving a ${this.randomCar()}  from ${this.randomYearCar()}`
    }
}
const car = new Car()
console.log(car.drive())
//Наслідування
//Task 4
class Animal {
    name : string
    constructor(name:string){
        this.name = name
    }
    makeSound(){
    return `${this.name} makes a sound`
    }
  
}
class Dog extends Animal {
    makeSound(): string {
        return `${this.name} Woof`;
    }
}
class Cat extends Animal {
    makeSound(): string {
        return `${this.name} Meow`;
    }
}
const dog = new Dog("Rex")
console.log(dog.makeSound())
const cat = new Cat("Baron")
console.log(cat.makeSound())
//Task 5
class Employee {
    name:string 
    salary:number
    constructor(name:string , salary:number){
        this.name = name,
        this.salary = salary
    }
    getDetails(): string{
        return`${this.name} earns ${this.salary}`
    }
}
class Maneger extends Employee {
departament:string 
constructor(name:string , salary:number , departament:string){
super(name, salary)
this.departament = departament
}
getDetails(): string {
    return `${this.name} earns ${this.salary} and manages ${this.departament}`;
}
}
const employee = new Employee("Rebeca",5000)
console.log(employee.getDetails())
const manage =  new Maneger("Bob" , 10000 , "IT")
console.log(manage)
//Інкапсуляція
//Task 6
class BankAccount {
    private balance:number
    constructor(balance:number){
        this.balance = balance
    }
    deposit(amount :number):void {
     this.balance += amount;
    }
    withdraw(amount:number):string | void {
     if(amount > this.balance){
       return  "Мало коштів";
     } else {
         this.balance -= amount;
     }
    }
    getBalance(): number{
        return this.balance;
    }
}
const account = new BankAccount(1000)
account.deposit(300)
console.log(account.getBalance())
console.log(account.withdraw(2000))
account.withdraw(300)
console.log(account.getBalance())
//Task 7
class UserPassword  {
    private password : string
    constructor(password:string){
        if(password.length < 8){
            throw new Error("Password must be at least 8 characters")
        }
        this.password = password
    }
    checkPassword(input:string):boolean{
          return input === this.password;
    }
}
const user = new UserPassword("123456789")
console.log(user.checkPassword("1234"))
console.log(user.checkPassword("123456789"))
//Абстракції та інтерфейси
//Task 8
interface Shape {
    getArea() : number
}
class Circle implements Shape{
    radius:number
    constructor(radius:number){
        this.radius = radius
    }
    getArea() {
        return 3.14 * this.radius * this.radius;
    }
}
class Square implements Shape {
    side:number
    constructor(side:number){
    this.side = side
    }
    getArea(): number {
        return this.side * this.side;
    }
}
const circle = new Circle(6)
console.log(circle.getArea())
const square = new Square(4)
console.log(square.getArea())
abstract class Transport {
abstract move() : void
abstract name:string
abstract speed: number
}
class CarTransport extends Transport {
    name:string 
    speed:number
    constructor(name:string , speed:number){
        super()
        this.name = name ,
        this.speed = speed
    }
  move(){
    return `Move ${this.name} , speed ${this.speed}`;
  }
}
const carTransport = new CarTransport("Tesla", 120);
console.log(carTransport.move());
