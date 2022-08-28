import { ObjectId } from "mongodb";
import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  // Update Todo Data
  const { status, isComplete, id } = req.body;
  const client = await clientPromise;
  const db = client.db();
  // Update the todo with the given id
  try {
    await db.collection("tasks").updateOne(
      { _id: ObjectId(id) },
      {
        $set: {
          isComplete,
          status,
        },
      }
    );
    // Send a response
    res.status(200).json({
      message: "Todo updated successfully",
    });
  } catch (err) {
    res.status(500).send({ error: "failed to update data" });
  }
}
