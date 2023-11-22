var userModel = require('./userModel');

module.exports.getDataFromDBService = async () => {

    try{
        const result = await userModel.find({});
        return result;
    } catch (error){
        return false;
    }
  
}


module.exports.createUserDBService = async (userDetails) => {

        try{

            var userModelData = new userModel();
    
            userModelData.name = userDetails.name;
            userModelData.lastname = userDetails.lastname;
            userModelData.email = userDetails.email;
            userModelData.password = userDetails.password;
    
    
            const result = await userModelData.save();
            return true;
        } catch (error) {
            console.log(error)
            return false;
        }

}


module.exports.updateUserDBService = async (id, userDetails) => {

    try{
        const result = await userModel.findByIdAndUpdate(id, userDetails);
        return true;
    } catch(error) {
        return false;
    }

}


module.exports.removeUserDBService = async (id) => {

    try{
        const result = await userModel.findOneAndDelete(id);
        return true;
    } catch(error){
        return false;
    }

}