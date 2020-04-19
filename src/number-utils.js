process.on("message", message => {
    const prime = this.isPrime(message.number);
    process.send(prime);
    process.exit();
});

exports.isPrime = function(a) {
    var i = 2;
    while(i<a) {
        if(a%i == 0) {
            return false;
        }
        i++;
    }
    return true;
}