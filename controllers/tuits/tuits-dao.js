import tuitsModel from "./tuits-model.js";

export const findTuits = ()=> tuitsModel.find();
export const createTuit = (tuit) => tuitsModel.create(tuit);
export const deleteTuit = (tuidId) => tuitsModel.deleteOne({_id: tuidId});
export const updateTuit = (tuitId,tuit) => tuitsModel.updateOne({_id:tuitId}, {$set: tuit})