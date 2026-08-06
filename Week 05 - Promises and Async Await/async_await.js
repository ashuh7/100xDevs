const fs = require('fs');
const path = require("path");

function fsReadFilePromisified(filePath, encoding){
    return new Promise((resolve,reject)=>{
        fs.readFile(filePath,encoding, function(err,data){
            if(err){
                reject("File was not read");
            }else{
                resolve(data);
            }
        })
    })
}

async function main(){
    let file1contents = await fsReadFilePromisified(path.join(__dirname, "a.txt"),"utf-8");
    let file2contents = await fsReadFilePromisified(path.join(__dirname, "b.txt"),"utf-8");
    let file3contents = await fsReadFilePromisified(path.join(__dirname, "c.txt"),"utf-8");

    console.log(file1contents);
    console.log(file2contents);
    console.log(file3contents);
    
}

main();