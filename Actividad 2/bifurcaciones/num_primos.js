const n = 1000

const primos = [];

for (let num = 2; num <= n; num++) {
    let esPrimo = true;
    for (let i = 2; i <= Math.sqrt(num) && esPrimo; i++) {
        if (num % i === 0) esPrimo = false;
    }
    if (esPrimo) primos.push(num);
}

console.log(`Números primos hasta ${n}: ${primos.join(", ")}`);