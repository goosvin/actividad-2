let multiplicando = 1;

while (multiplicando <= 10) {
    let multiplicador = 1;
    while (multiplicador <= 10) {
        let resultado = multiplicando * multiplicador;
        console.log(`${multiplicando} x ${multiplicador} = ${resultado}`);
        multiplicador++;
    }
    multiplicando++;
}