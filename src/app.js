const express = require("express");
const path = require("path");

const hbs = require("hbs");

const app = express();

const publicDirectoryPath = path.join(__dirname, "../public");
const viewPath = path.join(__dirname, "../templates");
const partialPath = path.join(__dirname, "../templates/partials");

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Suraj",
  });
});

app.set("view engine", "hbs");
app.set("views", viewPath);
hbs.registerPartials(partialPath);

app.use(express.static(publicDirectoryPath));

app.get("/help", (req, res) => {
  res.send([
    {
      name: "Andrew",
      age: 25,
    },
    {
      name: "Sara",
      age: 34,
    },
  ]);
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "about",
    name: "Prasad",
    footer: "About footer",
  });
});

app.get("/weather", (req, res) => {
  if(!req.query.address){
    return res.send({
      error:"You must provide address"
    })
  }
  res.send({
    forecast: "IT is snowing",
    location: "Noida",
    address:req.query.address,
  });
});

app.get("/product", (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: "You must provide search term",
    });
  }
  console.log(req.query.search);
  res.send({
    product: [],
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Suraj Prasad",
    errorMessage: "page not found",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Suraj Prasad",
    errorMessage: "Page not found",
  });
});

app.listen(3000, () => {
  console.log("Server is up on 3000");
});
