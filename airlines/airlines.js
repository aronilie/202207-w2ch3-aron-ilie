let mediumCost = 0;
let scaleFlights = 0;
let flights = [

    { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },

    { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },

    { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },

    { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },

    { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },

    { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },

    { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },

    { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },

    { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },

    { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },

    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }
];


function airlines() {
    username = prompt('Bienvenido a ISDI airlines! Para continuar introduzca su nombre de usuario por favor. ');

    for (i = 0; i < flights.length; i++){

        if (flights[i]["scale"] === true){
            console.log("El vuelo con origen " + flights[i]["from"] + ", y destino " + flights[i]["to"] + " tiene un coste de " + flights[i]["cost"] + "€ y realiza escala.");
        } else {
            console.log("El vuelo con origen " + flights[i]["from"] + ", y destino " + flights[i]["to"] + " tiene un coste de " + flights[i]["cost"] + "€ y no realiza ninguna escala.");
        }

        mediumCost = mediumCost + flights[i]["cost"];

        if (flights[i]["scale"] === true){
            scaleFlights = scaleFlights + 1;
        }
    }
    
    mediumCost = (mediumCost / flights.length).toFixed(3);

    console.log("El coste medio de todos los vuelos es: " + mediumCost + "€");

    console.log(scaleFlights + " Vuelos hacen escala.");

    console.log("El destino de los últimos 5 vuelos es: ");
    
    for (i = 6; i < flights.length; i++){
        console.log(flights[i]["to"]);
    }
}