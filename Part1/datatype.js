// string : chuỗi ký tự
var username = "jung nguyen ";
console.log(username);
// number : số
var age = 20;
console.log(age);
// Boolean: true false
var isLogin = true;
console.log(isLogin);
// Array: mảng
var hobbies = ["Jung", "Leo", "Nike"];
console.log(hobbies);
// Tuple:  một mảng có độ dài cố định
var address = ["Jung", 20];
console.log(address);
// Enum: liệt kê các giá trị có thể có
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Blue;
// Any: Kiểu dữ liệu bất kỳ
var notSure = 4;
console.log(notSure);
// void: không có giá trị trả về
var unusable = undefined;
console.log(unusable);
// null: giá trị null
var u = null;
// undefined: giá trị không xác định
var v = undefined;

// object: đối tượng
var person = {
    name: "Jung",
    age: 20,
};

console.log(person);
// never: không có giá trị
var error = (function () {
    throw new Error();
})();

console.log(error);