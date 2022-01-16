class NoDataFound extends Error {
    constructor() {
        super('No update data found!');
        this.name = 'NoDataFound';
        this.idError = 2;
    }
}

module.exports = NoDataFound;