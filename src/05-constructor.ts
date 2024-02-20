

export class MyDate {
  year: number;
   month: number;
  private day: number;

   // siempre hay que inicializar la clase
   constructor(year: number, month: number, day: number){
     this.year = year;
     this.month = month;
     this.day = day;
   }

   printFormat(): string {
    const day = this.addpadding (this.day);
    const month = this.addpadding (this.month);
    return `${day}/${month}/${this.year}`;
  }

   // se crea un metodo en donde al atributo value se le agrega un 0 si es menor a 10
   private addpadding (value: number) {
    if (value < 10 ){
      return `0${value}` ;
    }
      return `${value} `;
   }

    getDay(){
      return this.addpadding(this.day);
    }

    getmonth() {
      return this.addpadding(this.month);
    }

  add(amount: number, type: 'days' | 'months' | 'years'){
     if( type === 'days'){
        this.day += amount;
     }
     if( type === 'months'){
       this.month += amount;
   }
   if( type === 'years'){
     this.year += amount;
 }
   }


 }

 const myDate = new MyDate(2002,1,5);
 console.log(myDate.printFormat());
 console.log (myDate.getDay());
 console.log (myDate.getmonth());



