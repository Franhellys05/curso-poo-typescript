
export class MyDate {
  year: number;
   month: number;
  private _day: number;

   // siempre hay que inicializar la clase
   constructor(year: number, month: number, day: number){
     this.year = year;
     this.month = month;
     this._day = day;
   }

   printFormat(): string {
    const day = this.addpadding (this._day);
    return `${day}/${this.month}/${this.year}`;
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
       this.month += amount;
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

 }

 const myDate = new MyDate (2002,1,5);
 console.log ('2002', myDate.isLeapYear);

 //console.log(myDate.printFormat());

 //console.log (myDate.day);
 //console.log (myDate.isLeapYear);

 const myDate2 = new MyDate (2000, 8, 10);
 console.log ('2000', myDate2.isLeapYear);

 const myDate3 = new MyDate (2004, 9, 7);
 console.log ('2004', myDate2.isLeapYear);

 const myDate41 = new MyDate (2005, 9, 8);
 console.log ('2005', myDate2.isLeapYear);


