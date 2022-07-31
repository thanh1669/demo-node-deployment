const express = require('express');
const os = require('os');
const app = express();

const enviroment = {
    port: process.env.PORT,
    version: process.env.VERSION,
    message: process.env.MESSAGE,
    mongoUri: process.env.MONGODB_URI
};

if (!enviroment.port) {
    console.log('Missing enviroment PORT!');
    process.exit(1);
}

if (!enviroment.message) {
    console.log('Missing enviroment MESSAGE!');
    process.exit(1);
}

app.get('/v1/status', (req, res, next) => {
    res.send({
        status: 'success',
        message: `Hello, I'm running on ${os.hostname()} with version ${enviroment.version}!`
    })
});

app.listen(enviroment.port, () => {
    console.log(`[NODE] App listening listening at port ${enviroment.port}`)
});