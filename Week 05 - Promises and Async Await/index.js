/*
* 1] Create a promisified version of fs.readfile
* 2] Create a promisified version of setTimeout
* 3] Create a promisified version of fs.writeFile
*/

const fs = require('fs');

function fsReadFilePromise(fileName,encoding){
    return new Promise(function(resolve,reject){
        fs.readfile(fileName, encoding, function(err,data){
            if(err){
                reject(err);
            } else{
                resolve(data);
            }
        })
    });
}

fsReadFilePromise("b.txt","utf-8")
    .then(function(data){
        console.log(data);
    })
    .catch(function(e){
        console.log("Error while reading the file");
    })

// ================================================================

function setTimeoutPromisified(delay){
    return new Promise(function(resolve,reject){
        setTimeout(function (){
            resolve();
        },delay)
    })
}


setTimeoutPromisified(1000)
    .then(function(){
        console.log("1 second has passed");
    })
    .catch(function(){
        console.log("An error occured");
    })
    .finally(function(){
        console.log("Finally after either then or catch ran");
    })

