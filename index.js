// app.js
const express = require("express");
const multer = require("multer");
const path = require("path");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");

const main = require("./db/index");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const app = express();

app.engine(
  ".hbs",
  exphbs.create({
    defaultLayout: "home",
    extname: ".hbs",
    layoutsDir: path.join(__dirname, "views"),
  }).engine
);
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());

const PORT = 3000;

// main().catch(console.error);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const { specs, swaggerUi } = require("./swagger");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.get("/", (req, res) => {
  // Render the 'home' template with dynamic data
  res.render("home", {
    name: "DR. Lakshya Mittal",
    father_name: "MR. Virener Mittal",
    qualification: "MBBS. MS(GENERAL Surgery)",
    desgination:"NATIONAL President, UDFA",
    dob:"20-09-1996",
    address:"137 A Block, Sri Karanpur Sri Ganganagar, Rajasthan",
  });
});

const userRoutes = require("./routes");

app.use(userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
