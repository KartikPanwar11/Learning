//Spread operators only for first level until it gets nested

// let person ={
//     fname: 'fiery',
//     lname:'g',
//     age:24
// };
// console.log(person);


// let person2= {...person};
// person2.age=25;
// console.log(person2);



// arr1=[1,2,3];
// arr2=[...arr1];
// arr2.push(4,5);
// console.log(arr2);

// STRUCTURED CLONE FOR MORE THAN ONE LEVEL
// Method 1

// let person={
//     fname:'Kartik',
//     lname:'Pawar',
//     address:{
//         city:'Delhi',
//         state:'UP'
//     }
// }

//method one to use tht 
// let person2 = structuredClone(person);
//method two for this (it convert object to strings)
// let person2 = JSON.parse(JSON.stringify(person))
// person2.lname = 'Panwar';
// person2.address.city='Pune';
// person2.address.state='MH';
// console.log(person);
// console.log(person2);


// const arr1=[1,2,3,[4,5,6]];
// const arr2= JSON.parse(JSON.stringify(arr1))
// arr2[3].push(7,8);

// console.log(arr1);
// console.log(arr2);


//REST


// const fruits = ['apple','banana','mango'];
// let [first,second,...rest] = fruits;

// console.log(first);
// console.log(second);
// console.log(rest);

// let person ={
//     fname: 'fiery',
//     lname:'g',
//     age:24,
//     address:{
//         city:'delhi',
//         state:'Delhi'
//     }
// };

// const {fname,address,...rest}= person;
// console.log(fname);
// console.log(address);
// console.log(rest);


function sum(...arg){
    let sum =0;
    for(i= 0;i<arg.length;i++){
        sum=sum+arg[i]
    }
    console.log(sum)
}
sum(1,2,3,4,5,6);