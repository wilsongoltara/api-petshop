const router = require('express').Router();
const TableProvider = require('./tableProvider');
const Provider = require('./Proveiders');

router.get('/', async (_, response) => {
    const result = await TableProvider.list();
    response.status(200).send(
        JSON.stringify(result)
    );
});

router.post('/', async (request, response, next) => {
    try {
        const receivedData = request.body;
        const provider = new Provider(receivedData);
        await provider.create();
        response.status(201).send(
            JSON.stringify(provider)
        );
    } catch(error) {
        next(error);
    }
});

router.get('/:idProvider', async (request, response, next) => {
    try {
        const id = request.params.idProvider;
        const provider = new Provider({ id: id });
        await provider.load();
        response.status(200).send(
            JSON.stringify(provider)
        );
    } catch(error) {
        next(error);
    }
});

router.put('/:idProvider', async (request, response, next) => {
    try {
        const id = request.params.idProvider;
        const receivedData = request.body;
        const data = Object.assign({}, receivedData, { id: id });
        const provider = new Provider(data);
        await provider.update();
        response.status(204).end()
    } catch(error) {
        next(error);
    }
});

router.delete('/:idProvider', async (request, response, next) => {
    try {
        const id = request.params.idProvider;
        const provider = new Provider({ id: id });
        await provider.load();
        await provider.remove();
        response.status(204).end()
    } catch(error) {
        next(error);
    }
});

module.exports = router;