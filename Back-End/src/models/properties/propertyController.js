var propertyService = require('./propertyService');


var getPropertyDataControllerFn = async(req, res) => {

    try {

        var property = await propertyService.getPropertyDataFromDBService();
        if(property){
            res.send({ "status": true, "data": property });

        } else {
            res.send({ "status": false, "message": "property not found. Please verify the information and try again" })

        }

    } catch (error){
        console.log(error)
        res.status(500).send({ "status": false, "message": "Oops! Something went wrong on our end. Our team has been notified and is working to fix the issue. Please try again later." })
    }
}




var createPropertyControllerFn = async (req, res) => {

    try{

        var status = await propertyService.createPropertyDBService(req.body);
    
        if(status){
            res.send({ "status": true, "message": "property created successfully" });
        } else { 
            res.send({ "status": false, "message": "Error while creating property" })
        }

    } catch (error){
        console.log(error)
        res.status(500).send({ "status": false, "message": "Oops! Something went wrong on our end. Our team has been notified and is working to fix the issue. Please try again later." })

    }

}





var updatePropertyControllerFn = async(req, res) => {

    console.log(req.params.id);
    console.log(req.body);

    try {

        var result = await propertyService.updatePropertyDBService(req.params.id, req.body);
    
        if(result) {
            res.send({ "status": true, "message": "property updated" });
        } else {
            res.send({ "status": false, "message": "property update failed" })
        }

    } catch (error) {
        console.log(error)

        res.status(500).send({ "status": false, "message": "Oops! Something went wrong on our end. Our team has been notified and is working to fix the issue. Please try again later." })

    }


}


var deletePropertyControllerFn = async(req, res) => {

    try{
        
        var result = await propertyService.removePropertyDBService(req.params.id);
    
        if(result) {
            res.send({ "status": true, "message": "property deleted" });
        } else {
            res.send({ "status": false, "message": "property deletion failed" });
    
        }
    } catch (error) {

        console.log(error)

        res.status(500).send({ "status": false, "message": "Oops! Something went wrong on our end. Our team has been notified and is working to fix the issue. Please try again later." })
    }


}




module.exports = { getPropertyDataControllerFn, createPropertyControllerFn, updatePropertyControllerFn, deletePropertyControllerFn };