import express from 'express';
import dotenv from 'dotenv';

import { createPost, getPosts, getPost, deletePost, editPost } from './controllers.js';

const router = express.Router();
dotenv.config();

// read
router.get(`/${process.env.NODE_ENV_GET_POSTS_URL}`, getPosts);
router.get(`/${process.env.NODE_ENV_GET_POST_URL}/:postId`, getPost);

// update
router.post(`/${process.env.NODE_ENV_UPDATE_POST_URL}/:postId`, editPost);

// create
router.post(`/${process.env.NODE_ENV_ADD_POST_URL}`, createPost);

// delete
router.delete(`/${process.env.NODE_ENV_DELETE_POST_URL}/:postId`, deletePost);

export default router;