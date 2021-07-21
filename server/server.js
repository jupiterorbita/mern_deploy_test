const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;

// config middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


// require files
require("./config/mongoose");
require("./routes/routes")(app);

app.listen(PORT, ()=> console.log(`>>> server up on ${PORT} <<<`));