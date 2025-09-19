const bodyParser = require("body-parser");
const expresss = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");

const url = "mongodb://localhost:27017";

const app = expresss();
const clinet = new MongoClient(url);
clinet.connect();

app.use(bodyParser.json());
app.use(cors());

const database = clinet.db("passwordManager");
const collection = database.collection("passwords");

app.get("/", async (req, res) => {
  const result = await collection.find({}).toArray();
  res.json(result);
  console.log(result);
  res.send("connected");
});

app.post("/", async (req, res) => {
  const password = req.body;
  const result = await collection.insertOne(password);
  res.send({ success: "data insted", result: result });
});

app.delete("/", async (req, res) => {
  const password = req.body;
  const result = await collection.deleteOne(password);
  res.send({ success: "data deleted", result: result });
});

app.listen(3000, () => {
  console.log(`server is running on port 3000 http://localhost:${3000}`);
});
