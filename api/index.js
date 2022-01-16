const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('config');
const NotFound = require('./errors/NotFound');
const InvalidFild = require('./errors/InvalidFild');
const NoDataFound = require('./errors/NoDataFound');
const ValueNotSuported = require('./errors/ValueNotSuported');

app.use(bodyParser.json());

const router = require('./routes/providers');
app.use('/api/providers', router);

app.use((error, request, response, next) => {
    let status = 500;

    if(error instanceof NotFound) {
        status = 404;
    }

    if(error instanceof InvalidFild || error instanceof NoDataFound) {
        status = 400;
    }

    if(error instanceof ValueNotSuported) {
        status = 406;
    }


    response.status(status).send(
        JSON.stringify({ 
            message: error.message,
            id: error.idError
        })
    );
})

app.listen(config.get('api.port'), () => {
    console.log(`Api está no ar!`);
});