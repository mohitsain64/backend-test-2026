import express from "express";

import {
    createPost,
    getPosts,
    getPostById,
    updatePost,
    deletePost
} from "../controllers/postController.js";

// Create router
const router = express.Router();

// Post CRUD routes
router.post("/", createPost);
router.get("/", getPosts);
router.get("/:id", getPostById);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

export default router;