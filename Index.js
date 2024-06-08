const path = require("path");
const fetch = require("node-fetch");
const hbs = require("hbs");

const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

let weatherData = null;
app.use(express.static(path.join(__dirname, '/Public')));

const ViewsPath = path.join(__dirname, "/Templates/views");
const PartialsPath = path.join(__dirname, "/Templates/Partials");

app.set('view engine', '.hbs');
app.set("views", ViewsPath);
hbs.registerPartials(PartialsPath);

app.get("/", (req, res) => {
    res.render("Weather", {
        data: weatherData
    });
}); 

function CallExternalAPI() {
    let URL = `https://api.openweathermap.org/data/2.5/weather?q=Surat&appid=d9605fab0676140197689aa9ff9523f2`;
    fetch(URL)
    .then((API_response) => {
        return API_response.json()  
    })
    .then((json_response) => {
        weatherData = json_response;
    })
    .catch((error) => console.log(error));
}

app.listen(PORT, () => {
    console.log(`Server Running on Port : ${PORT}`);
    CallExternalAPI();
})