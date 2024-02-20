// esto es una instancia:

const date = new Date ();
date.getHours();
date.getTime();
date.toISOString();

const date2 = new Date (2002, 0, 5); // 0 enero, 11 dic
date.getHours();
date.getTime();
date.toISOString();

console.log(date);
console.log(date2);


//esto es una clase

export class MyDate {
  year: number;
  month: number;
  day: number;

  // siempre hay que inicializar la clase
  constructor(year: number, month: number, day: number){
    this.year = year;
    this.month = month;
    this.day = day;
  }
}

//instancia de la clase
// se le envie los parametros del constructor
const myDate = new MyDate(2021, 3, 13);
console.log(myDate);


//otra clase

class Persona {
  nombre: string;
  edad: number;
  sexo: string;

  //constructor para inicializar

  constructor (nombre: string, edad: number, sexo: string){
    this.nombre = nombre;
    this.edad= edad;
    this.sexo= sexo;
  }

}

const persona = new Persona ("Brandon", 25, "masculino");
console.log (persona.nombre); //el punto permite acceder a cualquier parte del objetico PUBLICO
