import express  from 'express';
import HelloController from './controllers/hello-controller.js'
import UserController from "./controllers/users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";
import cors from 'cors'
const app = express();
app.use(express.json())
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
})
// app.use(cors(
//     {
//         origin:["https://a8--nimble-salamander-6b50f8.netlify.app"],
//         methods: ["GET","POST","PUT","DELETE"],
//         credentials: true
//     }
// ));

app.use(cors());
HelloController(app)
UserController(app);
TuitsController(app);


app.listen(process.env.PORT || 4000)