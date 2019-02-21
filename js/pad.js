const pad = function (s,size) {
    while (s.length < (size || 2)) {
        s = "0" + s;
    }
    return s;
}

module.exports = pad