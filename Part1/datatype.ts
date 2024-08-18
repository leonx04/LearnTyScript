// string : chuỗi ký tự
let username: string = "jung nguyen ";
console.log(username);
// number : số
let age: number = 20;
console.log(age);
// Boolean: true false
let isLogin: boolean = true;
console.log(isLogin);
// Array: mảng
let hobbies: string[] = ["Jung", "Leo", "Nike"];
console.log(hobbies);
// Tuple:  một mảng có độ dài cố định
let address: [string, number] = ["Jung", 20];
console.log(address);
// Enum: liệt kê các giá trị có thể có
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Blue;
// Any: Kiểu dữ liệu bất kỳ
let notSure: any = 4;
console.log(notSure);
// void: không có giá trị trả về
let unusable: void = undefined;
console.log(unusable);
// null: giá trị null
let u: string | null = null;
// undefined: giá trị không xác định
let v: string | undefined = undefined;
// object: đối tượng
let person: {
    name: string;
    age: number;
  } = {
    name: "Jung",
    age: 20,
  };
  console.log(person);
// never: không có giá trị
let error: never = (() => {
  throw new Error();
})();
console.log(error);
