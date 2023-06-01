const connection = require('../database/config');

const alumnosGet = async(req, res) => {
   res.json('ruta para obtener todos los alumnos'); 
}

const alumnoGet = async(req, res) => {
    //res.json('ruta para un alumno');
    try{
        const {expediente} = req.params;

        connection.query(`SELECT * FROM Alumnos a INNER JOIN Alumnos_Certificados ac ON a.expediente = ac.expediente_alumno
        INNER JOIN certificados c ON ac.certificado_id = c.id WHERE a.expediente = ${expediente};`, (err, results) => {
            res.json(results);
        })
        
    }catch(error){
        console.log(error);
    }
}

const alumnoPost = async(req, res) => {
    //res.json('se registro un alumno');
    try{
        const {expediente, nombres, apellidos, correo, skills} = req.body;

        connection.query(`INSERT INTO alumnos(expediente, nombres, apellidos, correo, skills) 
        VALUES(${expediente}, "${nombres}", "${apellidos}", "${correo}", "${skills}")`, (err, results) => {
            res.json(results);
        });
    }catch(error){
        console.log(error);
    }
}

module.exports = {
    alumnosGet,
    alumnoGet,
    alumnoPost
}