//Task 1
type Product = {
    name: string,
    price: number,
    inStock: boolean
}
const products: Product[] = [
    { name: "Laptop", price: 1200, inStock: true },
    { name: "Phone", price: 800, inStock: false },
    { name: "Tablet", price: 500, inStock: true }
]
const avaliableProducts = products.filter(p => p.inStock)
const totalPrice = avaliableProducts.reduce((sum, p) => sum + p.price, 0)
console.log("В наявності:", avaliableProducts)
console.log("Загалом", totalPrice)
//Task 2 
type SearchEven = {
    number: number
}
const numbers: SearchEven[] = [
    { number: 12 },
    { number: 16 },
    { number: 22 },
    { number: 31 }
]
const searchEven = numbers.filter(num => num.number % 2 === 0)
console.log("Парні числа:", searchEven)
//Task 3
type StringArray = {
    stringSentences: string
}
const lengthString: StringArray[] = [
    {stringSentences:"Cat"},
    {stringSentences:"Phone"},
    {stringSentences:"MineCraft"},
    {stringSentences:"English"},
    {stringSentences:"Apple"}

]
const searchLength = lengthString.filter(sentences => sentences.stringSentences.length > 5)
.map(sen => sen.stringSentences)
console.log("Слова:", searchLength )
//Task 4
type User = {
    name:string,
    age:number
}
const userInfo : User[] = [
    {name:"Maria" , age:16},
    {name:"Victoria", age:19},
    {name:"Mango", age:25},
    {name:"Niki" , age:9}
]
const filteredEighteenYear = userInfo.filter(eighteen => eighteen.age > 18)
.map(years => years.age)
console.log("Користувачі 18 років", filteredEighteenYear)
//Task 5
type Goods = {
    name:string , 
    price:number,
    category:string
}
const  goodsInfo : Goods[]  = [
    {name:"Apple" , price:10 , category:"fruit"},
    {name:"English book", price:22 , category:"Study"},
    {name:"Grape" , price:14 , category:"fruit"},
    {name:"Math book", price:24 , category:"Study"}
]
const categoryFruit = goodsInfo.filter(study => study.category === "fruit")
const totalFruit = categoryFruit.reduce((sum,item) => sum + item.price , 0)
console.log("Total fruits:" , totalFruit)
//Task 6 
type Num = { 
    value: number, 
    isEven: boolean 
}
const numbersArray = [5,6,7,12,45,19]
const objectNum : Num[] =  numbersArray.map(num => ({
    value:num , 
    isEven : num % 2 === 0
}))
console.log(objectNum)