const ModelTable = require('./modelTableProvider');

module.exports = {
    //return the results of method findAll()
    list() {
        return ModelTable.findAll();
    },

    insert(provider) {
        return ModelTable.create(provider);
    }
}