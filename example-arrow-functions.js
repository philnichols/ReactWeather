/*
var names = ['Andrew', 'Julie', 'Jen'];

names.forEach(
    function(name) {
        //console.log('foreach',name);
    }
);

names.forEach((name) => console.log(name));
*/

function add(a, b) {
    return a + b;
}

var addStatement =  (a , b) => {
    return (a + b);

};

console.log(addStatement(1, 3));

var addExpression = (a, b) => a+b;

console.log(addExpression(2,3));