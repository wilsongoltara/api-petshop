const router = require('express').Router();

router.use('/', (_, response) => {
    response.send('OK');
});

module.exports = router;