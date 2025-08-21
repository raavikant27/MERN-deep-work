console.log("hello world");
var a=1078698;
var b=209886;

 // o sec concept - call me as soon as soon possiable . 
setTimeout(()=>{
    console.log("call me ASAP");
},0);

setTimeout(()=>{
    console.log("call after 3 mili sec");
},3000);

function multiplyFn(x,y){
    const result=a*b;
    return result;

}
var c=multiplyFn(a,b);
console.log("Multiplication result is",c);
