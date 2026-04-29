/*
Assignment: Create a function that takes an array of objects as input,
and returns the users whose age > 18 and are male.
*/

function isLegal(users){
    let legal_users=[];
    
    for(let i=0;i<users.length;i++){
        if(users[i].age>=18){
            legal_users.push(users[i]);
        }
    }
    return legal_users;
}

const users = [
    {
        name:"Ajay",
        age:22
    },{
        name:"Naman",
        age:23 
    },{
        name:"kirat",
        age:12
    }
]

let ans = isLegal(users)
console.log(ans);

