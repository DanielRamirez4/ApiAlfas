const connection = require('../database/config');

const productosGet = (req, res) => {
    try{
        connection.query('SELECT * FROM productos;', (err, results) => {
            res.json(results);
        });
    }catch(error){
        console.log(error);
    }
}

const productoGet = (req, res) => {
    try{
        const {idProducto} = req.params;

        connection.query(`SELECT * FROM productos WHERE id=${idProducto}`, (err, results) => {
            res.json(results);
        })
        
    }catch(error){
        console.log(error);
    }
}


const productosPost = (req, res) => {
    try{
        const {nombre, precio} = req.body;

        connection.query(`INSERT INTO productos(nombre, precio) VALUES("${nombre}", ${precio})`, (err, results) => {
            res.json(results);
        });
    }catch(error){
        console.log(error);
    }
}

module.exports = {
    productosGet,
    productoGet,
    productosPost
}