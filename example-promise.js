function addPromise(a, b) {
    return new Promise(function (resolve, reject) {

        if (typeof a === 'number' && typeof b === 'number') {
            resolve(a+b);
        } else {
            reject("one parameter is not a number");
        }
    });
};

addPromise(2,2).then( function(sum)  {
    console.log("promise success: ", sum);
},
function(err){
    console.log("promise error: ", err);
}
);

addPromise(2,"2").then( function(sum)  {
        console.log("promise success: ", sum);
    },
    function(err){
        console.log("promise error: ", err);
    }
);