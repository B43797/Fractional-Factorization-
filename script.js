function isPrime(n) {
    if (n <= 1n) return false;
    if (n === 2n) return true;
    if (n % 2n === 0n) return false;
    for (let i = 3n; i * i <= n; i += 2n) {
        if (n % i === 0n) return false;
    }
    return true;
}

function findPrimeFactor(input) {
    const O = BigInt(input);
    let resultText = "Aucun facteur premier n'a été trouvé en utilisant cette méthode.";

    for (let i = 1; i <= 100; i++) {
        for (let d of [0.25, 0.75]) {
            const denom = i + d;
            const quotient = Number(O) / denom;
            if (Number.isInteger(quotient)) {
                const q = BigInt(Math.floor(quotient)) / 4n;
                if (q > 1n && isPrime(q)) {
                    resultText = "Facteur premier trouvé : " + q.toString();
                    return resultText;
                }
            }
        }
    }

    return resultText;
}

document.getElementById("checkBtn").addEventListener("click", () => {
    const input = document.getElementById("numberInput").value;
    const result = findPrimeFactor(input);
    document.getElementById("result").textContent = result;
});
