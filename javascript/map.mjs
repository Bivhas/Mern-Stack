// map loop

let ar1=[10,20,30,40,50]

let ar =ar1.map((item,i)=>{
return item * 2 *i
})
console.log(ar)

/*
Map is used when both input and output both are array
Map is used when number of inputs equals to te number of output
*/

// Q) [10,20,30]=>[20,40,60]
let a2=[10,20,30]

let a3=a2.map((item,i)=>{
    return item*2
})
console.log(a3)

//[20.30,10,5] =>[40,60,0,0]

let arr1=[20,30,10,5]
let arr=arr1.map((item,i)=>{
    if(item>10){
        return item *2
    }else{
        return 0
    }
})
console.log(arr)