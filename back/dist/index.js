"use strict";
var Roles;
(function (Roles) {
    Roles["USER"] = "user";
    Roles["ADMIN"] = "admin";
    Roles["SUPERADMIN"] = "superadmin";
})(Roles || (Roles = {}));
function getRoleName(rol) {
    switch (rol) {
        case Roles.USER:
            return "user";
        case Roles.ADMIN:
            return "admin";
        case Roles.SUPERADMIN:
            return "superadmin";
        default:
            return "Unknown role";
    }
}
const roleName = getRoleName(Roles.ADMIN);
console.log(roleName);
var Animales;
(function (Animales) {
    Animales["PERRO"] = "perro";
    Animales["GATO"] = "gato";
    Animales["RINOCERONTE"] = "rinoceronte";
    Animales["CERDO"] = "cerdo";
})(Animales || (Animales = {}));
function adoptAnimal(animal) {
    switch (animal) {
        case Animales.PERRO:
            return "Perro adoptado";
        case Animales.GATO:
            return "Gato adoptado";
        case Animales.RINOCERONTE:
            return "Rinoceronte adoptado";
        case Animales.CERDO:
            return "Cerdo adoptado";
        default:
            return "No se ha adoptado un animal";
    }
}
const perroAdoptado = adoptAnimal(Animales.PERRO);
console.log(perroAdoptado);
function calculateCircleArea(radius) {
    return Math.PI * radius * radius;
}
function reverseString(text) {
    return text.split("").reverse().join("");
}
console.log(calculateCircleArea(10));
console.log(reverseString("Hola mundo"));
function printEmployeeInfo(employee) {
    console.log(`Name: ${employee.name}, Age: ${employee.age}, Role: ${employee.role} `);
}
printEmployeeInfo({ name: "John", age: 30, role: Roles.ADMIN });
