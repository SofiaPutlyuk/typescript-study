var products = [
    { name: "Laptop", price: 1200, inStock: true },
    { name: "Phone", price: 800, inStock: false },
    { name: "Tablet", price: 500, inStock: true }
];
var avaliableProducts = products.filter(function (p) { return p.inStock; });
var totalPrice = avaliableProducts.reduce(function (sum, p) { return sum + p.price; }, 0);
console.log("В наявності:", avaliableProducts);
console.log("Загалом", totalPrice);
var numbers = [
    { number: 12 },
    { number: 16 },
    { number: 22 },
    { number: 31 }
];
var searchEven = numbers.filter(function (num) { return num.number % 2 === 0; });
console.log("Парні числа:", searchEven);
var lengthString = [
    { stringSentences: "Cat" },
    { stringSentences: "Phone" },
    { stringSentences: "MineCraft" },
    { stringSentences: "English" },
    { stringSentences: "Apple" }
];
var searchLength = lengthString.filter(function (sentences) { return sentences.stringSentences.length > 5; })
    .map(function (sen) { return sen.stringSentences; });
console.log("Слова:", searchLength);
var userInfo = [
    { name: "Maria", age: 16 },
    { name: "Victoria", age: 19 },
    { name: "Mango", age: 25 },
    { name: "Niki", age: 9 }
];
var filteredEighteenYear = userInfo.filter(function (eighteen) { return eighteen.age > 18; })
    .map(function (years) { return years.age; });
console.log("Користувачі 18 років", filteredEighteenYear);
var goodsInfo = [
    { name: "Apple", price: 10, category: "fruit" },
    { name: "English book", price: 22, category: "Study" },
    { name: "Grape", price: 14, category: "fruit" },
    { name: "Math book", price: 24, category: "Study" }
];
var categoryFruit = goodsInfo.filter(function (study) { return study.category === "fruit"; });
var totalFruit = categoryFruit.reduce(function (sum, item) { return sum + item.price; }, 0);
console.log("Total fruits:", totalFruit);
var numbersArray = [5, 6, 7, 12, 45, 19];
var objectNum = numbersArray.map(function (num) { return ({
    value: num,
    isEven: num % 2 === 0
}); });
console.log(objectNum);
//# sourceMappingURL=arrayTasks.js.map