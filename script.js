//Map to names
// let jane = { name: 'Jane', age: 17};
// let peter = { name: 'Peter', age: 22};
// let henry = { name: 'Henry', age: 30};

// let users = [ jane, peter, henry ];

// let names = users.map(item => item.name);

// alert(names); // Jane, Peter, Henry/


//Map to objects
// let jane = { name: 'Jane', surname: 'Olivia', id: 1 };
// let peter = { name: 'Peter', surname: 'Parker', id: 2 };
// let henry = { name: 'Henry', surname: 'Wood', id: 3 };

// let users = [jane, peter, henry];

// let fullName = users.map(item => ({ fullName: item.name + ' ' + item.surname }));//NT

// let usersIds = users.map(item => ({ id: item.id }));//NT

// let usersMapped = users.map(item => ({
//     fullName: item.name + ' ' + item.surname,
//     id: item.id
// }))//Learn from GPT

// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // John Smith

// console.log(usersMapped);
// alert(usersMapped)


//Sort users by age
// let jane = { name: 'Jane', age: 17 };
// let peter = { name: 'Peter', age: 30 };
// let henry = { name: 'Henry', age: 25 };

// let arr = [jane, peter, henry];

// function sortByAge(arr) {
//     arr.sort((a, b) => a.age - b.age);
// }

// sortByAge(arr);

// console.log(arr);
// now: [jane, henry, peter]

// alert(arr[0].name); // Jane
// alert(arr[1].name); // Henry
// alert(arr[2].name); // Peter


//Get average age
// let jane = { name: 'Jane', age: 17 };
// let peter = { name: 'Peter', age: 30 };
// let henry = { name: 'Henry', age: 25 };

// let arr = [jane, peter, henry];

// function getAverageByAge(e) {
//     // let sumAge = e.reduce((sum, current) => sum + current.age, 0);
//     // let result = sumAge / arr.length;
//     // return result;

//     //solution
//     return e.reduce((sum, current) => sum + current.age, 0) / e.length;
// }

// alert(getAverageByAge(arr));


//Create keyed object from array
let users = [
    { id: 'jane', name: 'Jane Olivia', age: 17 },
    { id: 'peter', name: 'Peter Parker', age: 30 },
    { id: 'henry', name: 'Henry Wood', age: 25 },
];

// let userId = users.id;

function groupById(e) {
    return e.reduce((accumulator, item) => {
        accumulator[item.id] = { id: item.id, name: item.name, age: item.age };
        return accumulator;
    }, {});
}

let usersById = groupById(users);
console.log(usersById);

// let usersMapped = users.map(item => ({
//     fullName: item.name + ' ' + item.surname,
//     id: item.id
// }))