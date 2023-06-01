const {Router} = require('express');

const router = Router();

const {productosGet, productoGet, productosPost} = require('../controllers/productos');

router.get('/', productosGet);//Consultar todos los alumnos
router.get('/:idProducto', productoGet); //Consultar un solo alumno
router.post('/', productosPost);//Registro de un alumno

module.exports = router;