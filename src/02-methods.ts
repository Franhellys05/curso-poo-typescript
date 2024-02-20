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

  printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`;
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
console.log (myDate.printFormat());
myDate.add (3, 'days');
console.log (myDate.printFormat());
myDate.add (5, 'months');
console.log (myDate.printFormat());
myDate.add (8, 'years');
console.log (myDate.printFormat());
console.log(myDate.day);
console.log(myDate.month);
console.log(myDate.year);
