// import posts from "./tuits.json" assert { type: 'json' };
// let tuits = posts;
import * as tuitsDao from "./tuits-dao.js"
const TuitsController = (app)=>{
    app.get("/api/tuits",findTuits);
    app.post("/api/tuits",createTuit);
    app.put("/api/tuits/:tid",updateTuit);
    app.delete("/api/tuits/:tid",deleteTuit);
}

const deleteTuit = async (req,res)=>{
    const tuitIdToBeDeleted = req.params.tid
    const status = await tuitsDao.deleteTuit(tuitIdToBeDeleted)
    res.json(status);
}
const findTuits = async (req,res)=>{
    const tuits = await tuitsDao.findTuits();
    res.json(tuits);
}
const updateTuit = async (req,res)=> {
    const tuitIdToUpdate = parseInt(req.params.tid);
    const updates = req.body
    const status = await tuitsDao.updateTuit(tuitIdToUpdate,updates);
    res.json(status);
}
const createTuit = async (req,res)=>{
    let tuit = req.body;
    const status = await tuitsDao.createTuit(tuit)
    res.json(status);

}
export default TuitsController;