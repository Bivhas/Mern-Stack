let ar1=[10,11,12]
let ar2=[12,14]
// ... is a spread operator also known as wrapper opener
let ar3=[8,...ar1] //[8,...[10,11,12] => [8,10,11,12]
let ar4 =[8,ar1]
let ar5 = [...ar1,...ar2]
console.log(ar3)
console.log(ar4)
console.log(ar5)

let info1={name:"Bivhas",age :20}
let info2={class:"Bacheolr in Computer Enfineering",semester:6}
let info3 ={ ...info1, ...info2}
console.log(info3)
