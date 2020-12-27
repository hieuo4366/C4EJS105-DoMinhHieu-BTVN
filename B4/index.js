// Bài tập video
//video 1
// let movie = {
//     title: 'The dark night rises',
//     year: 2012,
//     rate: 8.4,
// };
// console.log(movie);
//video 2
// let movie = {
//     title: 'The dark night rises',
//     year: 2012,
//     rate: 8.4,
// };
// console.log(movie.title);
// console.log(movie.year);
// console.log(movie.rate);
// console.log(movie['title']);
// console.log(movie['year']);
// console.log(movie['rate']);

// console.log(movie.director); // undefine

// let movie = {
//     title: 'The dark night rises',
//     year: 2012,
//     rate: 8.4,
// };

// let input = prompt('what you want to know ?');
// if( movie[input] == null || movie[input] == undefined){
//    alert('not exist in our data !');
// }else{
//     alert(movie[input]);
// }   

//video 3

// movie.rate = 8.7;
// console.log(movie);
// movie.rate += 0.5;
// console.log(movie);

// let input = prompt('what you want to update?');
// if (movie[input] == movie.title || movie[input]== movie.year || movie[input] == movie.rate) {
//     let update = prompt('what is update ?');
//     movie[input] = update; 
//     console.log(movie);
// }

//video 4
// let input = prompt('what you want to update?');
// if (movie[input] == movie.title || movie[input]== movie.year || movie[input] == movie.rate) {
//     let update = prompt('what is update ?');
//     movie[input] = update; 
//     console.log(movie);
// }else{
//     alert(`${input} not exist we will add nem`);
//     let newData = prompt('Enter the new data');
//     movie[input] = newData;
//     console.log(movie);
// }

//video 5

// let movie1 = {
//     name: 'Phim 1',
//     year: 2020,
//     rate: 8.1
// }
// let movie2 = {
//     name: 'Phim 2',
//     year: 2020,
//     rate: 8.3,
// }
// let movie3 = {
//     name: 'Phim 3',
//     year: 2020,
//     rate: 8.4,
// }
// let movieArr = [movie1,movie2,movie3];

// console.log(movieArr);
// console.log(movieArr[0]);
// console.log(movieArr[movieArr.length-1]);

// for(i=0;i<movieArr.length;i++){
//     console.log('-----------------------');
//     console.log(movieArr[i]);
// }
// for (i = 0; i < movieArr.length; i++) {
//     console.log('--------------------');
//     console.log(movieArr[i].name);
//     console.log(`Year :${movieArr[i].year}`);
//     console.log(`Rate :${movieArr[i].rate}`);
// }

// movieArr[movieArr.length-1].rate += 0.7;
// console.log(movieArr[movieArr.length-1]);

//video 6
// let movie = {
//     name:'Attack on titan',
//     year:'2013',
//     rate:'8.8',
//     casts:['Eren','Armin','Mikasa'],
// };
// console.log(movie.name);
// console.log(`Year: ${movie['year']}`);
// console.log(`Rate: ${movie['rate']}`);
// let input = movie.casts.join(' ');
// console.log(`Casts:${input}`);

// let input1 = movie.casts.push('Levi');
// console.log(movie.name);
// console.log(`Year: ${movie['year']}`);
// console.log(`Rate: ${movie['rate']}`);
// let input2 = movie.casts.join(' ');
// console.log(`Casts:${input2}`);


//video 7

// let movie1 = {
//     name: 'Phim 1',
//     year: 2020,
//     rate: 8.1,
//     casts: ['Eren', 'Armin', 'Mikasa'],
// }
// let movie2 = {
//     name: 'Phim 2',
//     year: 2020,
//     rate: 8.3,
//     casts: ['Holden', 'Bill'],
// }
// let movie3 = {
//     name: 'Phim 3',
//     year: 2020,
//     rate: 8.4,
//     casts: ['Ted'],
// }
// let movieArr = [movie1, movie2, movie3];
// for (let Item of movieArr) {
//     console.log('----------------');
//     console.log(Item.name);
//     console.log(`Year:${Item.year}`);
//     console.log(`Rate:${Item.rate}`);
//     let input = Item.casts.join(' ');
//     console.log(`Casts:${input}`);
// }

//Homework
//1.1
// x là property
//1.2
// const product = {
//     name: 'Xiaomi rice cooker',
//     price: 1700,
//     brand: 'Xiaomi',
//     color: 'white',
// };
// for(let x in product){
//     console.log(`${x} : ${product[x]}`);
// }
//2
// const task = {
//     subject: 'Implement login feature',
//     createdBy: 'Hoang Ngoc Duc',
//     assignTo: 'Nguyen Phuong Nam',
//     dueDate: '2019-10-08T18:00:24+0000',
//     expectedHours: 0.5,
// };
// let { subject, dueDate, assignTo } = task;
// console.log(subject);
// console.log(dueDate);
// console.log(assignTo);

//3
//3.1
// object
//3.2
//array
//3.3

// 4.1 ------------------------
//     alert('Hi there, this is dev dictionary');
//     let keyword = prompt('Enter a keyword');
//     if(dictionary[keyword] == null || dictionary[keyword] == undefined) {
//         let userExplanation = prompt('We could not find your word, leave your explanaion');
//         dictionary[keyword] = userExplanation;
//         alert(keyword + '\n' + dictionary[keyword]);
//     } else {
//         alert(keyword + '\n' + dictionary[keyword]);
//     }
// }

// {
//     let products = [
//         {
//             name: 'Xiaomi portable charger 20000mah',
//             brand: 'Xiaomi',
//             price: 428,
//             color: 'White',
//             category: 'Charger',
//         },
//         {
//             name: 'VSmart Active 1',
//             brand: 'Vsmart',
//             price: 5487,
//             color: 'Black',
//             category: 'Phone',
//         },
//         {
//             name: 'Iphone X',
//             brand: 'Apple',
//             price: 21490,
//             color: 'Gray',
//             category: 'Phone',
//         },
//         {
//             name: 'Samsung Galaxy A9',
//             brand: 'Samsung',
//             price: 8490,
//             color: 'Blue',
//             category: 'Phone',
//         }
//     ];
//     // for(let item of products) {
//     //     console.log('-------------------------');
//     //     console.log(`Name: ${item.name}`);
//     //     console.log(`Price: ${item.price}`);
//     // }
//     // console.log('-----------------------------');
//     // let productPos = prompt('Enter product position:');
//     // {
//     //     let {name, brand, price, color, category} = products[productPos - 1];
//     //     console.log(`Name: ${name}`);
//     //     console.log(`Brand: ${brand}`);
//     //     console.log(`Price: ${price}`);
//     //     console.log(`Color: ${color}`);
//     //     console.log(`Category: ${category}`);
//     // }
//     // console.log('----------------------------------');
//     // {
//     //     let categoryName = prompt('Enter your category:');
//     //     let userCategory = products.filter(item => item.category == categoryName);
//     //     for(let item of userCategory) {
//     //     console.log('-------------------------');
//     //     console.log(`Name: ${item.name}`);
//     //     console.log(`Price: ${item.price}`);
//     //     }
//     // }
//     // console.log('-------------------------');
//     products[0]['Providers'] = ['Phukienzero', 'Dientuccc'];
//     products[1]['Providers'] = ['Tgdd', 'Ddghn', 'VhStore'];
//     products[2]['Providers'] = ['Tgdd'];
//     products[3]['Providers'] = ['Tgdd'];
//     // {
//     //     for(let item in products) {
//     //         let {name, price} = products[item];
//     //         let listProviders = products[item].Providers.join(' ');
//     //         console.log(`#${Number(item)+1}. ${name} \n Price: ${price} \n Providers: ${listProviders}`);       
//     //     }
//     // }
//     // 5.5
//     {
//         let toFindProvider = prompt('Enter the name of provider:');
//         for (let item of products) {
//             if (item.Providers.indexOf(toFindProvider) != -1) {
//                 console.log('---------------------------------');
//                 let { name, brand, price, color, category, Providers} = item;
//                 console.log(`Name: ${name}`);
//                 console.log(`Brand: ${brand}`);
//                 console.log(`Price: ${price}`);
//                 console.log(`Color: ${color}`);
//                 console.log(`Category: ${category}`);
//                 console.log(`Providers: ${Providers}`);
//             }     
//         }
//     } 
// }

// {
//     let tasks = [
//         {
//             course: 'HTML',
//             complete: false,
//         },
//         {
//             course: 'CSS',
//             complete: false,
//         },
//         {
//             course: 'Basics of JavaScript',
//             complete: false,
//         },
//         {
//             course: 'Node Package Manager (nmp)',
//             complete: false,
//         },
//         {
//             course: 'Git',
//             complete: false,
//         }
//     ];
//     while(true) {
//         console.clear();
//         console.log('Hi there, this is your learning tasks to front-end developer career:');
//         for(let index in tasks) {
//             let {course: name, complete: status} = tasks[index];
//             let isComplete = ' ';
//             if(status == true) {
//                 isComplete = 'x'; 
//             }
//             console.log(`${Number(index)+1}. [${isComplete}] ${name} \n`);
//         }
//         // command menu
//         let userCommand = prompt('Enter your command(New, Delete, Update, Complete)');
//         userCommand = userCommand.toUpperCase();
//         let isQuit = false;
//         switch(userCommand) {
//             case 'NEW': {
//                 let newCourse = prompt('Enter new task');
//                 let newTask = {
//                     course: newCourse,
//                     complete: false,
//                 }
//                 tasks.push(newTask);
//                 break;
//             }
//             case 'UPDATE': {
//                 let coursePos = Number(prompt('Enter task position you want to update:'));
//                 let newTitle = prompt('Enter new title:');
//                 if(coursePos > tasks.length || coursePos < 1) {
//                     alert('Task not exists');
//                 } else {
//                     tasks[coursePos - 1].course = newTitle;  
//                 }
//                 break;
//             }
//             case 'DELETE': {
//                 let coursePos = Number(prompt('Enter task position you want to delete:'));
//                 tasks.splice(coursePos - 1,1);
//                 break;
//             }
//             case 'COMPLETE': {
//                 let coursePos = Number(prompt('Enter task position you have completed:'));
//                 tasks[coursePos - 1].complete = true;
//                 break;
//             }
//             default:
//                 isQuit = true;
//                 break;
//         }
//         if(isQuit) {
//             break;
//         }
//     }
// }

// {
//     console.log('Job hits:');
//     // get all the job hits
//     console.log(jobData.hits);
//     console.log('-------------------------');
//     //get the first job hits
//     console.log(jobData.hits[0]);
//     console.log('-------------------------');
//     // get jobTitle of the first job
//     console.log('First job title:');
//     console.log(jobData.hits[0].jobTitle);
//     console.log('-------------------------');
//     // get benefits of the first job hit
//     console.log(jobData.hits[0].benefits);
//     console.log('-------------------------');
//     // log out jobTitle and benefitValue of all job hits
//     for(let item of jobData.hits) {
//         let {jobTitle} = item;
//         console.log(jobTitle);
//         let allBenefits = 'Benefits: ';
//         for(let content of item.benefits) {
//             allBenefits += '\n - ' + content.benefitValue;
//         }
//         console.log(allBenefits);
//         console.log('-------------------------');
//     }
//     // log out jobTitle, locations, skills, jobSalary of all job hits
//     for(let item of jobData.hits) {
//         // log jobTitle, salary, locations
//         let {jobTitle, jobSalary, locations} = item;
//         console.log(`Title: ${jobTitle}`);
//         console.log(`Salary: ${jobSalary}`);
//         console.log(`Location: \n - ${locations}`);
//         // log benefits
//         let allBenefits = 'Benefits:';
//         for(let content of item.benefits) {
//             allBenefits += '\n - ' + content.benefitValue;
//         }
//         console.log(allBenefits);
//         // log skill
//         let allSkills = 'Skills:'
//         for(let content of item.skills) {
//             allSkills += '\n - ' + content;
//         }
//         console.log(allSkills);
//         console.log('-------------------------');
//     }

// }

{
    const oldData = {
        firedRice: {
        Price: 30,
        vnName: 'Com rang dua bo',
        },
        noddle: {
        price: 20,
        vnName: 'My tom chanh',
        },
        pho: {
        price: 35,
        vnName: 'Pho bo tai chin',
        },
    };
    console.log(oldData);
    let toDelete = "noddle";
    let {[toDelete]: deletedObj, ...newData} = oldData;
    console.log(newData);
}






