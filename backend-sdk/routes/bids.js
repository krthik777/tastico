import { Router } from "express";
import User from "../models/User.js";
import Userposts from "../models/Userposts.js";
// import Caterer from '../models/Caterer.js';

const router = Router();

router.get("/", async (req, res) => {
  res.send("Bid API");
});

router.get("/getbids/:postId", async (req, res) => {
  try {
    const postID = req.params.postId;
    const posts = await Userposts.find();
    var post = null;
    for (var i = 0; i < posts.length; i++) {
      if (posts[i].post_id === postID) {
        post = posts[i];
        break;
      }
    }

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.json(post.bids);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Route for a caterer to bid on a post
router.post("/cbid/:postId/", async (req, res) => {
  try {
    const { caterer, amount, pitch } = req.body;
    const postId = req.params.postId;

    const posts = await Userposts.find();

    var post = null;
    for (var i = 0; i < posts.length; i++) {
      if (posts[i].post_id === postId) {
        post = posts[i];
        break;
      }
    }

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    const bid = post.bids.find((bid) => bid.caterer === caterer);
    if (bid) {
      console.log("bid found");
      let update = {};
      if (amount) update["bids.$.amount"] = amount;
      if (pitch) update["bids.$.pitch"] = pitch;
      console.log(update);
      const updatedpost = await Userposts.findOneAndUpdate(
        { post_id: req.params.postId, "bids.caterer": caterer },
        { $set: update },
        { new: true }
      );
      res.send(updatedpost);
    } else {
      const updatedpost = await Userposts.findOneAndUpdate(
        { post_id: req.params.postId },
        {
          $push: {
            bids: {
              caterer,
              amount,
              pitch,
            },
          },
        },
        { new: true }
      );
      res.json(updatedpost);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Route for user to accept a bid
router.post("/accept/:postId/:catererId", async (req, res) => {
  const { postId, catererId } = req.params;
  try {
    const post = await Userposts.findOne({ post_id: postId });
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    const bid = post.bids.find((bid) => bid.caterer === catererId);
    if (!bid) {
      return res.status(404).json({ message: "Bid not found" });
    }
    // Update selected caterer
    const updatedPost = await Userposts.findOneAndUpdate(
      { post_id: postId },
      { selected: catererId },
      { new: true }
    );
    res.send(updatedPost);
  } catch (err) {}
});

export default router;
