// import posts from "./tuits.json" assert { type: 'json' };
// let tuits = posts;
import * as tuitsDao from "./tuits-dao.js"
const TuitsController = (app)=>{
    app.get("/api/tuits",findTuits);
    app.post("/api/tuits",createTuit);
    app.put("/api/tuits/:tid",updateTuit);
    app.delete("/api/tuits/:tid",deleteTuit);
}

const deleteTuit = (req,res)=>{
    tuits = tuits.filter(t => t._id!==req.params.tid);
    res.json(tuits);
}
const findTuits = async (req,res)=>{
    const tuits = await tuitsDao.findTuits();
    res.json(tuits);
}
const updateTuit = (req,res)=> {
    const updatedTuit = req.body
    const tuitIdToUpdate = req.params.tid;
    const status = tuitsDao.updateTuit(tuitIdToUpdate,updatedTuit);

    res.json(status);
}
const createTuit = (req,res)=>{
    let tuit = req.body;
    tuit._id = new Date().getTime();
    tuits.push(tuit);
    res.json(tuits);

}
export default TuitsController;