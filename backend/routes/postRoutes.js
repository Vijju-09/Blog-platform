const router = require("express").Router();

const Post = require("../models/Post");


// CREATE POST

router.post("/", async (req, res) => {

  try {

    const post = new Post({
      title: req.body.title,
      content: req.body.content
    });

    await post.save();

    res.json("Post Created");

  } catch (err) {

    console.log(err);

    res.status(500).json("Error Creating Post");
  }

});


// GET ALL POSTS

router.get("/", async (req, res) => {

  try {

    const posts = await Post.find();

    res.json(posts);

  } catch (err) {

    console.log(err);

    res.status(500).json("Error Fetching Posts");
  }

});

module.exports = router;