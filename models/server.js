const express = require('express');
const cors = require('cors');
const multer = require('multer')
// const body_parser = require('body-parser');

class Server {
    constructor(){
        this.app = express();
        this.port = 3000;

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

        // this.app.use(multer().any());
    }

    routes(){
        this.app.use( this.paths.alumnos, require('../routes/alumnos'));
        // this.app.use(this.paths.certificados, require(''));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto', 3000);
        });
    }

}

module.exports = Server;