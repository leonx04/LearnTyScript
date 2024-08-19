//Intersection Types: Kết hợp nhiều kiểu thành một kiểu mới.
interface Nameable {
    name: string;
  }
  
  interface Ageable {
    age: number;
  }
  
  type People = Nameable & Ageable;
  
  let people: People = { name: "John", age: 30 }; // phải có cả `name` và `age`
  
  console.log(people);