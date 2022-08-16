import { MongoClient } from "mongodb";

async function handler(req, res) {
  const mongoUsername = process.env.MONGO_USERNAME;
  const mongoPassword = process.env.MONGO_PASSWORD;
  if (req.method == "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://" +
        mongoUsername +
        ":" +
        mongoPassword +
        "@cluster0.cy2lntj.mongodb.net/task?retryWrites=true&w=majority"
    );
    console.log(
      "mongodb+srv://" +
        mongoUsername +
        ":" +
        mongoPassword +
        "@cluster0.cy2lntj.mongodb.net/task?retryWrites=true&w=majority"
    );
    const db = client.db();
    const taskCollection = db.collection("tasks");
    const result = await taskCollection.insertOne(data);
    console.log(data);
    res.status(201).json({ message: "Task Inserted" });
  }
}

export default handler;
