// let fun=()=>{
//     return new Promise((res,rej)=>{
//         console.log("In Promise");
//         // res({"name":"gopal"});
//         rej("Name not Found")

//     });
// }

// function display(){

//     let response=fun()
//     response.then((res)=>{
//         console.log(res.name)
//     })
//     .catch((error)=>{console.log("ERROR")})
// }

// display()

//====================================Using the Async/Await Functions:=======================================


let fun=()=>{
    return new Promise((res,rej)=>{
        console.log("In Promise");
        // res({"name":"gopal"});
        rej("Name not Found")

    });
}

async function display(){
    try{
    let response=await fun()
    console.log(response.name)
    }    
    catch(error){
        console.log(`This message is comming from the ERROE Block "${error}"`)
    }
}

display()