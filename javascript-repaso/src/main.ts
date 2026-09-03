// *VARIABLES*

// let
// var
// const

var userName = 'Jaime'
let age = 28

const isActive= false


const sueldo:number = 100
var sueldoActual = 20




function calcularSueldo () {
  let sueldoActual  = 10
  return sueldoActual
}


console.log('Soy de Variables: ' + calcularSueldo())






// HOISTING


x = 16

console.log('Soy de Hoisting: ' + x)

var x








// TEMPLATE STRINGS

console.log(`Soy de Template Strings: ${sueldoActual}`)





// Object Literals | JSON | Objetos

const student = {
  name: 'Jaime',
  age: 25,
  isActive: true,
  hobbies: ['Futbol', 'Hockey', 'Cocinar']
}

console.log(`Soy de Object Literals: \n`, student)




// INTERFACES

interface student {
  name: string,
  numControl: number,
  age: number
}


const student1: student = {
  name: 'John',
  numControl: 23100202,
  age: 25
}

console.log('Soy de Interfaces: \n', student1)





// 
