exports.run = function (input) {
    var chiffre = input.split(' ').map(Number);
    var m = 0
        , i = 0
        , n = chiffre.length;
    console.log(chiffre.length)
    for (i = 0; i < n; i++) {
        if (chiffre[i] > m) {
            m = chiffre[i];
            console.log(m)
        }
    }
    return m
};