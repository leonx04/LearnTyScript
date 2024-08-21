const sum = (x,y) => {
    return x + y;
}

console.log("check =>>>>: ",sum(10, 20))

// need to validate
const sum2 = (x:string ,y:number) => {
    //validate: x,y are numbers ???
    return x + y;
}
console.log("check =>>>>: ",sum2('name ', 20));

