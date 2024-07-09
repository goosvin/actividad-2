let suma = 0;

for (let i = 0; i <= 1000; i++) {
    switch (i % 2) {
        case 0:
            suma += i;
            break;
        default:
            break;
    }
}

console.log(suma);