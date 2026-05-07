let canVote=(age)=>{
if(age>=18){
    return("Can vote");
}
else{
    return("Can not vote");
}
}

let _canVote=canVote(19)
console.log(_canVote)
/*
make a function name 
prepo
it takes one i/p
if i/p = male => return he
if i/p = female => return she 
else return they
*/
let prepo=(gender)=>{
if(gender === "male"){
    return("he")
}else if(gender === "female"){
    return("she")

}else{
    return ('they')
}
}
let gender = "female"
let _prepo=prepo(gender)
console.log(_prepo)