
export class Animal {

   constructor ( protected animalname:string ) {}
 //funciones:
     move (){
       console.log ('moving along!');
     }

     greeting (){
       return `Hello, I'm ${this.animalname}`
     }

     protected doSomenthing (){
      console.log ('dooo');
     }
 }

 export class Dog extends Animal{

   constructor(
    animalname: string,
     public owner: string
     ) {
     super(animalname);
   }


    woof (times: number): void {
     for (let index = 0; index < times; index++) {
           console.log ('worf!')
     }

    this.doSomenthing();
    }

    move(){
      console.log ('moving as a dog')
      super.move();
    }

 }


 const Zeus = new Dog ('Zeus', 'Fran');
 Zeus.woof(1);
 console.log( '¿Quien es el dueño de Zeus?, es:', Zeus.owner);

  Zeus.move();

 //Zeus.animalname='otro nombre';
