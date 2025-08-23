var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.introduce = function () {
        return "Hello , my name is ".concat(this.name, " and I am ").concat(this.age, " years old");
    };
    return Person;
}());
var person = new Person("John", 25);
console.log(person.introduce());
var Rectangle = (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return 1 / 2 * this.width * this.height;
    };
    return Rectangle;
}());
var rectangle = new Rectangle(5, 6);
console.log(rectangle.getArea());
var Car = (function () {
    function Car() {
        this.arrayBrand = ["Tesla", "Toyota", "BMW", "Lamborgini"];
        this.arrayAge = [2020, 2021, 2022, 2023, 2024, 2025];
    }
    Car.prototype.randomCar = function () {
        var index = Math.floor(Math.random() * this.arrayBrand.length);
        return this.arrayBrand[index];
    };
    Car.prototype.randomYearCar = function () {
        var index = Math.floor(Math.random() * this.arrayAge.length);
        return this.arrayAge[index];
    };
    Car.prototype.drive = function () {
        return "Driving a ".concat(this.randomCar(), "  from ").concat(this.randomYearCar());
    };
    return Car;
}());
var car = new Car();
console.log(car.drive());
var Animal = (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.makeSound = function () {
        return "".concat(this.name, " makes a sound");
    };
    return Animal;
}());
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.makeSound = function () {
        return "".concat(this.name, " Woof");
    };
    return Dog;
}(Animal));
var Cat = (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.makeSound = function () {
        return "".concat(this.name, " Meow");
    };
    return Cat;
}(Animal));
var dog = new Dog("Rex");
console.log(dog.makeSound());
var cat = new Cat("Baron");
console.log(cat.makeSound());
var Employee = (function () {
    function Employee(name, salary) {
        this.name = name,
            this.salary = salary;
    }
    Employee.prototype.getDetails = function () {
        return "".concat(this.name, " earns ").concat(this.salary);
    };
    return Employee;
}());
var Maneger = (function (_super) {
    __extends(Maneger, _super);
    function Maneger(name, salary, departament) {
        var _this = _super.call(this, name, salary) || this;
        _this.departament = departament;
        return _this;
    }
    Maneger.prototype.getDetails = function () {
        return "".concat(this.name, " earns ").concat(this.salary, " and manages ").concat(this.departament);
    };
    return Maneger;
}(Employee));
var employee = new Employee("Rebeca", 5000);
console.log(employee.getDetails());
var manage = new Maneger("Bob", 10000, "IT");
console.log(manage);
var BankAccount = (function () {
    function BankAccount(balance) {
        this.balance = balance;
    }
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    BankAccount.prototype.withdraw = function (amount) {
        if (amount > this.balance) {
            return "Мало коштів";
        }
        else {
            this.balance -= amount;
        }
    };
    BankAccount.prototype.getBalance = function () {
        return this.balance;
    };
    return BankAccount;
}());
var account = new BankAccount(1000);
account.deposit(300);
console.log(account.getBalance());
console.log(account.withdraw(2000));
account.withdraw(300);
console.log(account.getBalance());
var UserPassword = (function () {
    function UserPassword(password) {
        if (password.length < 8) {
            throw new Error("Password must be at least 8 characters");
        }
        this.password = password;
    }
    UserPassword.prototype.checkPassword = function (input) {
        return input === this.password;
    };
    return UserPassword;
}());
var user = new UserPassword("123456789");
console.log(user.checkPassword("1234"));
console.log(user.checkPassword("123456789"));
var Circle = (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return 3.14 * this.radius * this.radius;
    };
    return Circle;
}());
var Square = (function () {
    function Square(side) {
        this.side = side;
    }
    Square.prototype.getArea = function () {
        return this.side * this.side;
    };
    return Square;
}());
var circle = new Circle(6);
console.log(circle.getArea());
var square = new Square(4);
console.log(square.getArea());
var Transport = (function () {
    function Transport() {
    }
    return Transport;
}());
var CarTransport = (function (_super) {
    __extends(CarTransport, _super);
    function CarTransport(name, speed) {
        var _this = _super.call(this) || this;
        _this.name = name,
            _this.speed = speed;
        return _this;
    }
    CarTransport.prototype.move = function () {
        return "Move ".concat(this.name, " , speed ").concat(this.speed);
    };
    return CarTransport;
}(Transport));
var carTransport = new CarTransport("Tesla", 120);
console.log(carTransport.move());
//# sourceMappingURL=ClassTasks.js.map