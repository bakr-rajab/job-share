import dbConnect from "../../../util/dbConnect";
import User from "../../../models/User";
export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      try {
        await dbConnect();
        const user = await User.findOne({ username: req.body.username });

        !user && res.status(404).json("user not found" + req.body.username);
        const pass = req.body.password === user.password ? true : false;

        !pass &&
          res.status(404).json("Password not matched" + req.body.password);
        res.json(user);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
  }
}
