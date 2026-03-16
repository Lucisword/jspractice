console.log("Start");
function getdata(callback){
    setTimeout(()=> {console.log("getdata function");}, 3000);
}
console.log("End");

getdata(function(result){
    console.log(result);
})