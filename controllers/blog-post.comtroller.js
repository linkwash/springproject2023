const BlogPost = require("../models/blog-post.model.js");

exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a BlogPost
  const blogPost = new BlogPost({
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
    published: req.body.published || false
  });

  // Save BlogPost in the database
  BlogPost.create(blogPost, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Blog Post."
      });
    else res.send(data);
  });
};


