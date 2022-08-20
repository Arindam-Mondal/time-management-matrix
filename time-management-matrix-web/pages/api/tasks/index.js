import { MongoClient } from "mongodb";

export default async (req, res) => {
  const mongoUsername = process.env.MONGO_USERNAME;
  const mongoPassword = process.env.MONGO_PASSWORD;

  const client = await MongoClient.connect(
    "mongodb+srv://" +
      mongoUsername +
      ":" +
      mongoPassword +
      "@cluster0.cy2lntj.mongodb.net/task?retryWrites=true&w=majority"
  );

  const db = client.db();
  const taskCollection = db.collection("tasks");

  const tasks = await taskCollection
    .find({ user: "arindam@fittr.com" })
    .sort({ metacritic: -1 })
    .limit(20)
    .toArray();

  res.json(tasks);
};
