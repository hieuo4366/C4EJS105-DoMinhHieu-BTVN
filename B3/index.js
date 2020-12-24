// Bài tập video

//after 2
// let movie = ['avenger','transformer','x-men'];
// console.log(movie);

//after4
// let newItem = prompt('Thêm 1 bộ phim bạn yêu thích');
// let movie = ['avenger','transformer','x-men'];
// movie.push(newItem);
// console.log(movie);

//after 5
// let movie = ['avenger','transformer','x-men'];
// let i = prompt('Mời bạn nhập số thứ tự phim :')
// console.log(movie[i]);

//after 6
//1.
// let movie = ['avenger','transformer','x-men'];
// let movieTitle = prompt('Mời bạn nhập tên phim');
// movie[0] = movieTitle;
// console.log(movie);
//2.
// let movie = ['avenger','transformer','x-men'];
// let movieTitle = prompt('Mời bạn nhập tên phim');
// let i = prompt('Mời bạn nhập vị trí thay thế');
// movie[i] = movieTitle;
// console.log(movie);

//after 7
//1.
// let movie = ['avenger','transformer','x-men'];
// let i = prompt('Mời bạn nhập vị trí xóa');
// movie.splice(i,1);
// console.log(movie);
//2.
// let movie = ['avenger','transformer','x-men','x-men 2','x-men 3'];
// let i = prompt('Mời bạn nhập vị trí xóa');
// let n = prompt('Mời bạn nhập số phim cần xóa');
// movie.splice(i,n);
// console.log(movie);

//after 10
//1.
// let movie = ['avenger','transformer','x-men','x-men 2','x-men 3'];
// for(let i = 0;i<movie.length;i++){
//     console.log(movie[i]);
// }
//2.
// let movie = ['avenger','transformer','x-men','x-men 2','x-men 3'];
// for(let i = 0;i<movie.length/2;i++){
//     console.log(movie[i]);
// }
//3.
// let movie = ['Batman', 'Up', 'Attack on titans', 'My boss my hero'];
// for(let i = 0;i<movie.length;i++){
//     console.log(`${i}.${movie[i]}`);
// }
//4.
// let movie = ['Batman', 'Up', 'Attack on titans', 'My boss my hero'];
// for(let i = 0;i<movie.length;i++){
//     movie[i] = movie[i].toLowerCase();
//     console.log(`${i}.${movie[i]}`);
// }


//after 14
// let name ;
// while (true){
//     name = prompt('Register a name !');
//     if(name.length < 15){
//         alert('Valid !');
//         break;
//     }else{
//         alert('Too long !');
//     }
// }

// while (true) {
//     let answer = Number(prompt('How many legs does a spider have? \n 1. None \n 2. 4 legs \n 3. 8 legs \n 4. 12 legs'));
//     if (!answer) {
//         alert('Plz re-type')
//     } else {
//         while(true){
//             if(answer == 1 ||answer == 2 || answer == 4 ){
//                 alert('Good luck next time');
//             }else{
//                 alert('Bravo, you are correct');
//                 break;
//             }
//         }
//     break;     
//     }
// }

// Bt Thêm
//a.
// let number = prompt('Nhập n số nguyên ');
// let array = number.split("");
// array.sort(function(a,b){
//     return a -b;
// });
// for(i=0;i<array.length;i++){
//     console.log(array[i]);
// }
//b.
// let number = prompt('Nhập n số nguyên ');
// let array = number.split("");
// array.sort(function (a, b) {
//     return a - b;

// });
// for (i = 0; i < array.length; i++) {
//     if (array[i] % 2 == 0) {
//         console.log(array[i]);
//     } 
// }
//c.





//Homework

// Bài 1
// let a = 6, b = 5;
// console.log(a, b); // 6 5
//Ex1: swapping method 1 using temporary variable
// let temp = a;
// a = b;
// b = temp;
// console.log(a, b); // 5 6
//Ex2: swapping not using temporary variable
// [a, b] = [b, a];
// console.log(a, b); // 6 5



// Bài 2 - 3
// let sallute = 'Hello beauty there';
// let a = sallute.split(" ");
// console.log(a);
// console.log(...a);

//Bài 4
// let item = ['Jeans', 'T-shirt', 'Socks'];
// let newItem, updateItem;
// while (true) {
//     let admin = prompt('what do you want (C,R,U,D) ?');
//     if (admin == 'C') {
//         newItem = prompt('Enter new item ');
//         item.push(newItem);
//         alert('Done');
//     }
//     else if (admin == 'R') {
//         let tempList = [];
//         let tempItem ;
//         for (i = 0; i < item.length; i++) {
//            tempItem =`${i + 1}.${item[i]}`;
//            tempList.push(tempItem);
//         }
//         tempList = tempList.join('\n');// mảng
//         alert(`There current item are : \n${tempList}`);
//     }else if (admin == 'U') {
//         let i =Number(prompt('Enter position you want to update'));
//         let updateItem = prompt('Enter a new item');
//         item[i] = updateItem;
//         alert('Done');
//     }
//     else if (admin == 'D') {
//         let i =Number(prompt('Enter position you want to delete'));
//         item.splice(i , 1);
//         alert('Done');
//     }
//     else{
//         alert('Comman is not support')
//     }

// }






//BÀI 5
// let sum = 0;
// let temp = [];
// let number = prompt('Enter a sequence of number , seperate by commas(,)');
// temp = number.split(',');
// for(i =0;i<temp.length;i++){
//     sum += Number(temp[i]);
// }
// alert(`sum is ${sum}`);


//Bài 6
// let min = 0;
// let temp = [];
// let number = prompt('Enter a sequence of number , seperate by commas(,)');
// temp = number.split(',');
// for(i =0;i<temp.length;i++){
//     Number(temp[i]) < min;
//     min = temp[i];
// }
// alert(`min is ${min}`);


//Bài 7
// const arrayNumber = [3, 4, 6, -9, 10, -88, 2];
// let input = prompt('Enter a number');
// input = input.split();
// for(i=0;i<arrayNumber.length;i++){
//     if(input == arrayNumber[i]){
//         alert(`${input} is FOUND in my array at ${i+1}`);
//     }
//     else{
//         alert(`${input} is not FOUND in my array `);
//     }
// }

//BÀi 8
// let myFlock = [5, 7, 300, 90, 24, 50, 75];
// console.log('Hi ,Here is my sheep size :');
// console.log(...myFlock);
// console.log('Now the biggest size is' + " " + Math.max(...myFlock) + " " + 'shave it');

// let biggestOne = Math.max(...myFlock);
// biggestOne = myFlock.indexOf(biggestOne);
// myFlock[biggestOne] = 8;
// console.log('Ater shearing here is my flock');
// console.log(...myFlock);

// let month = 4;
// for (i = 0; i < month; i++) {
//     console.log(`After ${i + 1} month`);
//     console.log('sheep is bigger , here their size ');
//     for (i = 0; i < myFlock.length; i++) {
//         myFlock[i] = Number(myFlock[i] + 50);
//     }
//     console.log(...myFlock);
//     console.log('Now the biggest size is' + " " + Math.max(...myFlock) + " " + 'shave it');

//     let biggestOne = Math.max(...myFlock);
//     biggestOne = myFlock.indexOf(biggestOne);
//     myFlock[biggestOne] = 8;
//     console.log('Ater shearing here is my flock');
//     console.log(...myFlock);
// }
// for (i = 0; i < month; i++) {
//     console.log(`After ${i + 2} month`);
//     console.log('sheep is bigger , here their size ');
//     for (i = 0; i < myFlock.length; i++) {
//         myFlock[i] = Number(myFlock[i] + 50);
//     }
//     console.log(...myFlock);
//     console.log('Now the biggest size is' + " " + Math.max(...myFlock) + " " + 'shave it');

//     let biggestOne = Math.max(...myFlock);
//     biggestOne = myFlock.indexOf(biggestOne);
//     myFlock[biggestOne] = 8;
//     console.log('Ater shearing here is my flock');
//     console.log(...myFlock);

//     let sum = 0, price = 2;
//     for (i = 0; i < myFlock.length; i++) {
//         sum += Number(myFlock[i]);
//     }

//     console.log(`total size ${sum}`);
//     console.log(`money is ${sum}*${price} = ${sum * price}`);
// }

// Bài 10
// let name = prompt('enter a sequence of names');
// let temp = name.split(',');
// let temp1 = temp.map(x => `<${x}>`);
// alert(`${temp} => ${temp1}`) ;

//Bài 11
let number = prompt('enter a sequence of number');
let temp = number.split(',');

let temp1 = temp.filter(x => Number(x)%2 != 0);
alert(`${temp} => ${temp1}`);














