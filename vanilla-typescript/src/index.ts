// This declares the type upfront to be number
let id = 5
// This is the written out version from above. It is redundant to use it this way
// Either declare a value or a :type
// let id: number = 5
console.log('id: ', id);


// Basic Types
let number: number
let company: string
let isPublished: boolean 
// accepts any type
let anyType: any

let arr: number[] = []
arr.push(2)
// This is not working because type for the whole array is number
// arr.push('3')

// Tuple
let person: [number, string, boolean]
person = [2,"Tom",true]

// Tuple Array
let employee: [number, string][]
employee = [
    [1, 'kaan'],
    [2, 'jill'],
    [3, 'john'],
]

// Union
let pid: string | number
pid = 'this is an id'
pid = 2

// Enums


enum Direction1 {
    up,
    down,
    left,
    right
}
enum Direction2 {
    up = 'up',
    down = 'down',
    left = 'left',
    right = 'right'
}

// Objects
type User = {
    id: number,
    name: string
}

const user: User = {
    id: 1, 
    name: 'John'
}

// Type assertion: tells the compiler to deal with types a different way
let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number 

// Functions
function addNum(x: number, y: number): number {
    return x + y
}

// Function with no return value
function log(message: string | number): void {
    console.log(message)
}
log(234)
log("Hello")

// interfaces
interface UserInterface {
    // id is now readonly it can only be read. user1.id = 5 will throw an error
    readonly id: number,
    name: string,
    // optional values are set with a question mark at the end of the key.
    age?: number,
}

const user1: UserInterface = {
    id: 1,
    name: 'John'
}

// interface Funtions
interface MathFunc{
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y


interface PersonInterface {
    id: number,
    name: string,
    register(): string
}

// Classes
class Person implements PersonInterface {
    /* properties can have different access rules
    By default they are PUBLIC: call it any where everywhere like kaan.id = 5 will set it to 5
    PROTECTED: Access inside the class or extended version of the class
    PRIVATE: only inside the Class
    */
    id: number
    name: string

    constructor(id: number, name: string){
        this.id = id,
        this.name = name
    }

    register(){
        return `${this.name} is now registered.`
    }
}
const kaan = new Person(1, "Kaan")

// Subclasses
class Employee extends Person {
    position: string,

    constructor(id: number, name: string, position: string){
        super(id, name)
        this.position = position
    }
}
const emp = new Employee(3, "Shawn", 'Developer')


// Generics - are used to build reusable components
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

// let numArray = getArray([1,2,3,4 ])
let numArray = getArray<number>([])
// let strArray = getArray(['brad','john','jill','SHAWN'])
let strArray = getArray<string>([])