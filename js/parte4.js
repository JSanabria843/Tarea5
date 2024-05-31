function createUser(id, email, name, lastname, status, dpi) {
    return {
        id: id,
        email: email,
        name: name,
        lastname: lastname,
        status: status,
        dpi: dpi,
        recuperarClave: function () {
            console.log('Recuperando clave...');
        },
        cambiarDireccion: function (nuevaDireccion) {
            this.email = nuevaDireccion;
            console.log(`La dirección de correo de ${this.name} ha sido cambiada a ${nuevaDireccion}`);
        }
    };
}

let user0 = createUser(1, 'paola@company.ru', 'Paola', 'Ortiz', false, '1234567890');
let user1 = createUser(2, 'paolo@company.ru', 'Paolo', 'Ortega', true, '2345678901');
let user2 = createUser(3, 'eduardo@company.ru', 'Eduardo', 'Alonso', false, '3456789012');
let user3 = createUser(4, 'lorena@company.ru', 'Lorena', 'Ramirez', true, '4567890123');
let user4 = createUser(5, 'eduardo@company.ru', 'Eduardo', 'Perez', false, '5678901234');

console.log(user0);
console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);


user0.cambiarDireccion('nueva12paola@company.ru');
console.log(user0);
