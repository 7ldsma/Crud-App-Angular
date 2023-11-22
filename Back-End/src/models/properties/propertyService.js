var propertyModel = require('./propertyModel');

module.exports.getPropertyDataFromDBService = async () => {

    try{
        const result = await propertyModel.find({});
        return result;
    } catch (error){
        return false;
    }
  
}


module.exports.createPropertyDBService = async (propertyDetails) => {

        try{

            var propertyModelData = new propertyModel();
    
            propertyModelData.name = propertyDetails.name;
            propertyModelData.description = propertyDetails.description;
            propertyModelData.location = propertyDetails.location;
            propertyModelData.image = propertyDetails.image;
    
    
            const result = await propertyModelData.save();
            return true;
        } catch (error) {
            console.log(error)
            return false;
        }

}


module.exports.updatePropertyDBService = async (id, propertyDetails) => {

    try{
        const result = await propertyModel.findByIdAndUpdate(id, propertyDetails);
        return true;
    } catch(error) {
        return false;
    }

}


module.exports.removePropertyDBService = async (id) => {

    try{
        const result = await propertyModel.findOneAndDelete(id);
        return true;
    } catch(error){
        return false;
    }

}