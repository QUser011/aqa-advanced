const users = [
    {name:"test1", age: 31},
    {name:"test2", age: 32},
    {name:"test3", age: 33},
];

for (const user of users) {
    const {name, age} = user;

    console.log(name, age);
}
