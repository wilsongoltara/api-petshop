const router = require('express').Router();
const TableProvider = require('./tableProvider');
const Provider = require('./Proveiders');

router.get('/', async (_, response) => {
    const result = await TableProvider.list();
    response.stauts(200).send(
        JSON.stringify(result)
    );
});

router.post('/', async (request, response) => {
    try {
        const receivedData = request.body;
        const provider = new Provider(receivedData);
        await provider.create();
        response.status(201).send(
            JSON.stringify(provider)
        );
    } catch(error) {
        response.status(400).send(
            JSON.stringify({ message: error.message })
        );
    }
});

router.get('/:idProvider', async (request, response) => {
    try {
        const id = request.params.idProvider;
        const provider = new Provider({ id: id });
        await provider.load();
        response.send(
            JSON.stringify(provider)
        );
    } catch(error) {
        response.status(404).send(
            JSON.stringify({ message: error.message })
        );
    }
});

router.put('/:idProvider', async (request, response) => {
    try {
        const id = request.params.idProvider;
        const receivedData = request.body;
        const data = Object.assign({}, receivedData, { id: id });
        const provider = new Provider(data);
        await provider.update();
        response.status(204).end()
    } catch(error) {
        response.status(400).send(
            JSON.stringify({ message: error.message })
        );
    }
});

router.delete('/:idProvider', async (request, response) => {
    try {
        const id = request.params.idProvider;
        const provider = new Provider({ id: id });
        await provider.load();
        await provider.remove();
        response.status(204).end()
    } catch(error) {
        response.status(404).send(
            JSON.stringify({ message: error.message })
        );
    }
});

module.exports = router;