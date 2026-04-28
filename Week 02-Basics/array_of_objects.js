function isLegal(user){
    if(user.age >= 18){
        console.log(user.name + " is allowed to vote");
    }
    else{
        console.log(user.name + " is not allowed to vote"); 
    }
}


const users = [{
		name: "Harkirat",
		age: 21,
        password:"23random",
        addresses: [
            {
                city:"Chandigarh",
                building: 50,
                pincode: 123455
            },
            {
                city:"delhi",
                building: 60,
                pincode: 77890
            }
        ]
	}, {
		name: "raman",
		age: 22,
        password:"3er4",
        addresses:[]
	}
]

const user1 = users[0] // get 1st user information
const user1Age = users[0].age // get age of 1st user

console.log(users[0].addresses[0].city); //print first user's city
// console.log(isLegal(users[1]));

for(var i=0;i<2;i++){
    isLegal(users[i]);
}


