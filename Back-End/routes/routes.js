const express = require('express');

const router = express.Router();


var userController = require('../src/models/user/userController');

router.route('/user/getAll').get(userController.getDataControllerFn);

router.route('/user/create').post(userController.createUserControllerFn);

router.route('/user/update/:id').patch(userController.updateUserControllerFn);

router.route('/user/delete/:id').delete(userController.deleteUserControllerFn);

module.exports = router;