const { body } =  require('express-validator');

//nombreSuperheroe debe validarse que sea requerido, no tenga espacios en blanco(trim), 
//una longitud minima de 3 caracteres y una longitud maxima de 60

const registerValidationRules = () => [

    body('nombreSuperHeroe')
        .trim()
        .notEmpty().withMessage('No puede estar vacio')
        .isLength({min: 3, max: 60}).withMessage('Longitud minima de 3 caracteres y maxima de 60 caracteres')
        
]

module.exports = { registerValidationRules }