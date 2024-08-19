interface User {
    name: string;
    age: number;
    isActive: boolean;
}

let user: User = {
    name: "Jung",
    age: 20,
    isActive: true
}

console.log(user);

interface Admin extends User{
    role: string;
}

let admin: Admin= {
    name: "Jung",
    age: 20,
    isActive: true,
    role: "admin"
}

console.log(admin)