// let pro = new Promise((res, rej) => {
//     setTimeout(() => {
//         res(new Promise((res1, rej1) => {
//             setTimeout(() => {
//                 res1("Inner Promise Resolved");
//             }, 2000);
//         }));
//     }, 2000);
// });

// pro
// .then((data) => {
//     console.log(`Inside Promise: ${data}`);
// })
// .catch((error) => {
//     console.log(`Inside Promise Error: ${error}`);
// });


let pro1=new Promise((res,rej)=>{
    setTimeout(()=>{
        res("Promis 1")
    },1000)
})
let pro2=new Promise((res,rej)=>{
    setTimeout(()=>{
        res("Promis 2")
    },2000)
})
let pro3=new Promise((res,rej)=>{
    setTimeout(()=>{
        res("Promis 3")
    },3000)
})
let pro4=new Promise((res,rej)=>{
    setTimeout(()=>{
        res("Promis 4")
    },4000)
})

Promise.all([pro1,pro2,pro3,pro4]).then((data)=>{
    console.log("All Promises Resolved Successfully");
}).catch((error)=>{
    console.log("Error in Promise");
})


Promise.allSettled([pro1,pro2,pro3,pro4]).then((data)=>{
    console.log("All Promises Resolved Successfully");
}).catch((error)=>{
    console.log("Error in Promise");
})

Promise.any([pro1,pro2,pro3,pro4]).then((data)=>{
    console.log("All Promises Resolved Successfully");
}).catch((error)=>{
    console.log("Error in Promise");
})

Promise.race([pro1,pro2,pro3,pro4]).then((data)=>{
    console.log("All Promises Resolved Successfully");
}).catch((error)=>{
    console.log("Error in Promise");
})