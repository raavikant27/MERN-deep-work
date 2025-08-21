console.log("hello worlds");

var a=10782399;
var b=20234;


https.get("hhtps://dummyjson.com/products/1",(res)=>{


   console.log("setTimeout called after 5 seconds");


});
setTimeout(()=>{


    console.log("setTimeout called after 5 seconds");
5000});


fs.readFile("./file.txt","utf8",(err,data)=>{


    console.log("File Data :",data);
});
function multiplyFn(x,y){
    const result= a * b;
    return result;
}

var c=multiplyFn(a,b);
console.log("Multiply result is :",c);