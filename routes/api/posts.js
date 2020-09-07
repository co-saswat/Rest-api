const express = require('express');
const router = express.Router();
// posts Model
const Posts = require('../../models/Posts');


// @routes GET api/posts
// @desc GET All Post

router.get('/', async (req, res) => {
    try {
        const posts = await Posts.find();
        if (!posts) throw Error('No items');
        res.status(200).json(posts);
    } catch (error) {
        res.status(400).json({
            msg: error
        });
    }
});


// @routes GET api/posts
// @desc GET An Post

router.get('/:id', async (req, res) => {
    try {
        const post = await Posts.findById(req.params.id);
        if (!post) throw Error('No items');
        res.status(200).json(post);
    } catch (error) {
        res.status(400).json({
            msg: error
        });
    }
});


// @routes POST api/posts
// @desc Create An Post

router.post('/', async (req, res) => {
    const newPost = new Posts(req.body);
    try {
        const post = await newPost.save();
        if (!post) throw Error('Something went wrong while saving the post');
        res.status(200).json(post);
    } catch (error) {
        res.status(400).json({
            msg: error
        });
    }
});

// @routes DELECT api/posts/:id
// @desc delect An Post

router.delete('/:id', async (req, res) => {
   try {
       const post = await Posts.findByIdAndDelete(req.params.id);
       if(!post) throw Error('No post found!');
       res.status(200).json({
           success: true,
       });
   } catch (error) {
        res.status(400).json({
            msg: error
        });
   }
});

// @routes UPDATE api/posts/:id
// @desc update An Post

router.patch('/:id', async (req,res) => {
    try {
        const post = await Posts.findByIdAndUpdate(req.params.id,req.body);
        if(!post) throw Error('Something went wrong while updating the post');
        res.status(200).json({
            success: true
        })
    } catch (error) {
        res.status(400).json({
            msg: error
        });
    }
})

module.exports = router;