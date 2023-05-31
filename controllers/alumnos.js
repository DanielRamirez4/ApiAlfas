const {request, response} = require('express')

const alumnosGet = (req = request, res = response) => {
    res.json('ruta para obtener todos los alumnos');
}

const alumnoGet = async(req, res) => {
    res.json('ruta para un alumno');
}

const alumnoPost = async(req, res) => {
    res.json('se registro un alumno');
}

module.exports = {
    alumnosGet,
    alumnoGet,
    alumnoPost
}