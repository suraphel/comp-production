const express = require("express");

const app = express();

app.get("/", (req, res) => {
        res.send("Hi you ");
});

app.listen(3360, () => {
        // here goes the container port number
        console.log("Listening on port 3360");
});
