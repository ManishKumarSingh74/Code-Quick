const express = require('express')
const adminMiddleware = require("../middlewares/adminMiddleware")
const problemRouter = express.Router()
const createProblem = require('../controllers/userProblem')
problemRouter.post("/create",adminMiddleware,createProblem)
// problemRouter.patch("/:id",problemUpdate)
// problemRouter.delete("/:id",problemDelete)

// problemRouter.get("/:id",problemFetch)
// problemRouter.get("/", getAllProblem);
// problemRouter.get("/user", solvedProblem);

module.exports = problemRouter