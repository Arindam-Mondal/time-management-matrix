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
  const { user, date } = req.query;

  try {
    const tasks = await taskCollection
      .find({ user: user, taskDate: date })
      .sort({ metacritic: -1 })
      .toArray();

    res.status(200).send({ tasks });
  } catch (err) {
    res.status(500).send({ error: "failed to fetch data" });
  }
};
