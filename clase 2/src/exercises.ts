// Ejercicio 2

type CivilStatus = 'single' | 'married' | 'divorced' | 'widowed';

interface Person { 
    name: string;
    age: number;
    civilStatus: CivilStatus;
}

type Persona = {
name: string;
age: number;
civilStatus: CivilStatus;
}

const person: Person = {   
    name: 'gime',
    age: 76,
    civilStatus: 'married'
}

console.log(person);

// Ejercicio 3

type Ubicacion = {
    latitud: number;
    longitud: number;
}

type Direccion = {
    calle: string;
    ciudad: string;
}

type UbicacionCompleta = Ubicacion & Direccion;

const miUbicacion: UbicacionCompleta = {
    latitud: 40.7128,
    longitud: -74.0060,
    calle: 'Hipolito Yrigoyen',
    ciudad: 'Santo Tomé'
}

console.log(miUbicacion);

// Ejercicio 4

type Id = number | string;

function getId<T extends Id>(id: T):string {
    if (typeof id === 'number') {
        return `El id es numérico: ${id}`;
    } else {
        return `El id es un string: ${id}`;
    }
}

console.log(getId(123)); 
console.log (getId('hola k ase'));

// Ejercicio 5

type OperacionBinaria = (a: number, b: number) => number;

const suma: OperacionBinaria = (a, b) => a + b;
const multiplicacion: OperacionBinaria = (a, b) => a * b;

function operar(op: OperacionBinaria, a: number, b: number): number {
    return op(a, b);
}

console.log(suma(2, 3));
console.log(multiplicacion(2, 3));

// Ejercicio 6 

interface Traducciones {
    [language: string]: string;
}

const traduccionesSaludo: Traducciones = { 
    es: 'Hola',
    en: 'Hello',
    it: 'Ciao',
    de: 'Hallo',
    jp: 'こんにちは'
}

function saludar(lang: string): string {
    return traduccionesSaludo[lang];
}

console.log(saludar('es'));
console.log(saludar('en'));
console.log(saludar('it'));
console.log(saludar('de'));
console.log(saludar('jp'));