function lcm(a, b) {
    return (a * b) / gcd(a, b);
}


function gcd(a, b) {

    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}


console.log(lcm(24, 36));
