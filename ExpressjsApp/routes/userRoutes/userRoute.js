const userController = require("../../app/controllers/userController")
const express = require("express")
const router = express.Router()

router.get("/", userController().userTestController)

module.exports = router