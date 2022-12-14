/* const express = require('express');
//const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;
const routes = require("./routes");

const db = require('./config/connection');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once("open", () => {
    console.log("db connected!")
    app.listen(PORT, () => {
        console.log(`App running on port ${PORT}!`);
    });
})
 */
const server = http.createServer(app);