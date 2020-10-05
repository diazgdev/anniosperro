// Ingresa la edad de tu perro: 
let edadPerro = 2;

// Ingresa el nombre de tu perro:
let perrito = "Pepe"

/*
No modificar a partir de aquí
*/

// Primeros dos años
let earlyYears = 2;

// Los primeros dos años se deben multiplicar por 10.5
earlyYears *= 10.5;

// Restamos los dos años que se multiplicaron en la linea anterior
let laterYears = edadPerro - 2;

// Multiplicamos el resto de los años por 4
laterYears *= 4;

//sumamos las dos variables creadas
let edadHum = earlyYears + laterYears;


console.log(`${perrito} tiene ${edadPerro} años. Lo cual equivale a ${edadHum} años humanos.`)