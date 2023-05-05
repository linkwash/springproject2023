const sql = require("./db.js");

// BlogPost constructor
const BlogPost = function(blogPost) {
  this.title = blogPost.title;
  this.content = blogPost.content;
  this.author = blogPost.author;
  this.published = blogPost.published;
};

BlogPost.create = (newBlogPost, result) => {
  sql.query("INSERT INTO blog_posts SET ?", newBlogPost, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created blog post: ", { id: res.insertId, ...newBlogPost });
    result(null, { id: res.insertId, ...newBlogPost });
  });
};



module.exports = BlogPost;
