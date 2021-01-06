//1.1
// let randomNumber = Math.random();
// console.log(randomNumber.toFixed(2));
//1.2
// let myArray =['com','bun','ca','thit'];
// let randomPick = myArray[Math.floor(Math.random()*myArray.length)];
// console.log(randomPick);
//1.3 - 1.8

// const listQuestion = [
//     q1 = {
//         question: ('Mot cong mot bang may ?'),
//         ans: [1, 2, 3, 4],
//         ans1: false,
//         ans2: true,
//         ans3: false,
//         ans4: false,
//     },
//     q2 = {
//         question: ('Hai cong hai bang may?'),
//         ans: [4, 5, 6, 7],
//         ans1: true,
//         ans2: false,
//         ans3: false,
//         ans4: false,
//     },
//     q3 = {
//         question: ('Ba cong ba bang may?'),
//         ans: [6, 7, 8, 9],
//         ans1: true,
//         ans2: false,
//         ans3: false,
//         ans4: false,
//     },
//     q4 = {
//         question: ('Bon cong bon bang may?'),
//         ans: [8, 9, 10, 11],
//         ans1: true,
//         ans2: false,
//         ans3: false,
//         ans4: false,
//     },
// ];

// let point = 0;
// while (true) {
//     if (listQuestion.length == 0) {
//         alert('Da het cau hoi moi ban choi lai sau');
//         break;
//     } else {
//         let randomQues = listQuestion[Math.floor(Math.random() * (listQuestion.length - 1))];
//         while (true) {
//             let answer = Number(prompt(`${listQuestion[randomQues].question}
//             1.${listQuestion[randomQues].ans[0]}
//             2.${listQuestion[randomQues].ans[1]}
//             3.${listQuestion[randomQues].ans[2]}
//             4.${listQuestion[randomQues].ans[3]}`));
//             if (listQuestion[randomQues].ans[answer - 1] == undefined || listQuestion[randomQues].ans[answer - 1] == null) {
//                 alert('Cau tra loi khong hop le');
//             } else if (listQuestion[randomQues][`c${answer}`] == true) {
//                 alert('Ban da tra loi dung');
//                 point++;
//                 break;
//             } else {
//                 alert('Ban da tra loi sai');
//                 break;
//             }

//         }
//         listQuestion.splice(randomQues, 1);
//     }
// }
// alert(`Diem cua ban la:${point}/${listQuestion.length}`);

//2.1
// const array = ['to', 'be', 'that', 'of', 'elon', 'to', 'this', 'now', 'back', 'cool', 'hey', 'love', 
//     'of', 'life', 'that', 'rain', 'summer', 'color', 'now', 'of', 'hat', 'late', 'sorry', 'my', 'team'];
// let countData = [];
// for(let i=0;i<array.length;i++){
//     const arrayNew = array[i];
//     if(countData[arrayNew]){
//         countData[arrayNew]++;
//     }else{
//         countData[arrayNew]=1;
//     }
// }
// console.log(countData);

//2.2
const inventory = [
    {
        name: 'HP Envy 13aq',
        price: 21000,
        brand: 'HP',
        quantity: 5,
    },
    {
        name: 'Dell XPS 9370',
        price: 30000,
        brand: 'Dell',
        quantity: 1,
    },
    {
        name: 'Dell Inspiron 3567',
        price: 9300,
        brand: 'Dell',
        quantity: 12,
    },
    {
        name: 'Dell Latitude E5450',
        price: 8600,
        brand: 'Dell',
        quantity: 2,
    },

    {
        name: 'Asus Zenbook',
        brand: 'Asus',
        price: 20000,
        quantity: 4,
    },
    {
        name: 'HP Pavilion',
        brand: 'HP',
        price: 14000,
        quantity: 7,
    },]

// let inventoryByBrand = {};
// for(i=0;i<inventory.length;i++){
//     let brand = inventory[i].brand.toLowerCase();
//     if(inventoryByBrand[brand]== null){
//         inventoryByBrand[brand]=[];
//         inventoryByBrand[brand].push(inventory[i]);
//     }else{
//         inventoryByBrand[brand].push(inventory[i]);
//     }
// }
// console.log(inventoryByBrand);

//2.4
// let usrBrand = prompt('Which brand do you want to check?');
// if (inventoryByBrand[usrBrand.toLowerCase()] == null) {
//     alert('This brand is unavailable in your inventory');
// } else {
//     let brandCount = 0;
//     for (i in inventoryByBrand) {
//         if (String(i).toLowerCase() == usrBrand.toLowerCase()) {
//             brandCount = brandCount + inventoryByBrand[i].length;
//         }
//     }
//     alert(`There are ${brandCount} generations of '${usrBrand}' in your inventory`);
// }
//2.5
// let usrBrand = prompt('Which brand do you want to check?').toLowerCase();
// let brandItemDisplay = '';
// if (inventoryByBrand[usrBrand] == null) {
//     alert('This brand is unavailable in your inventory');
// } else {
//     let brandCount = 0;
//     for (i in inventoryByBrand) {
//         if (String(i).toLowerCase() == usrBrand) {
//             brandCount = brandCount + inventoryByBrand[i].length;
//             for (i2=0; i2<inventoryByBrand[i].length; i2++) {
//                 brandItemDisplay = brandItemDisplay + `${inventoryByBrand[i][i2].name}\n`
//             }
//         }
//     }
//     alert(`There are ${brandCount} generations of '${usrBrand}' in your inventory

// ${brandItemDisplay}`);
// }
//2.6 & 2.7
let usrBrand = prompt('Which brand do you want to check?').toLowerCase();
let brandItemDisplay = '';
let productsPrice = 0;
if (inventoryByBrand[usrBrand] == null) {
    alert('This brand is unavailable in your inventory');
} else {
    let brandCount = 0;
    for (i in inventoryByBrand) {
        if (String(i).toLowerCase() == usrBrand) {
            brandCount = brandCount + inventoryByBrand[i].length;
            for (i2 = 0; i2 < inventoryByBrand[i].length; i2++) {
                brandItemDisplay = brandItemDisplay + `${inventoryByBrand[i][i2].name}\n`;
                productsPrice = productsPrice + inventoryByBrand[i][i2].price * inventoryByBrand[i][i2].quantity;
            }
        }
    }
    alert(`There are ${brandCount} generations of '${usrBrand}' in your inventory
${brandItemDisplay}
Total price of all '${usrBrand}' products in your inventory: ${(productsPrice*1000).toLocaleString('it-IT', {style: 'currency', currency: 'VND'})}`);
}

