import tuitsModel from "./tuits-model.js";

export const findTuits = ()=> tuitsModel.find();
export const createTuit = (tuit) => tuitsModel. create(tuit);
export const deleteTuit = (tuidId) => tuitsModel.deleteOne({_id: tuidId});
export const updateTuit = (tid,tuit) => tuitsModel.updateOne({_id:tid}, {$set: tuit})