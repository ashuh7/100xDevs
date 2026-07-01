// function setTimeoutPromisified(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// function callback(err,data){
//     if(err){
//         console.log("Error while reading the file");
//     }else{
//         console.log(data);
//     }
// }

// setTimeoutPromisified(3000).then(callback)

/*
Q. Write a code for promisified version of 'fs' name it ReadFilePromisified
*/
// * Solution: 
const fs = require("fs");
const path = require("path");


function fsReadFilePromisified(filePath, encoding){
    return new Promise((resolve,reject) => {
        fs.readFile(filePath,encoding,(err,data)=> {
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        })
    })

}

function callback(data){
    console.log(data);
    
}

function callbackErr(){
    console.log("Error while reading the file");
    
}

fsReadFilePromisified(path.join(__dirname, "aw.txt"), "utf-8")
    .then(callback)
    .catch(callbackErr)