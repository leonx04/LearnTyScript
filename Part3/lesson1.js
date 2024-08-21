var sum = function (x, y) {
    return x + y;
};
console.log("check =>>>>: ", sum(10, 20));
// need to validate
var sum2 = function (x, y) {
    //validate: x,y are numbers ???
    return x + y;
};
console.log("check =>>>>: ", sum2('name', 20));
