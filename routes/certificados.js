const {Router} = require('express');

const router = Router();

const {alumnosGet} = require('../controllers/alumnos');

router.get('/', alumnosGet);

module.exports = router;