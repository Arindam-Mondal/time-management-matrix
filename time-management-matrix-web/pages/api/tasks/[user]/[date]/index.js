import clientPromise from "../../../../../lib/mongodb";
import { authOptions } from "../../../auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth/next";

export default async (req, res) => {
  const { user, date } = req.query;
  const session = await unstable_getServerSession(req, res, authOptions);

  if (session) {
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
  } else {
    res.status(401).send({ error: "Not Authorized" });
  }
};
