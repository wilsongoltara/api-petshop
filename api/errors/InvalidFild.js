class InvalidFild extends Error {
    constructor(fild) {
        const message = `The fild '${fild}' is not valid!`;
        super(message);
        this.name = "InvalidFild"
        this.idError = 1;
    }
}

module.exports = InvalidFild;