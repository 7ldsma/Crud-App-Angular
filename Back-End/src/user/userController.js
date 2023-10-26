var userService = require('./userService');



var getDataControllerFn = async(req, res) => {

    try {

        var user = await userService.getDataFromDBService();
        if(user){
            res.send({ "status": true, "data": user });

        } else {
            res.send({ "status": false, "message": "User not found. Please verify the information and try again" })

        }

    } catch (error){
        console.log(error)
        res.status(500).send({ "status": false, "message": "Oops! Something went wrong on our end. Our team has been notified and is working to fix the issue. Please try again later." })
    }
}




var createUserControllerFn = async (req, res) => {

    try{

        var status = await userService.createUserDBService(req.body);
    
        if(status){
            res.send({ "status": true, "message": "User created successfully" });
        } else { 
            res.send({ "status": false, "message": "Error while creating User" })
        }

    } catch (error){
        res.status(500).send({ "status": false, "message": "Oops! Something went wrong on our end. Our team has been notified and is working to fix the issue. Please try again later." })

    }

}





var updateUserControllerFn = async(req, res) => {

    console.log(req.params.id);
    console.log(req.body);

    try {

        var result = await userService.updateUserDBService(req.params.id, req.body);
    
        if(result) {
            res.send({ "status": true, "message": "User updated" });
        } else {
            res.send({ "status": false, "message": "user update failed" })
        }

    } catch (error) {
        console.log(error)

        res.status(500).send({ "status": false, "message": "Oops! Something went wrong on our end. Our team has been notified and is working to fix the issue. Please try again later." })

    }


}


var deleteUserControllerFn = async(req, res) => {

    try{
        
        var result = await userService.removeUserDBService(req.params.id);
    
        if(result) {
            res.send({ "status": true, "message": "User deleted" });
        } else {
            res.send({ "status": false, "message": "User deletion failed" });
    
        }
    } catch (error) {

        console.log(error)

        res.status(500).send({ "status": false, "message": "Oops! Something went wrong on our end. Our team has been notified and is working to fix the issue. Please try again later." })
    }


}




module.exports = { getDataControllerFn, createUserControllerFn, updateUserControllerFn, deleteUserControllerFn };