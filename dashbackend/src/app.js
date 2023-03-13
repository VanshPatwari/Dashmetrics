const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;

require("./db/conn");




const static_path = path.join(__dirname, "../../assets");


app.use(express.static(static_path));

app.get("/", (req, res) => {
    res.send("dashmetrics")

});

app.listen(port, () => {
    console.log(`server is running at port no ${port}`);

})