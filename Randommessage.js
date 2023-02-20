function GenerateNumber(num) {
    Math.floor(Math.random()* num)
};

const Generatemessage = {
    pilot: ['Marquez', 'Quartararo', 'Bagnaia', 'A. Espargaro', 'Rossi'],
    cofoodmida: ['Platano', 'Manzana', 'Pera', 'Kiwi', 'Durango'],
    work: ['Piloto', 'Programador', 'Contable', 'Panadero', 'Streamer']
};

let message = [];

for (let selection in Generatemessage){
    let selectionId = GenerateNumber(Generatemessage[selection].length);

    switch(selection) {
        case 'pilot':
            message.push(`Your favourite pilot is: ${Generatemessage[selection][selectionId]}.`)
            break
        case 'food':
            message.push(`You need to eat a: ${Generatemessage[selection][selectionId]}.`)
            break
        case 'work':
            message.push(`You need to work as: ${Generatemessage[selection][selectionId]}.`)
            break
        default:
            message.push('Go back to study!')
    }
}

console.log(message);