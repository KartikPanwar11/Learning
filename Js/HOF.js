//Calculate the 10% of the num in the form of array

// let amount = [200,400,500,600,700,800];

// function calNum(amount){
//     let res = []
//     for(i=0;i<amount.length;i++){
//     res.push(amount[i]*0.1)}
//     return res
// }

// console.log(calNum(amount));

// insted of giving multiple function for diff percentage we will do one generic function 
//generic HOF
let amount = [200,400,500,600,700,800];

function calTenPercent(amount){
    return amount*0.1;
}

function calTwentyPercent(amount){
    return amount*0.2;
}
 function calThirtyPercent(amount){
    return amount*0.3;
 }

// function calculate(amount,cb){
//     let res=[]
//     for(i=0;i<amount.length;i++){
//         res.push(cb(amount[i]))
//     }
//     return res
// }
// console.log(calculate(amount,calTwentyPercent));


//*USE OF MAP*/

Array.prototype.calculate=function (cb){ 
    let res=[]
    for(i=0;i<this.length;i++){
        res.push(cb(this[i]))
    }
    return res
}

console.log(amount.calculate(calTenPercent))


//map
let arr2=[1,2,3,4,5,6];
arr2.map((anything)=>{
    console.log(anything*5);
});

//filter
arr2.filter((kuchbhi)=>{
    if(kuchbhi%2==0){
        console.log(kuchbhi);
    }
})

//reduce

let add = arr2.reduce((element,container)=>{
    return element + container;
})
console.log(add)


// if we want to run all three at same time
let allSum = arr2.map((ele)=>{
    return ele*4
    }).filter((ele)=>{
        if (ele % 2 ==0){
            return ele
        }
    }).reduce((ele,container)=>{
        return ele + container
    })

    console.log(allSum)