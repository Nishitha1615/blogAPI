const Post = require("../Models/Post_Schema.js");
const category = require("../Models/Category_Schema.js");

const createcat = async (req, res) => {
  try {
    const { id, name } = req.body;

    const post = new category({
      id,
      name,
    });

    await post.save();

    res.status(200).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getpost= async (req, res) => {
  try {
    const posts = await Post.find();

    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

const postCreate = async (req, res) => {
  try {
    const { id, title, content, category_id } = req.body;

    const post = new Post({
      id,
      title,
      content,
      category_id,
    });

    await post.save();

    res.json(post);
  } catch (error) {
    // console.error(error);
    res.json({ error: "Internal Server Error" });
  }
};

const getpostId = async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await Post.findOne({ id: postId }).populate("category_id");

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    res.json(post);
  } catch (error) {
    console.error(error);
    res.json({ error: "Internal Server Error" });
  }
};

const updatepost = async (req, res) => {
  try {
    const postId = req.params.id;
    const { title, content } = req.body;
    const post = await Post.findOne({ id: postId });

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    post.title = title;
    post.content = content;

    await post.save();

    res.json(post);
  } catch (error) {
    console.error(error);
    res.json({ error: "Internal Server Error" });
  }
};

const deletepost = async (req, res) => {
  try {
    const postId = req.params.id;

    const deletedPost = await Post.findOneAndDelete({ id: postId });

    if (!deletedPost) {
      return res.status(404).json({ error: "Post not found" });
    }

    res.json(deletedPost);
  } catch (error) {
    console.error(error);
    re.json({ error: "Internal Server Error" });
  }
};

// router.get('/posts/latest', async (req,res) => {
//   console.log("hi helooo i am from latest")
//   try {
//     const latestPosts = await category.aggregate([
//       {
//         '$lookup': {
//           'from': 'CategoryData',
//           'localField': 'category_id',
//           'foreignField': 'id',
//           'as': 'category'
//         }
//       }, {
//         '$sort': {
//           'category.name': 1,
//           'updated_at': -1
//         }
//       }, {
//         '$group': {
//           '_id': '$category.name',
//           'latestPost': {
//             '$first': '$$ROOT'
//           }
//         }
//       }, {
//         '$project': {
//           '_id': 0,
//           'id': '$latestPost.id',
//           'name': '$latestPost.name',
//           '__v': '$latestPost.__v'
//         }
//       }
//     ]);

//     console.log(latestPosts);

//     res.json(latestPosts);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

module.exports = {
  createcat,
  postCreate,
  getpostId,
  updatepost,
  deletepost,
  getpost
};
