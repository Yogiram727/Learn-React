//-----------------var vs Let vs Const--------------
//var-> function scope 
//let -> blocked scope 
//const -> blocked scope but cannot reassign
//Prefer to use const and use let only when you need to reassign
function sayHello(){
    for(var i=0;i<5;i++){
        console.log(i);
    }
}
sayHello();