const ModelTable = require('./modelTableProvider');

module.exports = {
    //return the results of method findAll()
    list() {
        return ModelTable.findAll();
    },

    insert(provider) {
        return ModelTable.create(provider);
    },

    async getForId(id) {
        const found = await ModelTable.findOne({
            where: { id: id }
        });
        
        if(!found) {
            throw new Error('Provider not found!');
        }
        
        return found;
    },

    update(id, dataForUpdate) {
        return ModelTable.update(
            dataForUpdate,
            { 
                where: { id:id }
            }
        );
    },

    remove(id) {
        return ModelTable.destroy({
            where: { id: id }
        });
    }
}