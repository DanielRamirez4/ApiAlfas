const certificadosGet = (req, res) => {
    res.json('ruta para obtener todos los certificados');
}

const certificadoGet = async(req, res) => {
    res.json('ruta para un certificado');
}

const certificadoPost = async(req, res) => {
    res.json('ruta para registrar un certificado');
}

module.exports = {
    certificadosGet,
    certificadoGet,
    certificadoPost
}