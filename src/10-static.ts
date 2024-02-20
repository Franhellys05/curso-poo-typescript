console.log (Math.PI);
console.log (Math.max(1,2,2,8,1,0));

class MyMath {
 static readonly PI = 3.14;

 //La función reduce compara el valor actual del máximo (max) con el elemento actual del array (item).
 //Si max es mayor o igual que item, se devuelve max. De lo contrario, se devuelve item.

 static max(...numbers: number []) {
        console.log (numbers);
        return numbers.reduce ((max, item) => max >= item ? max: item);
 }
}

console.log ('MyMah.PI', MyMath.PI);
console.log ('MyMath.max', MyMath.max(11,2,1,1222,9));

const numbers = [11,2,1,1222,9,3000];
console.log ('MyMath,max', MyMath.max(...numbers));

console.log ('MyMath.max', MyMath.max(-1, -2, -9));
