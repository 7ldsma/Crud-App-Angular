const express = require('express')
const router = express.Router()

var propertyController = require('../src/models/properties/propertyController');

router.route('/properties/getAll').get(propertyController.getPropertyDataControllerFn);

router.route('/properties/create').post(propertyController.createPropertyControllerFn);

router.route('/properties/update/:id').patch(propertyController.updatePropertyControllerFn);

router.route('/properties/delete/:id').delete(propertyController.deletePropertyControllerFn);


module.exports = router;