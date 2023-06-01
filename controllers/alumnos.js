const connection = require('../database/config');

const alumnosGet = async(req, res) => {
   res.json(`ruta para obtener todos los alumnos`);
}

const alumnoGet = async(req, res) => {
    const {id} = req.params;
    res.json(`ruta para un alumno ${id}`);
}

const alumnoPost = async(req, res) => {
    res.json('se registro un alumno');
}

module.exports = {
    alumnosGet,
    alumnoGet,
    alumnoPost
}