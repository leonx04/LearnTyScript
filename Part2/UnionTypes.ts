// Union Types: Cho phép 1 biến có nhiều kiểu dữ liệu

let a: number | string;

type Person = {name: string};
type Employee = Person & {emloyeeId: number};


let b: Employee = {name: "Jung", emloyeeId: 1};
console.log(b)
