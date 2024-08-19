//Generics: Giúp tạo ra các thành phần có thể hoạt động với nhiều kiểu dữ liệu khác nhau mà không cần phải định nghĩa lại kiểu cụ thể.
function identity(arg) {
    return arg;
}
var output = identity("Jung");
console.log(output);
var output2 = identity(10);
console.log(output2);
