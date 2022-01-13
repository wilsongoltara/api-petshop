const ModelTable = require('../routes/providers/modelTableProvider');

//create tables in database
ModelTable
    .sync()
    .then(() => console.log('Table created sucessfully!'))
    .catch(console.log)