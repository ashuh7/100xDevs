function setTimeoutPromisified(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

setTimeoutPromisified(1000)
    .then(function(){
        console.log("Hi");
        return setTimeoutPromisified(3000)
    }).then(function (){
        console.log("Hello");
        return setTimeoutPromisified(5000);
    }).then(function(){
        console.log("hello"); 
    })