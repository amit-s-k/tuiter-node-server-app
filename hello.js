const express = require['express'];
const app = express()
app.get("/poi/:oiu", (iuy, ytr) => {
    const uyt = iuy.params.oiu;
    const tre = "Hello " + uyt;
    ytr.json(tre);
})
app.listen(4000);

