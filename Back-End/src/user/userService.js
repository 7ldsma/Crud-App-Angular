var userModel = require('./userModel');

module.exports.getDataFromDBService = () => {

    return new Promise(function checkURL(resolve, reject){

        userModel.find({}, function returnData(error, result){

            if(error) {
                reject(false);
            } else {
                resolve(result);
            }
        });
    });

}


module.exports.createUserDBService = async (userDetails) => {

        try{

            var userModelData = new userModel();
    
            userModelData.name = userDetails.name;
            userModelData.email = userDetails.email;
            userModelData.password = userDetails.password;
    
    
            const result = await userModelData.save();
            return true;
        } catch (error) {
            console.log(error)
            return false;
        }

}


module.exports.updateUserDBService = (id, userDetails) => {

    return new Promise(function myFn(resolve, reject) {
        userModel.findByIdAndUpdate(id, userDetails, function returnData(error, result){

            if(error){
                reject(false);
            } else {
                resolve(result);
            }
        });
    });

}


module.exports.removeUserDBService = (id) => {
    return new Promise(function myFn(resolve, reject) {
        userModel.findOneAndDelete(id, function returnData(error, result){

            if(error){
                reject(false);
            } else {
                resolve(result);
            }

        });
    });
}