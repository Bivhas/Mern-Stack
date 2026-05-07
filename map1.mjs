// let users=[
//     {name:"ram", age :28},
//     {name:"shyam",age :25},
//     {name:"hari",age:24}
// ]
//["ram","shyam","hari"]
let users=[
    {name:"ram", age :28},
    {name:"shyam",age :25},
    {name:"hari",age:24}
]

let user=users.map((item,i)=>{
    return item.name
})
console.log(user)
