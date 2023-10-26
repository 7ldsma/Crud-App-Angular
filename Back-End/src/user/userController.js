var userService = require('./userService');



var getDataControllerFn = async(req, res) => {
    var user = await userService.getDataFromDBService();
    res.send({ "status": true, "data": user });
}




var createUserControllerFn = async (req, res) => {
    var status = await userService.createUserDBService(req.body);

    if(status){
        res.send({ "status": true, "message": "User created successfully" });
    } else { 
        res.send({ "status": false, "message": "Error while creating User" })
    }

}


var updateUserControllerFn = async(req, res) => {

    console.log(req.params.id);
    console.log(req.body);

    var result = await userService.updateUserDBService(req.params.id, req.body);

    if(result) {
        res.send({ "status": true, "message": "User updated" });
    } else {
        res.send({ "status": false, "message": "user update failed" })
    }

}


var deleteUserControllerFn = async(req, res) => {

    console.log(req.params.id);

    var result = await userService.removeUserDBService(req.params.id);

    if(result) {
        res.send({ "status": true, "message": "User deleted" });
    } else {
        res.send({ "status": false, "message": "User deletion failed" });

    }

}




module.exports = { getDataControllerFn, createUserControllerFn, updateUserControllerFn, deleteUserControllerFn };