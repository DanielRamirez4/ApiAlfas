const {Router} = require('express');

const router = Router();

const {alumnosGet, alumnoGet, alumnoPost} = require('../controllers/alumnos');

router.get('/:idAlumno', alumnosGet);
// router.get('/:id', alumnoGet);
// router.post('/', alumnoPost);

module.exports = router;