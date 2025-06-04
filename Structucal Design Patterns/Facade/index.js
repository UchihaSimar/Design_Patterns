Array.prototype.myMap = function(this, cb){
    let result = [];
    for(let i=0;i<=this.length-1;i++){
        result.push(cb(this[i]));
    }
    return result;
}

// self-implementation of a map method is a facade. User will only have ot call this method and pass a callback. 
// And you get back a new array with the operation.
const result = [1,2,3].myMap(item => item *2);
console.log(result);