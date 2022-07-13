let userChoice, action, username;
let flightInfo;
let a;
let newFlight = {};

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


function airlinesPro(){

    username = prompt('Welcome to ISDI airlines. Please, enter your name.');


    while (['user', 'admin'].indexOf(userChoice) === -1) {
        userChoice = prompt('USER or ADMIN?').toLowerCase();
    }

    if (userChoice === 'admin') {

        while ([null, 'c', 'd'].indexOf(action) === -1) {
            
            console.log('These are our disponible flights at the moment:');

            console.table(flights);

            action = prompt("Create or delete flight? c/d");

            
            if (action === 'c'){

                if (flights.length >= 15) {
                    alert("You can't create more flights, please delete or exit.");
                } else {
                    newFlight['id'] = flights.length;
                    flights.push(newFlight);

                    flightInfo = prompt('Destination?');
                    newFlight['to'] = flightInfo;
                    
                    flightInfo = prompt('Origin?');
                    newFlight['from'] = flightInfo;

                    flightInfo = Number(prompt('Cost?'));
                    newFlight['cost'] = flightInfo;

                    flightInfo = prompt('Scale? y/n');
                    flightInfo = (flightInfo === 'y');
                    newFlight['scale'] = flightInfo;

                    alert('Done!');
                }

                action = '';

            } else if (action === 'd') {

                flightInfo = Number(prompt('Enter the ID of the flight you want to delete.'));

                if (flightInfo > (flights.length - 1)) {

                    alert("The ID you entered doesn't match with any flight, please try again.");

                } else {

                    for (i = 0; i < flights.length; i++) {
                        if (flights[i]['id'] === flightInfo) {
                            flights.splice(i, 1);
                        }
                    }

                    alert('Done!');
                }

                action = '';

            }
        }


    } else if (userChoice === 'user') {
        alert('Welcome to ISDI airlines! Here you can buy flights at the best price.');

        console.log('These are our disponible flights at the moment:');

        console.table(flights);

        flightInfo = Number(prompt('How much do you want to spend?'));

        for (i = 0; i < flights.length; i++) {

            if (flights[i]["cost"] <= flightInfo) {

                console.table(flights[i]);
                a = false;
            }
        }

        if (a) {

            alert('There are no flights with that price.');

        } else {

            flightInfo = Number(prompt('Enter the ID of the flight you want to buy.'));

            alert('Thanks for your purchase, see you soon.');
        }
    }
}