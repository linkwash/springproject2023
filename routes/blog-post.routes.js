module.exports = app => {
  const blogPosts = require("../controllers/blog-post.controller.js");

  // Create a new Blog Post
  app.post("/api/blog-posts", blogPosts.create);

  // Retrieve all Blog Posts
  app.get("/api/blog-posts", blogPosts.findAll);

  // Retrieve a single Blog Post with blogPostId
  app.get("/api/blog-posts/:blogPostId", blogPosts.findOne);

  // Update a Blog Post with blogPostId
  app.put("/api/blog-posts/:blogPostId", blogPosts.update);

  // Delete a Blog Post with blogPostId
  app.delete("/api/blog-posts/:blogPostId", blogPosts.delete);

  // Delete all Blog Posts
  app.delete("/api/blog-posts", blogPosts.deleteAll);
};