// Doing an I/O Operation

const fs = require("fs");

function fileReadCallback(err,contents){
    console.log(contents);
    console.log(contents);
    console.log(contents);
}

fs.readFile("a.txt","utf-8",fileReadCallback);

let s = 0
for(let i=0;i<100000; i++){
    s += i
}
console.log(s);
