const ModelTable = require('./modelTableProvider');
const NotFound = require('../../errors/NotFound');

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
            throw new NotFound();
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