const {request, response} = require('express')

const alumnosGet = async(req = request, res = response) => {

    const idAlumno = await  sreq.params.idAlumno;

    console.log(req.params)

    res.json(`aqui se mostraran todos los alumnos: ${idAlumno}`);
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