const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');
const { body } = require("express-validator");
const validator = [
    body('title').notEmpty().withMessage("Campo obligatorio"),
    body('rating').notEmpty().isNumeric().withMessage("Campo obligatorio"),
    body('awards').notEmpty().isNumeric().withMessage("Campo obligatorio"),
    body('length').notEmpty().isNumeric().withMessage("Campo obligatorio"),
    body('release_date').notEmpty().isDate().withMessage("Campo obligatorio"),
]

module.exports = validator;

router.get('/movies', moviesController.list);
router.get('/movies/new', moviesController.new);
router.get('/movies/recommended', moviesController.recomended);
router.get('/movies/detail/:id', moviesController.detail);
//Ruta GET "Muestra el formulario para la creación de una película."
router.get('/movies/create', moviesController.add);

//Ruta POST "Recibe los datos del formulario anterior y escribe la información en la base de datos."
router.post('/movies/create',  moviesController.create);

//Ruta GET "Muestra el formulario para la edición de una película."
router.get('/movies/edit/:id', moviesController.edit);

//Ruta PUT "Recibe información del formulario anterior y actualiza la información del ID ingresado por URL."
router.put('/movies/edit/:id', moviesController.update);

//Ruta DELETE "Se elimina el registro del ID ingresado por URL."
router.delete('/movies/delete/:id ', moviesController.destroy);



module.exports = router;