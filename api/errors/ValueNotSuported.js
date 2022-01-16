class ValueNotSuported extends Error {
    constructor(contentType) {
        super(`Content-Type ${contentType} not suported!`);
        this.name = 'ValueNotSupported';
        this.idError = 3;
    }
}

module.exports = ValueNotSuported;