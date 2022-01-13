const router = require('express').Router();
const TableProvider = require('./tableProvider');
const Provider = require('./Proveiders');

router.get('/', async (_, response) => {
    const result = await TableProvider.list();
    response.send(
        JSON.stringify(result)
    );
});

router.post('/', async (request, response) => {
    const dataReceived = request.body;
    const provider = new Provider(dataReceived);
    await provider.create();
    response.send(
        JSON.stringify(provider)
    );
});

module.exports = router;