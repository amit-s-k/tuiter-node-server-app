import people from './users.js'
let users = people;

const UserController = (app)=>{
    app.get("/api/users",findUsers)
    app.get("/api/users/:uid",findUserById)
    app.post("/api/users/",createUser)
    app.delete("/api/users/:uid",deleteUser)
    app.put("/api/users/:uid",updateUser)
}

const deleteUser = (req,res)=>{
    users = users.filter(u => u._id!==req.params.uid);
    res.json(users);
}
const updateUser = (req,res)=>{
    const updatedUser = req.body
    users = users.map(u => {
        if(u._id===req.params.uid){
            return {
                ...u,
                ...updatedUser
            }
        }
        return u;
    });

    res.send(200);
}

const createUser = (req,res)=>{
    const user = req.body;
    user._id = new Date().getTime() +'';
    console.log(user)
    users.push(user);
    res.json(user);
}

const findUsers = (req,res)=>{
    const type = req.query.type
    if(type){
        const usersOfType = users.filter(u =>u.type ===type)
        res.json(usersOfType)
        return
    }
    res.json(users)
}
const findUserById = (req,res)=>{
    const userId = req.params.uid;
    const user = users.filter( u => u._id ===userId);
    res.json(user);
}
export default UserController;