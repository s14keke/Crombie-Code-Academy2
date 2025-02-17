// Exercise 1

interface Animal {
    name: string;
    age: number;
}

interface Dog extends Animal {
    race: string;
    domesticated: boolean;
}

const myDog: Dog = {
    name: 'Roko',
    age: 11,
    race: 'Dachshund',
    domesticated: true
}

console.log(myDog);

// Exercise 2

type CivilStatus = 'single' | 'married' | 'divorced' | 'widowed';

interface Person { 
    name: string;
    age: number;
    maritalStatus: CivilStatus;
}

type Individual = {
    name: string;
    age: number;
    maritalStatus: CivilStatus;
}

const person: Person = {   
    name: 'José',
    age: 85,
    maritalStatus: 'married'
}

console.log(person);

// Exercise 3

type Locations = {
    latitude: number;
    longitude: number;
}

type Address = {
    street: string;
    city: string;
}

type CompleteLocation = Locations & Address;

const myLocation: CompleteLocation = {
    latitude: 40.7128,
    longitude: -74.0060,
    street: 'Broadway',
    city: 'New York'
}

console.log(myLocation);

// Exercise 4

type Id = number | string;

function getId<T extends Id>(id: T): string {
    if (typeof id === 'number') {
        return `The id is numeric: ${id}`;
    } else {
        return `The id is a string: ${id}`;
    }
}

console.log(getId(123)); 
console.log(getId('hello there'));

// Exercise 5

type BinaryOperation = (a: number, b: number) => number;

const sum: BinaryOperation = (a, b) => a + b;
const multiplication: BinaryOperation = (a, b) => a * b;

function operate(op: BinaryOperation, a: number, b: number): number {
    return op(a, b);
}

console.log(sum(2, 3));
console.log(multiplication(2, 3));

// Exercise 6 

interface Translations {
    [language: string]: string;
}

const greetingTranslations: Translations = { 
    es: 'Hola',
    en: 'Hello',
    it: 'Ciao',
    de: 'Hallo',
    jp: 'こんにちは'
}

function greet(lang: string): string {
    return greetingTranslations[lang];
}

console.log(greet('es'));
console.log(greet('en'));
console.log(greet('it'));
console.log(greet('de'));
console.log(greet('jp'));

// Exercise 7

interface Product {
    name: string;
    price: number;
    discount?: number;
}

function calculateFinalPrice(product: Product): number {
    return product.price - (product.price * (product.discount || 0) / 100);
}

const product1: Product = {
    name: 't-shirt',
    price: 50,
    discount: 10
}

const product2: Product = {
    name: 'shorts',
    price: 30
}

console.log(calculateFinalPrice(product1));
console.log(calculateFinalPrice(product2));

// Exercise 8

enum roles {
    Admin = 'Admin',
    Editor = 'Editor',
    Reader = 'Reader'
}

interface User {
    name: string;
    age: number;
    role: roles;
}

function checkRole(user: User): string {
    if (user.role === 'Admin') {
        return `${user.name}, you are an admin`;
    } else if (user.role === 'Editor') {
        return `${user.name}, you are an editor`;
    } else {
        return `${user.name}, you are a reader`;
    }
}

const user1: User = {
    name: 'José',
    age: 20,
    role: roles.Admin
}

const user2: User = {
    name: 'Juan',
    age: 30,
    role: roles.Editor
}

const user3: User = {
    name: 'Ana',
    age: 25,
    role: roles.Reader
}

console.log(checkRole(user1));
console.log(checkRole(user2));
console.log(checkRole(user3));

// Exercise 9

type Coordinates = [number, number];

function showLocation(coords: Coordinates): string {
    return `Latitude: ${coords[0]}, Longitude: ${coords[1]}`;
}

const myCoords: Coordinates = [40.7128, -74.0060];

console.log(showLocation(myCoords));

// Exercise 10

class Car {
    public brand: string;
    public model: string;
    private year: number;

    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    public getInfo(): string {
        return `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`;
    }
}

const myCar = new Car('Fiat', 'Uno Fire', 2008);

console.log(myCar.getInfo());

// Crea una instancia de Coche e intenta acceder a año desde fuera de la clase. ¿Qué sucede?
// console.log(myCar.year); // Esto va a tirar un error porque 'year' es privado

// Exercise 11

interface persona {
    name: string;
    age: number;
}

interface proffesor extends persona {
    subject: string[];
    yearsOfExperience: number;
}

const professors: proffesor[] = [];

// Implementar una función que cree un profesor y lo pushee a un array.
function createProfessor(name: string, age: number, subject: string[], yearsOfExperience: number): void {
    const newProfessor: proffesor = { name, age, subject, yearsOfExperience };
    professors.push(newProfessor);
}

// Implementar una función que, dado el nombre de un profesor, actualice sus años de experiencia.
function updateExperience(name: string, newYearsOfExperience: number): void {
    const professor = professors.find(prof => prof.name === name);
    if (professor) {
        professor.yearsOfExperience = newYearsOfExperience;
        console.log(`Professor ${name} experience updated to ${newYearsOfExperience} years.`);
    } else {
        console.log(`Professor ${name} not found.`);
    }
}

// Implementar una función que agregue materias al profesor.
function addSubject(name: string, newSubject: string[]): void {
    const professor = professors.find(prof => prof.name === name);
    if (professor) {
        professor.subject.push(...newSubject);
        console.log(`Subjects added to professor ${name}.`);
    } else {
        console.log(`Professor ${name} not found.`);
    }
}

createProfessor('Marcelo', 45, ['Math', 'Physics'], 20);
createProfessor('Jorge', 50, ['Chemistry'], 25);

console.log(professors);

updateExperience('Marcelo', 22);
addSubject('Jorge', ['Biology', 'Astronomy']);

console.log(professors);

// Exercise 12
 
interface Student extends persona {
    Dni: number;
    subjects: string[];
    absences: number;
    professor: proffesor;
}

const students: Student[] = [];

// Implementar una función que cree un estudiante y le agregue un profesor
function createStudent(name: string, age: number, Dni: number, subjects: string[], absences: number, professorName: string): void {
    const professor = professors.find(prof => prof.name === professorName);
    if (professor) {
        const newStudent: Student = { name, age, Dni, subjects, absences, professor };
        students.push(newStudent);
    } else {
        console.log(`Professor ${professorName} not found.`);
    }
}

// Implementar una función que, dado el DNI de un alumno, devuelva sus faltas (Si tiene más de 20, devolver un texto mostrando que quedó libre).
function getAbsences(Dni: number): string {
    const student = students.find(stu => stu.Dni === Dni);
    if (student) {
        if (student.absences > 20) {
            return `Student ${student.name} has ${student.absences} absences and is not allowed to continue.`;
        } else {
            return `Student ${student.name} has ${student.absences} absences.`;
        }
    } else {
        return `Student with DNI ${Dni} not found.`;
    }
}

createStudent('Alicia', 20, 44345678, ['Math', 'Physics'], 15, 'Marcelo');
createStudent('Anacleto', 22, 43654321, ['Chemistry'], 25, 'Jorge');

console.log(students);

console.log(getAbsences(44345678));
console.log(getAbsences(43654321));