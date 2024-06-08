const path = require("Path");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

const StaticPath = path.join(__dirname, "Page Files");
console.log(StaticPath);
app.use(express.static(StaticPath));

app.get("/", (req, res) => {
    res.send(" Success! ");
    res.end();
}); 

app.listen(PORT, () => {
    console.log(`Server Running on Port : ${PORT}`);
})