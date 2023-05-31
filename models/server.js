const express = require('express');
const cors = require('cors');

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        this.paths = {
            alumnos: '/api/alumnos',
            certificados: '/api/certificados'
        };

        this.middlewares();

        this.routes();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}));
    }

    routes(){
        this.app.use( this.paths.alumnos, require('../routes/alumnos'));
        this.app.use(this.paths.certificados, require('../routes/certificados'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto', process.env.PORT || 3000);
        });
    }
}

module.exports = Server;