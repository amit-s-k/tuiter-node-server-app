import express  from 'express';
import HelloController from './controllers/hello-controller.js'
import UserController from "./controllers/users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";
import cors from 'cors'
const app = express();
app.use(express.json())
app.use(cors(
    {
        origin:["https://a8--nimble-salamander-6b50f8.netlify.app"],
        methods: ["GET","POST","PUT","DELETE"],
        credentials: true
    }
));

HelloController(app)
UserController(app);
TuitsController(app);


app.listen(process.env.PORT || 4000)