let ctr=0;
function callback(){
    console.log(ctr);
    ctr += 1;
}

setInterval(callback, 1000);

let x = 0;
for(let i=0;i<400000000;i++){
    x = x + i;
}

console.log(x);
