import clientPromise from "../../../../../lib/mongodb";
import { authOptions } from "../../../auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth/next";
import { ObjectId } from "mongodb";

export default async (req, res) => {
  const { taskId } = req.query;
  const session = await unstable_getServerSession(req, res, authOptions);

  if (session) {
    try {
      const client = await clientPromise;
      const db = client.db();
      // const result = await (await collection.deleteOne({_id: new ObjectId(todoId)})).deletedCount;
      // client.close()

      const deletedTask = await db
        .collection("tasks")
        .deleteOne({ _id: new ObjectId(taskId) });

      res.status(200).send({ message: "Task Deleted" });
    } catch (err) {
      res.status(500).send({ error: "Failed to delete data" });
    }
  } else {
    res.status(401).send({ error: "Not Authorized" });
  }
};
