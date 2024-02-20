// creamos una clase
export class Animal {
 // se realiza el constructor
  constructor (public animalname:string ) {}
//funciones:
    move (){
      console.log ('moving along!');
    }

    greeting (){
      return `Hello, I'm ${this.animalname}`
    }
}

export class Dog extends Animal{
  //extender propiedades
  constructor(
   nameDog: string,
    public owner: string
    ) {
    super(nameDog);
  }

  //extender un metodo
   woof (times: number): void { //preguntar que sginifica el void cuando no retorna nada
    for (let index = 0; index < times; index++) {
          console.log ('worf!')

    }
   }
}

//instancia o objeto de un ¨animal¨
const peach = new Animal ('peach');
peach.move();
console.log (peach.greeting());

const Zeus = new Dog ('Zeus', 'Fran');
peach.move();
console.log (Zeus.greeting());
Zeus.woof(5);
console.log( '¿Quien es el dueño de Zeus?, es:', Zeus.owner);

