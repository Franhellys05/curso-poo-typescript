
export class MyDate {
  year: number;
  private _month: number;
  private _day: number;

   // siempre hay que inicializar la clase
   constructor(year: number, month: number, day: number){
     this.year = year;
     this._month = month;
     this._day = day;
   }

   printFormat(): string {
    const day = this.addpadding (this._day);
    const month = this.addpadding (this._month)
    return `${day}/${month}/${this.year}`;
  }

   // se crea un metodo en donde al atributo value se le agrega un 0 si es menor a 10

   private addpadding (value: number) {
    if (value < 10 ){
      return `0${value}` ;
    }
      return `${value} `;
   }




  add(amount: number, type: 'days' | 'months' | 'years'){
     if( type === 'days'){
        this._day += amount;
     }
     if( type === 'months'){
       this._month += amount;
   }
   if( type === 'years'){
     this.year += amount;
 }
   }

   //se comporta como una propiedad

  get day(){
    return this._day;
  }

  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return true;
    if (this.year %100 === 0)return false;
     return this.year % 4 === 0;
  }

  get month(){
    return this._month;
  }

  set month (newValue:number){

    if (newValue >= 1 && newValue <= 12){
    this._month = newValue;
    }
    else {
      throw new Error ('month out of range');
    }
  }
 }

 const myDate = new MyDate (2002,1,5);
 console.log(myDate.printFormat());
 myDate.month= 11;
 console.log ('run', myDate.month);

 myDate.month = 13;
 console.log ('esto no deberia de aparecer ',myDate.month);






