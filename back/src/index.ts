enum Roles {
    USER = "user",
    ADMIN = "admin",
    SUPERADMIN = "superadmin",
  }

function getRoleName(rol: Roles): string {
    switch (rol) {
        case Roles.USER:
            return "user"
        case Roles.ADMIN:
            return "admin"
        case Roles.SUPERADMIN:
            return "superadmin"
        default:
            return "Unknown role"
    }
}
const roleName = getRoleName(Roles.ADMIN);
console.log(roleName);

enum Animales {
    PERRO = "perro",
    GATO = "gato",
    RINOCERONTE = "rinoceronte",
    CERDO = "cerdo",
}

function adoptAnimal(animal: Animales): string {
    switch (animal) {
        case Animales.PERRO:
            return "Perro adoptado"
        case Animales.GATO:
            return "Gato adoptado"
        case Animales.RINOCERONTE:
            return "Rinoceronte adoptado"
        case Animales.CERDO:
            return "Cerdo adoptado"
        default:
            return "No se ha adoptado un animal"
    }
}

const perroAdoptado = adoptAnimal(Animales.PERRO);
console.log(perroAdoptado);


function calculateCircleArea(radius: number):number {
    return Math.PI * radius * radius;
}

function reverseString(text: string): string {
    return text.split("").reverse().join("");

}

console.log(calculateCircleArea(10))
console.log(reverseString("Hola mundo"));



interface IEmployee {
    name: string;
    age: number;
    role: Roles;
}

function printEmployeeInfo(employee: IEmployee) {
    console.log(`Name: ${employee.name}, Age: ${employee.age}, Role: ${employee.role} `);
}

printEmployeeInfo({name: "John", age: 30, role: Roles.ADMIN});