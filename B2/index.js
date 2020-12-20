//Bài 1: 
//1, var và const trong JS là : Chung đều là biến.
//const: có nghĩa là hằng số ,biến chỉ được khai báo 1 lần và không thể thay đổi
//var  :Khai báo lại 1 biến, sẽ làm thay đổi biến đó đã khai báo trước đó.
//2, Sự khác nhau giữa let và var là :
// var : khi khai báo lại 1 biến trong 1 khối {} sẽ làm thay đổi toàn bộ giá trị biến đó, đã khai báo trước đấy
// let : khi khai báo lại 1 biến trong 1 khối {} sẽ không làm thay đổi giá trị biến đó, đã khai báo bên ngoài {}
//3, Sự khác biệt giữa let và const là :
// let có thể được khai báo lại nhưng không dùng lại 'let' khi khai báo lại 1 biến , const thì không thể khai báo lại.
//4, const: dùng khi khai báo 1 hằng số không đổi , var dùng để khai báo và thay đổi biến đã khai báo trước đó trong toàn cục,
//let dùng để khai báo biến và thay đổi biến trong khu cục.

// // Bài 2:
// 1, Boolean là hàm chỉ trả về giá trị "true" hoặc "false"
// 2, Trả về đúng hoặc sai

// Bài 3 :
// a,
// for(let i=0;i<8;i++){
//     console.log(i);
// }
// b,
// let x = prompt("Enter a numer");
// for(i=0;i<x;i++){
//     console.log(i);
// }
// c,
// let x = prompt("Enter n :");
// for(i=3;i<x;i++){
//     console.log(i);
// }
// d,
// let n = prompt("Enter n");
// let c = prompt("Enter c");
// for (c;c<n;c++){
//     console.log(c);
// }
// e,
// let n = prompt("Enter n");
// let c = prompt("Enter c");
// c = Number(c);
// n = Number(n);
// for (c;c<n;c+=3){
//     console.log(c);
// }
//f,
// let n = prompt("Enter n");
// let c = prompt("Enter c");
// let s = prompt("Enter s");
// c = Number(c);
// n = Number(n);
// s = Number(s);
// for (s=c;s<n;s+=4){
//     console.log(s);
// }

// Bài 4:
// let x = prompt("Enter a number");
// let n = 1;
// x=Number(x);
// for (i = 1; i <= x; i++) {
//     n = n * i;
// }
// alert("the factory of " + x + " is : " + n);

//Bài 5 :
// let a = prompt("How old are you ?");
// a = Number(a);
// if(a<14){
//     alert("Bạn không đủ tuổi")
// }else{
//     alert("Enjoy!");
// }

// Bài 6 :
// let a = prompt("Enter a number :");
// a=Number(a);
// if(a<9/2){
//     alert("Lower half of 9");
// }else{
//     alert("Higher half of 9");
// }

// Bài 7 :
// let n=prompt("n");
// let x=prompt("x");
// n=Number(n);
// x=Number(x);
// if(x<(n/2)){
//     alert(x +" "+ "is in lower half of"+" "+ n);
// }else{
//     alert(x +" "+ "is in higher half of"+" "+ n);
// }

// Bài 8 :
// let x = prompt("x");
// x=Number(x);
// if(x%2==0){
//     alert(x+" " +"is an odd number");
// }else{
//     alert(x+" "+"is an even number");
// }

// Bài 10 :
let a = prompt("Your weight in kg?");
a=parseFloat(a);
let b = prompt("Your height in cm?");
b=parseFloat(b);
i = b/100;
i=parseFloat(i);
c=a/(i*i);
c = parseFloat(c).toFixed(1);
if(c<16){
    alert("Your BMI is" +c);
    alert("You are overweight");
}else if(c>16 && c<18.5){
    alert("Your BMI is" +c);
    alert("You are underweight");
}else if(c<25 && c>18.5){
    alert("Your BMI is" +c);
    alert("You are normal");
}else if(c>25 && c<30){
    alert("Your BMI is" +c);
    alert("You are overweight");
}else{
    alert("Your BMI is" +c);
    alert("You are obese");
}






