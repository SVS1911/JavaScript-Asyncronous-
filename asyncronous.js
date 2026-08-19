
// setTimeout(()=>{console.log("Hello Guys...");
// },6000) 
// console.log("1")
// console.log("3")
// console.log("4")
// console.log("5")
// console.log("3")
// 

// let data=[1,2,3,4,5,6,7,8,9,0];
// function getData(dataId, getNextData){
//     setTimeout(()=>{
//         console.log("Data: ",dataId);
//         if(getNextData)
//             getNextData();
        
//     },2000)
// }

// getData(1,()=>{
//     getData(2, ()=>{
//         getData(3, ()=>{
//             getData(4);
//         });
//     });
// });

// let Ind=(index)=>{
//     if (index<data.length){
//         getData(data[index],()=>Ind(index+1));
//     }
// }
// Ind(0)



//Promisessss::

// let pro=new Promise((res,rej)=>{
//     console.log("Hi! I'm promisess");
//    // res("Hi! I get resolved Successfully..");
//     rej("Sorry I'm Going to get rejected  -_-");

// });


// function getData(dataId, getNextData){
//     return new Promise((res, rej)=>{
//         setTimeout(()=>{
//             console.log("Data: ",dataId);
//             res("Success")
//             //rej("erroe")
//             if(getNextData)
//                 getNextData();
            
//         },6000);
//     })




// const getPromise=()=>{
//     return new Promise((res,rej)=>{
//         console.log("I am a Promise");
//         res("I'm Resolved");
//     });
// }

// let pro=getPromise();
// pro.then((res)=>{
//     const sum=(x,y)=>{return x+y;};
//     a=sum(15,15);
//     console.log(a,"<br>",res);
// })
// .catch((err)=>{
//     console.log("Can't able to add the numbers...",err);
// })











function asyncFunction1(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("Data1");
            res("Success");
        }, 6000);
    })
}

function asyncFunction2(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("Data2");
            res("Success");
        }, 6000);
    })
}


console.log("Fetching Data1")
let p1=asyncFunction1();
p1.then((res)=>{
    console.log(res);
})

console.log("Fetching Data2")
let p2=asyncFunction2();
p2.then((res)=>{
    console.log(res);
})

























































