// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from "../../../util/dbConnect";
import User from "../../../models/User";

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      try {
        await dbConnect();
        const { username, email, password, phone } = req.body;

        const newUser = await User.create({ username, password, phone });
        res.status(201).json({ user: newUser });
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
  }
}
