import clientPromise from "../../../../../lib/mongodb";

export default async (req, res) => {
  const { user, date } = req.query;

  try {
    const client = await clientPromise;
    const db = client.db();
    const tasks = await db
      .collection("tasks")
      .find({ user: user, taskDate: date })
      .sort({ startDate: -1 })
      .toArray();

    res.status(200).send({ tasks });
  } catch (err) {
    res.status(500).send({ error: "failed to fetch data" });
  }
};
