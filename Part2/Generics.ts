//Generics: Giúp tạo ra các thành phần có thể hoạt động với nhiều kiểu dữ liệu khác nhau mà không cần phải định nghĩa lại kiểu cụ thể.

function identity<T>(arg: T): T{
    return arg
}

let output = identity<string>("Jung");
console.log(output)
let output2 = identity<number>(10);
console.log(output2)
