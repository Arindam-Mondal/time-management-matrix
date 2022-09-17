import clientPromise from "../../../lib/mongodb";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db();
    const tasks = await db
      .collection("tasks")
      .find()
      .sort({ startDate: -1 })
      .toArray();

    res.status(200).send({ tasks });
  } catch (err) {
    res.status(500).send({ error: "failed to fetch data" });
  }
};
