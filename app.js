
/// DO This Problem Solv////////////////////////////////////

/*
challenze Requirements:
use arithmetic operators |+, -, * , 1, %) to
eNewlate total expenses by summing multiple expenses such as rent,
 moceries transport, entertaenment.
Apply tax deduetion (eig 10% of income )
caleulate savins percentane (e. n, 20%, of remaining balanee).
update console outpat to display the new caleulation
* Expected console output:
- Personal Budget tracker usen: John Doe
*Total income : $ 5000
*Total expenses: $2300
*Tex Deducted (10% ) ; $ 500
*Remaining Balance , 2200
*savings (20% of Bldance); 440

*/
/// Solv This______________________ ___________________________ ___




let use=("john Done");

let inc=("5000");

let  exp=(2300);

let exps=("return, transport, entertanment = $");

let detex=(inc*0.1);

let wtex=(inc - detex);

let all=(exp+detex);


let bal=( wtex - exp);

let sav=(bal*0.2);



document.writeln("user : " + use + "<br>");

document.writeln("Total Income : $" + inc + "<br>");

document.writeln(exps + exp  + " (expenses) " + " <br>");

document.writeln( "Tex Deducted : $" + detex + "<br>");

document.writeln( " All expenses : $" + all + "<br>");

document.writeln("Remaining Balance : $" +bal+ "<br>")

document.writeln("savings balance : $" + sav)
